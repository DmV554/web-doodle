<script lang="ts">
	import type { Reel } from '../game/stateGame.svelte';

	type Props = {
		reel: Reel;
		oncomplete: () => void;
	};

	const props: Props = $props();

	$effect(() => {
		if (props.reel.reelState.motion === 'stopped') {
			props.oncomplete();
		}
	});
</script>

