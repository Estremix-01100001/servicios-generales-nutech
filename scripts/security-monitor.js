import fs from 'fs';
import path from 'path';

// Security monitoring script
class SecurityMonitor {
  constructor() {
    this.logFile = path.join(process.cwd(), 'logs', 'security.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(level, message, details = {}) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      details,
      source: 'security-monitor'
    };

    // Console output
    const logMessage = `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    if (level === 'error') {
      console.error(logMessage, details);
    } else if (level === 'warn') {
      console.warn(logMessage, details);
    } else {
      console.log(logMessage, details);
    }

    // File output
    try {
      fs.appendFileSync(this.logFile, JSON.stringify(logEntry) + '\n');
    } catch (error) {
      console.error('Failed to write to security log:', error);
    }
  }

  // Check for suspicious file access patterns
  checkFileAccess(filePath) {
    const suspiciousPaths = [
      '/etc/passwd',
      '/etc/shadow',
      '/proc/',
      '/sys/',
      '/dev/',
      'config.json',
      'package.json',
      '.env',
      '.git',
      'database.sql'
    ];

    const isSuspicious = suspiciousPaths.some(path => filePath.includes(path));
    if (isSuspicious) {
      this.log('warn', 'Suspicious file access attempt', { filePath });
    }

    return !isSuspicious;
  }

  // Monitor for potential DDoS patterns
  checkDDoSPattern(ip, requestCount, timeWindow) {
    const threshold = 100; // requests per minute
    if (requestCount > threshold) {
      this.log('error', 'Potential DDoS attack detected', {
        ip,
        requestCount,
        timeWindow,
        threshold
      });
      return false;
    }
    return true;
  }

  // Check for malicious user agents
  checkUserAgent(userAgent) {
    const maliciousPatterns = [
      /sqlmap/i,
      /nikto/i,
      /nmap/i,
      /scanner/i,
      /bot/i,
      /crawler/i,
      /spider/i,
      /curl/i,
      /wget/i,
      /python-requests/i
    ];

    const isMalicious = maliciousPatterns.some(pattern => pattern.test(userAgent));
    if (isMalicious) {
      this.log('warn', 'Potentially malicious user agent detected', { userAgent });
    }

    return !isMalicious;
  }

  // Generate security report
  generateReport() {
    try {
      if (!fs.existsSync(this.logFile)) {
        return { message: 'No security logs found' };
      }

      const logs = fs.readFileSync(this.logFile, 'utf8')
        .split('\n')
        .filter(line => line.trim())
        .map(line => JSON.parse(line));

      const report = {
        totalEvents: logs.length,
        errors: logs.filter(log => log.level === 'error').length,
        warnings: logs.filter(log => log.level === 'warn').length,
        info: logs.filter(log => log.level === 'info').length,
        last24Hours: logs.filter(log => {
          const logTime = new Date(log.timestamp);
          const now = new Date();
          return (now - logTime) < 24 * 60 * 60 * 1000;
        }).length,
        topEvents: this.getTopEvents(logs)
      };

      this.log('info', 'Security report generated', report);
      return report;
    } catch (error) {
      this.log('error', 'Failed to generate security report', { error: error.message });
      return { error: error.message };
    }
  }

  getTopEvents(logs) {
    const eventCounts = {};
    logs.forEach(log => {
      eventCounts[log.message] = (eventCounts[log.message] || 0) + 1;
    });

    return Object.entries(eventCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([event, count]) => ({ event, count }));
  }

  // Clean old logs
  cleanOldLogs(daysToKeep = 30) {
    try {
      if (!fs.existsSync(this.logFile)) return;

      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);

      const logs = fs.readFileSync(this.logFile, 'utf8')
        .split('\n')
        .filter(line => line.trim())
        .map(line => JSON.parse(line));

      const recentLogs = logs.filter(log => new Date(log.timestamp) > cutoffDate);

      fs.writeFileSync(this.logFile, recentLogs.map(log => JSON.stringify(log)).join('\n') + '\n');
      this.log('info', 'Old security logs cleaned', { 
        removed: logs.length - recentLogs.length,
        kept: recentLogs.length
      });
    } catch (error) {
      this.log('error', 'Failed to clean old logs', { error: error.message });
    }
  }
}

// Export singleton instance
export const securityMonitor = new SecurityMonitor();

// Auto-clean logs every day
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    securityMonitor.cleanOldLogs();
  }, 24 * 60 * 60 * 1000); // 24 hours
}
