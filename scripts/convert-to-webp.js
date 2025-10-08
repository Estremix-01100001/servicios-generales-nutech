import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lista de imágenes a convertir
const imagesToConvert = [
  'analisis-datos.jpg',
  'capacitacion-ejecutiva.jpg',
  'desarrollo-web-mobile.jpg',
  'consultoria-tecnologica.jpg',
  'inteligencia-artificial.jpg',
  'it-staffing.jpg',
  'seguridad-ciberseguridad.jpg',
  'transformacion-digital.jpg'
];

// Función para convertir imagen a WebP
async function convertToWebP(inputPath, outputPath, quality = 85) {
  try {
    await sharp(inputPath)
      .webp({ quality })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${savings}% smaller)`);
  } catch (error) {
    console.error(`❌ Error converting ${inputPath}:`, error.message);
  }
}

// Función principal
async function main() {
  console.log('🚀 Converting images to WebP format...\n');
  
  const inputDir = path.join(__dirname, '../public/images');
  const outputDir = path.join(__dirname, '../public/images');
  
  for (const imageName of imagesToConvert) {
    const inputPath = path.join(inputDir, imageName);
    const webpName = imageName.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const outputPath = path.join(outputDir, webpName);
    
    if (fs.existsSync(inputPath)) {
      await convertToWebP(inputPath, outputPath);
    } else {
      console.log(`⚠️  File not found: ${inputPath}`);
    }
  }
  
  console.log('\n🎉 WebP conversion completed!');
}

main().catch(console.error);
