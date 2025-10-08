# Script para refrescar las variables de entorno PATH en PowerShell
# Uso: .\refresh-path.ps1

Write-Host "Refrescando variables de entorno PATH..." -ForegroundColor Cyan

$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

Write-Host "✓ PATH actualizado correctamente" -ForegroundColor Green
Write-Host ""
Write-Host 'Ahora puedes ejecutar: npm run dev' -ForegroundColor Yellow

