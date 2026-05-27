<script lang="ts">
	import { browser } from '$app/environment';
	import type { Component } from 'svelte';

	let ExcalidrawHost = $state<Component | null>(null);

	$effect(() => {
		if (!browser) return;
		import('$lib/components/ExcalidrawHost.svelte').then((m) => {
			ExcalidrawHost = m.default;
		});
	});
</script>

<svelte:head>
	<title>Ideas — Sarir e Khamma</title>
</svelte:head>

<p class="ideas__intro">
	Sketch thoughts, maps, and draft lines. The board saves locally in your browser.
</p>

{#if ExcalidrawHost}
	<ExcalidrawHost />
{:else}
	<p>Loading drawing board…</p>
{/if}

<style>
	.ideas__intro {
		margin: 0 0 1.25rem;
		max-width: 40ch;
		opacity: 0.95;
	}
</style>
