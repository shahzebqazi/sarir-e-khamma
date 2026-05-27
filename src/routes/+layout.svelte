<script lang="ts">
	import '../app.css';
	import SiteShell from '$lib/components/SiteShell.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<title>Sarir e Khamma</title>
	<meta
		name="description"
		content="Creative writing sessions with Mohammad Muneem Nazir and Alif — poetry, songwriting, and the sound of the pen on paper."
	/>
</svelte:head>

<SiteShell>
	{@render children()}
</SiteShell>
