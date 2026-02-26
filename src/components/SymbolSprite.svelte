<script lang="ts">
	import { Sprite, type SpriteProps } from 'pixi-svelte';

	import { getSymbolInfo } from '../game/utils';
	import { SYMBOL_SIZE } from '../game/constants';
	import { onMount, onDestroy } from 'svelte';
	import type { SymbolState } from '../game/types';

	type Props = {
		x?: number;
		y?: number;
		symbolInfo: ReturnType<typeof getSymbolInfo>;
		oncomplete?: () => void;
		state?: SymbolState;
	};

	const props: Props = $props();

	// Animation state
	const WIN_ANIM_DURATION = 800; // ms
	let animScale = $state(1);
	let animTint = $state(0xffffff);
	let animFrameId: number | null = null;

	function runWinAnimation() {
		const startTime = performance.now();

		function tick() {
			const elapsed = performance.now() - startTime;
			const progress = Math.min(elapsed / WIN_ANIM_DURATION, 1);

			// Scale: pulse up then back down (ease in-out sine)
			const scalePhase = Math.sin(progress * Math.PI);
			animScale = 1 + scalePhase * 0.18;

			// Tint: brightness pulse (white → golden yellow → white)
			const tintPhase = Math.sin(progress * Math.PI);
			const r = Math.round(255);
			const g = Math.round(255 - tintPhase * 40);
			const b = Math.round(255 - tintPhase * 100);
			animTint = (r << 16) | (g << 8) | b;

			if (progress < 1) {
				animFrameId = requestAnimationFrame(tick);
			} else {
				animScale = 1;
				animTint = 0xffffff;
				animFrameId = null;
				props.oncomplete?.();
			}
		}

		animFrameId = requestAnimationFrame(tick);
	}

	function stopAnimation() {
		if (animFrameId !== null) {
			cancelAnimationFrame(animFrameId);
			animFrameId = null;
		}
		animScale = 1;
		animTint = 0xffffff;
	}

	onMount(() => {
		if (props.state === 'win') {
			runWinAnimation();
		} else {
			props.oncomplete?.();
		}
	});

	$effect(() => {
		props.symbolInfo;
		if (props.state === 'win') {
			stopAnimation();
			runWinAnimation();
		} else {
			stopAnimation();
			props.oncomplete?.();
		}
	});

	onDestroy(() => {
		stopAnimation();
	});
</script>

<Sprite
	x={props.x}
	y={props.y}
	anchor={0.5}
	key={props.symbolInfo.assetKey}
	width={SYMBOL_SIZE * props.symbolInfo.sizeRatios.width * animScale}
	height={SYMBOL_SIZE * props.symbolInfo.sizeRatios.height * animScale}
	tint={animTint}
/>

