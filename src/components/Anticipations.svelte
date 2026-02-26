<script lang="ts">
	import { OnMount } from 'components-shared';
	import { Rectangle } from 'pixi-svelte';
	import { SECOND } from 'constants-shared/time';

	import { getContext } from '../game/context';
	import Anticipation from './Anticipation.svelte';
	import { onDestroy } from 'svelte';

	const context = getContext();
	const hasAnticipation = $derived(
		context.stateGame.board.some((reel) => reel.reelState.anticipating),
	);

	// Board overlay fade
	const TARGET_ALPHA = 0.35;
	const FADE_DURATION = 300;
	let alpha = $state(0);
	let animFrameId: number | null = null;

	function fadeToTarget(from: number, to: number, onDone?: () => void) {
		if (animFrameId !== null) cancelAnimationFrame(animFrameId);
		const startTime = performance.now();
		function tick() {
			const elapsed = performance.now() - startTime;
			const progress = Math.min(elapsed / FADE_DURATION, 1);
			alpha = from + (to - from) * progress;
			if (progress < 1) {
				animFrameId = requestAnimationFrame(tick);
			} else {
				animFrameId = null;
				onDone?.();
			}
		}
		animFrameId = requestAnimationFrame(tick);
	}

	$effect(() => {
		if (hasAnticipation) {
			fadeToTarget(alpha, TARGET_ALPHA);
		} else {
			fadeToTarget(alpha, 0);
		}
	});

	onDestroy(() => {
		if (animFrameId !== null) cancelAnimationFrame(animFrameId);
	});

	const boardLayout = $derived(context.stateGameDerived.boardLayout());
</script>

{#if hasAnticipation}
	<OnMount
		onmount={() => {
			context.eventEmitter.broadcast({ type: 'soundLoop', name: 'sfx_anticipation' });
			context.eventEmitter.broadcast({
				type: 'soundFade',
				name: 'sfx_anticipation',
				from: 0,
				to: 1,
				duration: SECOND,
			});

			return () => {
				context.eventEmitter.broadcast({ type: 'soundStop', name: 'sfx_anticipation' });
			};
		}}
	/>
{/if}

{#if alpha > 0}
	<Rectangle
		x={boardLayout.x - boardLayout.width * 0.5}
		y={boardLayout.y - boardLayout.height * 0.5}
		width={boardLayout.width}
		height={boardLayout.height}
		backgroundColor={0x000000}
		alpha={alpha}
	/>
{/if}

{#each context.stateGame.board as reel}
	{#if reel.reelState.anticipating}
		<Anticipation {reel} oncomplete={() => (reel.reelState.anticipating = false)} />
	{/if}
{/each}
