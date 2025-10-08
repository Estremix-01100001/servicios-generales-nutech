// Security middleware for enhanced protection
export interface SecurityConfig {
  rateLimit: {
    windowMs: number;
    maxRequests: number;
  };
  csp: {
    enabled: boolean;
    reportOnly: boolean;
  };
  logging: {
    enabled: boolean;
    logLevel: 'error' | 'warn' | 'info';
  };
}

export class SecurityManager {
  private static instance: SecurityManager;
  private requestCounts: Map<string, { count: number; resetTime: number }> = new Map();
  
  private constructor() {}
  
  public static getInstance(): SecurityManager {
    if (!SecurityManager.instance) {
      SecurityManager.instance = new SecurityManager();
    }
    return SecurityManager.instance;
  }

  // Rate limiting implementation
  public checkRateLimit(ip: string, maxRequests: number = 100, windowMs: number = 900000): boolean {
    const now = Date.now();
    const key = `rate_limit_${ip}`;
    const current = this.requestCounts.get(key);

    if (!current || now > current.resetTime) {
      this.requestCounts.set(key, { count: 1, resetTime: now + windowMs });
      return true;
    }

    if (current.count >= maxRequests) {
      return false;
    }

    current.count++;
    this.requestCounts.set(key, current);
    return true;
  }

  // Input sanitization
  public sanitizeInput(input: string): string {
    if (typeof input !== 'string') return '';
    
    return input
      // Remove HTML tags
      .replace(/<[^>]*>/g, '')
      // Remove JavaScript protocols
      .replace(/javascript:/gi, '')
      .replace(/vbscript:/gi, '')
      .replace(/data:/gi, '')
      // Remove event handlers
      .replace(/on\w+\s*=/gi, '')
      // Remove SQL injection patterns
      .replace(/(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION|SCRIPT)\b)/gi, '')
      // Limit length
      .trim()
      .substring(0, 1000);
  }

  // Validate email with enhanced security
  public validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email) && email.length <= 254;
  }

  // Validate phone number
  public validatePhone(phone: string): boolean {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  }

  // Detect potential XSS attacks
  public detectXSS(input: string): boolean {
    const xssPatterns = [
      /<script/i,
      /javascript:/i,
      /vbscript:/i,
      /onload=/i,
      /onerror=/i,
      /onclick=/i,
      /<iframe/i,
      /<object/i,
      /<embed/i,
      /<form/i,
      /<input/i,
      /<meta/i,
      /<link/i,
      /<style/i
    ];

    return xssPatterns.some(pattern => pattern.test(input));
  }

  // Detect SQL injection attempts
  public detectSQLInjection(input: string): boolean {
    const sqlPatterns = [
      /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION|SCRIPT)\b)/i,
      /(\b(OR|AND)\b.*\b(SELECT|INSERT|UPDATE|DELETE)\b)/i,
      /('|(\\')|(;)|(\\;)|(\|)|(\\|)|(\*)|(\\*)|(\s+--\s+))/i,
      /(\b(UNION|SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC)\b.*\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC)\b)/i
    ];

    return sqlPatterns.some(pattern => pattern.test(input));
  }

  // Security logging
  public logSecurityEvent(event: string, details: any, level: 'error' | 'warn' | 'info' = 'warn'): void {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      event,
      details,
      level,
      userAgent: typeof window !== 'undefined' ? window.navigator?.userAgent : 'server',
      ip: 'client-side'
    };

    if (level === 'error') {
      console.error('[SECURITY ERROR]', logEntry);
    } else if (level === 'warn') {
      console.warn('[SECURITY WARNING]', logEntry);
    } else {
      console.info('[SECURITY INFO]', logEntry);
    }

    // In production, this would send to a security monitoring service
    // Example: sendToSecurityService(logEntry);
  }

  // Clean up old rate limit entries
  public cleanupRateLimits(): void {
    const now = Date.now();
    for (const [key, value] of this.requestCounts.entries()) {
      if (now > value.resetTime) {
        this.requestCounts.delete(key);
      }
    }
  }
}

// Export singleton instance
export const securityManager = SecurityManager.getInstance();

// Clean up rate limits every 15 minutes
if (typeof window !== 'undefined') {
  setInterval(() => {
    securityManager.cleanupRateLimits();
  }, 15 * 60 * 1000);
}
