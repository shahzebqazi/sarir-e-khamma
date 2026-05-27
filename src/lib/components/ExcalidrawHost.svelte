<script lang="ts">
	import { onMount } from 'svelte';

	let container = $state<HTMLDivElement | undefined>(undefined);

	onMount(() => {
		let root: { unmount: () => void } | undefined;

		(async () => {
			const React = await import('react');
			const { createRoot } = await import('react-dom/client');
			const { default: ExcalidrawReact } = await import('./ExcalidrawReact');
			if (!container) return;
			root = createRoot(container);
			root.render(React.createElement(ExcalidrawReact));
		})();

		return () => root?.unmount();
	});
</script>

<div class="excalidraw-host" bind:this={container}></div>

<style>
	.excalidraw-host {
		height: min(75vh, 52rem);
		width: 100%;
		border: 1px solid rgba(255, 255, 255, 0.25);
		border-radius: 4px;
		overflow: hidden;
		background: #fff;
	}
</style>
