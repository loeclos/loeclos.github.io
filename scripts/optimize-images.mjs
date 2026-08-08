import sharp from 'sharp';
import { readdirSync, rmSync, statSync } from 'node:fs';
import { join, parse } from 'node:path';

const dir = 'public/images';
const THUMB_WIDTH = 640;
const DETAIL_WIDTH = 1280;
const QUALITY = 75;

const files = readdirSync(dir).filter((f) => f.toLowerCase().endsWith('.png'));

let before = 0;
let after = 0;

for (const f of files) {
  const { name } = parse(f);
  const isThumb = name.toLowerCase().includes('thumbnail');
  const width = isThumb ? THUMB_WIDTH : DETAIL_WIDTH;
  const src = join(dir, f);
  const out = join(dir, `${name}.webp`);

  const sizeBefore = statSync(src).size;
  await sharp(src)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 6 })
    .toFile(out);

  const sizeAfter = statSync(out).size;
  before += sizeBefore;
  after += sizeAfter;
  console.log(
    `${f} (${(sizeBefore / 1024).toFixed(0)}KB) -> ${name}.webp (${(sizeAfter / 1024).toFixed(0)}KB)  ${(100 - (sizeAfter / sizeBefore) * 100).toFixed(0)}% saved`
  );
  rmSync(src);
}

console.log(`\nTotal: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB  (${(100 - (after / before) * 100).toFixed(0)}% saved)`);
