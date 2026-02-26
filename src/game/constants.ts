import _ from 'lodash';

import type { RawSymbol, SymbolState } from './types';

export const SYMBOL_SIZE = 120;

export const REEL_PADDING = 0.53;

// initial board (padded top and bottom)
export const INITIAL_BOARD: RawSymbol[][] = [
	// Reel 1
	[
		{ name: 'L1' },
		{ name: 'H1' },
		{ name: 'L2' },
		{ name: 'H2' },
		{ name: 'L3' },
		{ name: 'H3' },
		{ name: 'L4' },
	],
	// Reel 2
	[
		{ name: 'L5' },
		{ name: 'H4' },
		{ name: 'L1' },
		{ name: 'H1' },
		{ name: 'L2' },
		{ name: 'H2' },
		{ name: 'L3' },
	],
	// Reel 3
	[
		{ name: 'L4' },
		{ name: 'H3' },
		{ name: 'L5' },
		{ name: 'H4' },
		{ name: 'L1' },
		{ name: 'H1' },
		{ name: 'L2' },
	],
	// Reel 4
	[
		{ name: 'L3' },
		{ name: 'H2' },
		{ name: 'L4' },
		{ name: 'H3' },
		{ name: 'L5' },
		{ name: 'H4' },
		{ name: 'L1' },
	],
	// Reel 5
	[
		{ name: 'L2' },
		{ name: 'H1' },
		{ name: 'L3' },
		{ name: 'H2' },
		{ name: 'L4' },
		{ name: 'H3' },
		{ name: 'L5' },
	],
];

export const BOARD_DIMENSIONS = { x: INITIAL_BOARD.length, y: INITIAL_BOARD[0].length - 2 };

export const BOARD_SIZES = {
	width: SYMBOL_SIZE * BOARD_DIMENSIONS.x,
	height: SYMBOL_SIZE * BOARD_DIMENSIONS.y,
};

export const BACKGROUND_RATIO = 2039 / 1000;
export const PORTRAIT_BACKGROUND_RATIO = 1242 / 2208;
const PORTRAIT_RATIO = 800 / 1422;
const LANDSCAPE_RATIO = 1600 / 900;
const DESKTOP_RATIO = 1422 / 800;

const DESKTOP_HEIGHT = 800;
const LANDSCAPE_HEIGHT = 900;
const PORTRAIT_HEIGHT = 1422;
export const DESKTOP_MAIN_SIZES = { width: DESKTOP_HEIGHT * DESKTOP_RATIO, height: DESKTOP_HEIGHT };
export const LANDSCAPE_MAIN_SIZES = {
	width: LANDSCAPE_HEIGHT * LANDSCAPE_RATIO,
	height: LANDSCAPE_HEIGHT,
};
export const PORTRAIT_MAIN_SIZES = {
	width: PORTRAIT_HEIGHT * PORTRAIT_RATIO,
	height: PORTRAIT_HEIGHT,
};

export const HIGH_SYMBOLS = ['H1', 'H2', 'H3', 'H4'];

export const INITIAL_SYMBOL_STATE: SymbolState = 'static';

const HIGH_SYMBOL_SIZE = 0.9;
const LOW_SYMBOL_SIZE = 0.9;
const SPECIAL_SYMBOL_SIZE = 1;

const SPIN_OPTIONS_SHARED = {
	reelBounceBackSpeed: 0.15,
	reelSpinSpeedBeforeBounce: 4,
	reelPaddingMultiplierNormal: 1.2,
	reelPaddingMultiplierAnticipated: 10,
	reelSpinDelay: 145,
};

export const SPIN_OPTIONS_DEFAULT = {
	...SPIN_OPTIONS_SHARED,
	reelPreSpinSpeed: 2,
	reelSpinSpeed: 3,
	reelBounceSizeMulti: 0.3,
};

export const SPIN_OPTIONS_FAST = {
	...SPIN_OPTIONS_SHARED,
	reelPreSpinSpeed: 5,
	reelSpinSpeed: 5,
	reelBounceSizeMulti: 0.05,
};

export const MOTION_BLUR_VELOCITY = 31;

export const zIndexes = {
	background: {
		backdrop: -3,
		normal: -2,
		feature: -1,
	},
};

