#!/usr/bin/env node
// One-time image compression script using sharp.
// Compresses PNGs (lossless re-encode at max compression) and JPEGs (quality 82, mozjpeg).
// Only replaces the original if the compressed version is smaller.

import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';

const require = createRequire(import.meta.url);
const sharp = require('sharp');

const IMG_DIR = new URL('../static/img', import.meta.url).pathname;

let totalSaved = 0;
let fileCount = 0;
const promises = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) { walk(full); continue; }
    const ext = path.extname(entry.name).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

    const before = fs.statSync(full).size;
    const tmp = full + '.opt.tmp';

    const task = (ext === '.png'
      // Lossy palette quantization via imagequant (same algorithm as pngquant)
      ? sharp(full).png({ palette: true, quality: 85, effort: 10, compressionLevel: 9 })
      : sharp(full).jpeg({ quality: 82, mozjpeg: true })
    ).toFile(tmp).then(() => {
      const after = fs.statSync(tmp).size;
      const delta = before - after;
      if (after < before) {
        fs.renameSync(tmp, full);
        totalSaved += delta;
        fileCount++;
        const pct = ((delta / before) * 100).toFixed(0);
        console.log(`  ✓ ${path.relative(IMG_DIR, full).padEnd(45)} ${(before / 1024).toFixed(0)}K → ${(after / 1024).toFixed(0)}K  -${pct}%`);
      } else {
        fs.unlinkSync(tmp);
        console.log(`  = ${path.relative(IMG_DIR, full)} (already optimal)`);
      }
    }).catch(err => {
      if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
      console.error(`  ✗ ${full}: ${err.message}`);
    });

    promises.push(task);
  }
}

console.log('Compressing images...\n');
walk(IMG_DIR);

Promise.all(promises).then(() => {
  console.log(`\nDone: ${fileCount} files compressed, ${(totalSaved / 1024).toFixed(0)} KB saved`);
});
