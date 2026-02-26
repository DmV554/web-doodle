/**
 * Generates a PixiJS-compatible spritesheet (JSON atlas + WebP image)
 * from the images in ownimgs/, resized to 200x200px.
 *
 * Usage: node scripts/generate-spritesheet.mjs
 */
import sharp from 'sharp';
import { readdir, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');

// Symbol mapping: ownimgs filename → spritesheet frame name
const SYMBOL_MAP = {
	'Pincel.png': 'h1.webp',
	'ChurreteOleo.png': 'h2.webp',
	'Goma.png': 'h3.webp',
	'Brocha.png': 'h4.webp',
	'manchaazul.png': 'l1.webp',
	'manchablanco.png': 'l2.webp',
	'manchanaranja.png': 'l3.webp',
	'manchaverde.png': 'l4.webp',
	'mancharoja.png': 'l5.webp',
	'LIENZO.png': 'w.png', // Wild (M)
	'paletademadera.png': 's.png', // Scatter (S)
};

const CELL_SIZE = 200; // Each symbol is 200x200
const PADDING = 1; // 1px padding between sprites

async function generateSpritesheet() {
	const ownimgsDir = join(PROJECT_ROOT, 'ownimgs');
	const outputDir = join(PROJECT_ROOT, 'static', 'assets', 'sprites', 'symbolsStatic');

	const entries = Object.entries(SYMBOL_MAP);
	const count = entries.length;

	// Layout: arrange in a grid (2 columns to keep it narrow like the original)
	const cols = 2;
	const rows = Math.ceil(count / cols);
	const sheetWidth = cols * (CELL_SIZE + PADDING) + PADDING;
	const sheetHeight = rows * (CELL_SIZE + PADDING) + PADDING;

	console.log(`Generating spritesheet: ${count} sprites, ${cols}x${rows} grid, ${sheetWidth}x${sheetHeight}px`);

	// Process each image: resize to 200x200, get buffer
	const composites = [];
	const frames = {};

	for (let i = 0; i < entries.length; i++) {
		const [srcFile, frameName] = entries[i];
		const col = i % cols;
		const row = Math.floor(i / cols);
		const x = PADDING + col * (CELL_SIZE + PADDING);
		const y = PADDING + row * (CELL_SIZE + PADDING);

		console.log(`  Processing ${srcFile} → ${frameName} at (${x}, ${y})`);

		const srcPath = join(ownimgsDir, srcFile);
		const resized = await sharp(srcPath)
			.resize(CELL_SIZE, CELL_SIZE, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
			.png()
			.toBuffer();

		composites.push({ input: resized, left: x, top: y });

		// Create frame entry (TexturePacker-compatible JSON format)
		frames[frameName] = {
			frame: { x, y, w: CELL_SIZE, h: CELL_SIZE },
			rotated: false,
			trimmed: false,
			spriteSourceSize: { x: 0, y: 0, w: CELL_SIZE, h: CELL_SIZE },
			sourceSize: { w: CELL_SIZE, h: CELL_SIZE },
			pivot: { x: 0.5, y: 0.5 },
		};
	}

	// Create the composite image
	const sheetBuffer = await sharp({
		create: {
			width: sheetWidth,
			height: sheetHeight,
			channels: 4,
			background: { r: 0, g: 0, b: 0, alpha: 0 },
		},
	})
		.composite(composites)
		.webp({ quality: 90, lossless: false })
		.toBuffer();

	// Also create PNG version
	const sheetPngBuffer = await sharp({
		create: {
			width: sheetWidth,
			height: sheetHeight,
			channels: 4,
			background: { r: 0, g: 0, b: 0, alpha: 0 },
		},
	})
		.composite(composites)
		.png()
		.toBuffer();

	// Build the atlas JSON
	const atlas = {
		frames,
		meta: {
			app: 'https://www.codeandweb.com/texturepacker',
			version: '1.0',
			image: 'symbolsStatic.webp',
			format: 'RGBA8888',
			size: { w: sheetWidth, h: sheetHeight },
			scale: '1',
			smartupdate: '',
		},
	};

	// Write output files
	await writeFile(join(outputDir, 'symbolsStatic.webp'), sheetBuffer);
	await writeFile(join(outputDir, 'symbolsStatic.png'), sheetPngBuffer);
	await writeFile(join(outputDir, 'symbolsStatic.json'), JSON.stringify(atlas, null, '\t'));

	console.log('\n✅ Spritesheet generated successfully!');
	console.log(`   ${join(outputDir, 'symbolsStatic.webp')} (${(sheetBuffer.length / 1024).toFixed(1)} KB)`);
	console.log(`   ${join(outputDir, 'symbolsStatic.png')} (${(sheetPngBuffer.length / 1024).toFixed(1)} KB)`);
	console.log(`   ${join(outputDir, 'symbolsStatic.json')}`);
}

generateSpritesheet().catch((err) => {
	console.error('❌ Error generating spritesheet:', err);
	process.exit(1);
});
