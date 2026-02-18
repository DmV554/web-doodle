export default {
	providerName: 'sample_provider',
	gameName: 'awesome_lines',
	gameID: 'awesome_lines',
	rtp: 0.97,
	numReels: 5,
	numRows: [5, 5, 5, 5, 5],
	betModes: {
		base: {
			cost: 1.0,
			feature: true,
			buyBonus: false,
			rtp: 0.97,
			max_win: 5000.0,
		},
		bonus: {
			cost: 100.0,
			feature: false,
			buyBonus: true,
			rtp: 0.97,
			max_win: 5000.0,
		},
	},
	paylines: {
		'1': [0, 0, 0, 0, 0],
		'2': [1, 1, 1, 1, 1],
		'3': [2, 2, 2, 2, 2],
		'4': [3, 3, 3, 3, 3],
		'5': [4, 4, 4, 4, 4],
		'6': [0, 1, 2, 3, 4],
		'7': [4, 3, 2, 1, 0],
		'8': [0, 1, 2, 1, 0],
		'9': [4, 3, 2, 3, 4],
		'10': [2, 1, 0, 1, 2],
		'11': [2, 3, 4, 3, 2],
		'12': [1, 0, 1, 0, 1],
		'13': [3, 4, 3, 4, 3],
		'14': [1, 2, 1, 2, 1],
		'15': [3, 2, 3, 2, 3],
		'16': [0, 1, 0, 1, 0],
		'17': [4, 3, 4, 3, 4],
		'18': [1, 2, 3, 2, 1],
		'19': [3, 2, 1, 2, 3],
	},
	symbols: {
		M: {
			paytable: [
				{ '5': 50.0 }, { '4': 20.0 }, { '3': 10.0 },
			],
			special_properties: ['wild', 'multiplier'],
		},
		H1: {
			paytable: [
				{ '5': 50.0 }, { '4': 20.0 }, { '3': 10.0 },
			],
		},
		H2: {
			paytable: [
				{ '5': 15.0 }, { '4': 5.0 }, { '3': 3.0 },
			],
		},
		H3: {
			paytable: [
				{ '5': 10.0 }, { '4': 3.0 }, { '3': 2.0 },
			],
		},
		H4: {
			paytable: [
				{ '5': 8.0 }, { '4': 2.0 }, { '3': 1.0 },
			],
		},
		L1: {
			paytable: [
				{ '5': 5.0 }, { '4': 1.0 }, { '3': 0.5 },
			],
		},
		L2: {
			paytable: [
				{ '5': 3.0 }, { '4': 0.7 }, { '3': 0.3 },
			],
		},
		L3: {
			paytable: [
				{ '5': 3.0 }, { '4': 0.7 }, { '3': 0.3 },
			],
		},
		L4: {
			paytable: [
				{ '5': 2.0 }, { '4': 0.5 }, { '3': 0.2 },
			],
		},
		L5: {
			paytable: [
				{ '5': 1.0 }, { '4': 0.3 }, { '3': 0.1 },
			],
		},
		S: {
			special_properties: ['scatter'],
		},
	},
	paddingReels: {
		basegame: [
			[
				{ name: 'L1' }, { name: 'H1' }, { name: 'H3' }, { name: 'L1' }, { name: 'L5' },
				{ name: 'L4' }, { name: 'L1' }, { name: 'L2' }, { name: 'H3' }, { name: 'S' },
				{ name: 'L5' }, { name: 'L3' }, { name: 'L5' }, { name: 'L1' }, { name: 'L4' },
				{ name: 'M' },  { name: 'L2' }, { name: 'H2' }, { name: 'L3' }, { name: 'L5' },
			],
			[
				{ name: 'L2' }, { name: 'H2' }, { name: 'H1' }, { name: 'L2' }, { name: 'L3' },
				{ name: 'H4' }, { name: 'L5' }, { name: 'L1' }, { name: 'H2' }, { name: 'L3' },
				{ name: 'M' },  { name: 'S' },  { name: 'L4' }, { name: 'L2' }, { name: 'H3' },
				{ name: 'L5' }, { name: 'L1' }, { name: 'H4' }, { name: 'L2' }, { name: 'L3' },
			],
			[
				{ name: 'L3' }, { name: 'H3' }, { name: 'L4' }, { name: 'L5' }, { name: 'L1' },
				{ name: 'H1' }, { name: 'M' },  { name: 'M' },  { name: 'L3' }, { name: 'L2' },
				{ name: 'H4' }, { name: 'S' },  { name: 'L5' }, { name: 'L3' }, { name: 'L1' },
				{ name: 'L2' }, { name: 'H2' }, { name: 'L4' }, { name: 'H3' }, { name: 'L5' },
			],
			[
				{ name: 'L4' }, { name: 'H4' }, { name: 'L2' }, { name: 'L3' }, { name: 'L5' },
				{ name: 'H2' }, { name: 'L1' }, { name: 'M' },  { name: 'H1' }, { name: 'L4' },
				{ name: 'M' },  { name: 'L5' }, { name: 'S' },  { name: 'L2' }, { name: 'L3' },
				{ name: 'H3' }, { name: 'L4' }, { name: 'L1' }, { name: 'H4' }, { name: 'L2' },
			],
			[
				{ name: 'L5' }, { name: 'H1' }, { name: 'L3' }, { name: 'L2' }, { name: 'L4' },
				{ name: 'H3' }, { name: 'S' },  { name: 'L5' }, { name: 'M' },  { name: 'M' },
				{ name: 'H2' }, { name: 'L1' }, { name: 'L4' }, { name: 'L3' }, { name: 'H4' },
				{ name: 'L2' }, { name: 'L5' }, { name: 'H1' }, { name: 'L2' }, { name: 'L3' },
			],
		],
		freegame: [
			[
				{ name: 'L1' }, { name: 'H1' }, { name: 'H3' }, { name: 'L1' }, { name: 'L5' },
				{ name: 'L4' }, { name: 'L1' }, { name: 'L2' }, { name: 'H3' }, { name: 'S' },
				{ name: 'L5' }, { name: 'L3' }, { name: 'L5' }, { name: 'L1' }, { name: 'L4' },
				{ name: 'M' },  { name: 'L2' }, { name: 'H2' }, { name: 'L3' }, { name: 'L5' },
			],
			[
				{ name: 'L2' }, { name: 'H2' }, { name: 'H1' }, { name: 'L2' }, { name: 'L3' },
				{ name: 'H4' }, { name: 'L5' }, { name: 'L1' }, { name: 'H2' }, { name: 'L3' },
				{ name: 'M' },  { name: 'S' },  { name: 'L4' }, { name: 'L2' }, { name: 'H3' },
				{ name: 'L5' }, { name: 'L1' }, { name: 'H4' }, { name: 'L2' }, { name: 'L3' },
			],
			[
				{ name: 'L3' }, { name: 'H3' }, { name: 'L4' }, { name: 'L5' }, { name: 'L1' },
				{ name: 'H1' }, { name: 'M' },  { name: 'M' },  { name: 'L3' }, { name: 'L2' },
				{ name: 'H4' }, { name: 'S' },  { name: 'L5' }, { name: 'L3' }, { name: 'L1' },
				{ name: 'L2' }, { name: 'H2' }, { name: 'L4' }, { name: 'H3' }, { name: 'L5' },
			],
			[
				{ name: 'L4' }, { name: 'H4' }, { name: 'L2' }, { name: 'L3' }, { name: 'L5' },
				{ name: 'H2' }, { name: 'L1' }, { name: 'M' },  { name: 'H1' }, { name: 'L4' },
				{ name: 'M' },  { name: 'L5' }, { name: 'S' },  { name: 'L2' }, { name: 'L3' },
				{ name: 'H3' }, { name: 'L4' }, { name: 'L1' }, { name: 'H4' }, { name: 'L2' },
			],
			[
				{ name: 'L5' }, { name: 'H1' }, { name: 'L3' }, { name: 'L2' }, { name: 'L4' },
				{ name: 'H3' }, { name: 'S' },  { name: 'L5' }, { name: 'M' },  { name: 'M' },
				{ name: 'H2' }, { name: 'L1' }, { name: 'L4' }, { name: 'L3' }, { name: 'H4' },
				{ name: 'L2' }, { name: 'L5' }, { name: 'H1' }, { name: 'L2' }, { name: 'L3' },
			],
		],
	},
};
