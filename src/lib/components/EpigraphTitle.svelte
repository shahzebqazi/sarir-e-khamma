<script lang="ts">
	import { posterEpigraph } from '$lib/data/poster-copy';

	interface Props {
		as?: 'h1' | 'h2' | 'p';
		class?: string;
	}

	let { as = 'h1', class: className = '' }: Props = $props();

	const phraseA = 'sab shayr hai baatin';
	const phraseB = 'kuch kuch zaahir hai';

	function assertEpigraphShape() {
		if (!posterEpigraph.startsWith(phraseA) || !posterEpigraph.endsWith(phraseB)) {
			console.warn('EpigraphTitle: posterEpigraph shape changed; update phrase spans.');
		}
	}

	assertEpigraphShape();

	const middle = posterEpigraph.slice(phraseA.length, posterEpigraph.length - phraseB.length);
</script>

<svelte:element this={as} class="script-title script-title--epigraph script-title--enter {className}">
	<span class="epigraph-phrase">{phraseA}</span>{middle}<span class="epigraph-phrase">{phraseB}</span>
</svelte:element>

<style>
	.script-title--epigraph :global(.epigraph-phrase) {
		font-family: var(--font-epigraph-accent);
		font-weight: 700;
		font-style: normal;
		letter-spacing: 0.01em;
	}
</style>
