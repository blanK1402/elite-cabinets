import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = 'src/assets/images';

// Configuración de optimización por imagen
const optimizations = [
  { 
    file: 'hero-kitchen-cabinets.jpg', 
    width: 1920, 
    quality: 80,
    output: 'hero-kitchen-cabinets.webp'
  },
  { 
    file: 'service-1-kitchen.jpg', 
    width: 800, 
    quality: 75,
    output: 'service-1-kitchen.webp'
  },
  { 
    file: 'service-2-closet.jpg', 
    width: 800, 
    quality: 75,
    output: 'service-2-closet.webp'
  },
  { 
    file: 'service-3-vanity.jpg', 
    width: 800, 
    quality: 75,
    output: 'service-3-vanity.webp'
  },
  { 
    file: 'logo.png', 
    width: 200, 
    quality: 90,
    output: 'logo.webp'
  },
];

console.log('🖼️  Optimizando imágenes...\n');

for (const opt of optimizations) {
  const inputPath = path.join(imagesDir, opt.file);
  const outputPath = path.join(imagesDir, opt.output);
  
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  No encontrado: ${opt.file}`);
    continue;
  }
  
  const originalSize = fs.statSync(inputPath).size;
  
  await sharp(inputPath)
    .resize(opt.width, null, { 
      withoutEnlargement: true,
      fit: 'inside'
    })
    .webp({ quality: opt.quality, effort: 6 })
    .toFile(outputPath);
  
  const optimizedSize = fs.statSync(outputPath).size;
  const saved = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
  
  console.log(`✅ ${opt.file}`);
  console.log(`   ${(originalSize/1024).toFixed(1)}KB → ${(optimizedSize/1024).toFixed(1)}KB (${saved}% más pequeño)\n`);
}

console.log('🎉 Optimización completa!');
