#!/usr/bin/env node

// Script para verificar el build antes del deploy

const fs = require('fs');
const path = require('path');

const errors = [];

// Verificar que todos los archivos CSS existen
const cssFiles = [
  'src/styles/global.css',
  'src/styles/global-clean.css',
  'src/styles/components/MotionContact.css',
  'src/styles/components/MotionPartners.css',
  'src/styles/components/MotionServiciosDetallados.css',
  'src/styles/components/ServiceCard.css'
];

console.log('🔍 Verificando archivos CSS...');
cssFiles.forEach(file => {
  if (!fs.existsSync(file)) {
    errors.push(`❌ Archivo CSS faltante: ${file}`);
  } else {
    console.log(`✅ ${file}`);
  }
});

// Verificar que todos los componentes tienen sus archivos CSS
const components = [
  'MotionContact',
  'MotionPartners', 
  'MotionServiciosDetallados',
  'ServiceCard'
];

console.log('\n🔍 Verificando componentes...');
components.forEach(component => {
  const cssFile = `src/styles/components/${component}.css`;
  const tsxFile = `src/components/${component}.tsx`;
  
  if (!fs.existsSync(cssFile)) {
    errors.push(`❌ CSS faltante para componente: ${component}`);
  }
  
  if (!fs.existsSync(tsxFile)) {
    errors.push(`❌ Componente faltante: ${component}`);
  }
  
  if (fs.existsSync(cssFile) && fs.existsSync(tsxFile)) {
    console.log(`✅ ${component}`);
  }
});

// Verificar estructura de tipos
console.log('\n🔍 Verificando tipos TypeScript...');
const typeFiles = [
  'src/types/index.ts',
  'src/hooks/useForm.ts',
  'src/hooks/useScrollPosition.ts',
  'src/utils/validation.ts',
  'src/utils/animations.ts'
];

typeFiles.forEach(file => {
  if (!fs.existsSync(file)) {
    errors.push(`❌ Archivo de tipos/utilidades faltante: ${file}`);
  } else {
    console.log(`✅ ${file}`);
  }
});

// Reporte final
console.log('\n📊 Reporte de Verificación:');
if (errors.length === 0) {
  console.log('🎉 ¡Todos los archivos están en orden!');
  console.log('✅ Build listo para deploy');
  process.exit(0);
} else {
  console.log('❌ Se encontraron errores:');
  errors.forEach(error => console.log(error));
  console.log('\n🚫 Build no puede proceder hasta corregir los errores');
  process.exit(1);
}