const explosion = {
	type: 'spine',
	assetKey: 'explosion',
	animationName: 'explosion',
	sizeRatios: { width: 1, height: 1 },
};

// Static sprite definitions — images from the new symbolsStatic spritesheet
// H symbols: Pincel (H1), ChurreteOleo (H2), Goma (H3), Brocha (H4)
const h1Static = { type: 'sprite', assetKey: 'h1.webp', sizeRatios: { width: 1, height: 1 } };
const h2Static = { type: 'sprite', assetKey: 'h2.webp', sizeRatios: { width: 1, height: 1 } };
const h3Static = { type: 'sprite', assetKey: 'h3.webp', sizeRatios: { width: 1, height: 1 } };
const h4Static = { type: 'sprite', assetKey: 'h4.webp', sizeRatios: { width: 1, height: 1 } };

// L symbols: manchaazul (L1), manchablanco (L2), manchanaranja (L3), manchaverde (L4)
const l1Static = { type: 'sprite', assetKey: 'l1.webp', sizeRatios: { width: 1, height: 1 } };
const l2Static = { type: 'sprite', assetKey: 'l2.webp', sizeRatios: { width: 1, height: 1 } };
const l3Static = { type: 'sprite', assetKey: 'l3.webp', sizeRatios: { width: 1, height: 1 } };
const l4Static = { type: 'sprite', assetKey: 'l4.webp', sizeRatios: { width: 1, height: 1 } };

// L5: mancharoja placeholder (will be replaced with final art)
const l5Static = { type: 'sprite', assetKey: 'l5.webp', sizeRatios: { width: 1, height: 1 } };

// M (Wild) = LIENZO.png — from spritesheet as 'w.png' frame
const mStatic = { type: 'sprite', assetKey: 'w.png', sizeRatios: { width: 1, height: 1 } };

// S (Scatter) = paletademadera.png — from spritesheet as 's.png' frame
const sStatic = { type: 'sprite', assetKey: 's.png', sizeRatios: { width: 1, height: 1 } };

export const SYMBOL_INFO_MAP = {
	H1: {
		explosion,
		win: h1Static, // TODO: replace with Spine animation when available
		postWinStatic: h1Static,
		static: h1Static,
		spin: h1Static,
		land: h1Static,
	},
	H2: {
		explosion,
		win: h2Static,
		postWinStatic: h2Static,
		static: h2Static,
		spin: h2Static,
		land: h2Static,
	},
	H3: {
		explosion,
		win: h3Static,
		postWinStatic: h3Static,
		static: h3Static,
		spin: h3Static,
		land: h3Static,
	},
	H4: {
		explosion,
		win: h4Static,
		postWinStatic: h4Static,
		static: h4Static,
		spin: h4Static,
		land: h4Static,
	},
	L1: {
		explosion,
		win: l1Static,
		postWinStatic: l1Static,
		static: l1Static,
		spin: l1Static,
		land: l1Static,
	},
	L2: {
		explosion,
		win: l2Static,
		postWinStatic: l2Static,
		static: l2Static,
		spin: l2Static,
		land: l2Static,
	},
	L3: {
		explosion,
		win: l3Static,
		postWinStatic: l3Static,
		static: l3Static,
		spin: l3Static,
		land: l3Static,
	},
	L4: {
		explosion,
		win: l4Static,
		postWinStatic: l4Static,
		static: l4Static,
		spin: l4Static,
		land: l4Static,
	},
	L5: {
		explosion,
		win: l5Static,
		postWinStatic: l5Static,
		static: l5Static,
		spin: l5Static,
		land: l5Static,
	},
	M: {
		explosion,
		win: mStatic,
		postWinStatic: mStatic,
		static: mStatic,
		spin: mStatic,
		land: mStatic,
	},
	S: {
		explosion,
		win: sStatic,
		postWinStatic: sStatic,
		static: sStatic,
		spin: sStatic,
		land: sStatic,
	},
} as const;

export const SCATTER_LAND_SOUND_MAP = {
	1: 'sfx_scatter_stop_1',
	2: 'sfx_scatter_stop_2',
	3: 'sfx_scatter_stop_3',
	4: 'sfx_scatter_stop_4',
	5: 'sfx_scatter_stop_5',
} as const;
