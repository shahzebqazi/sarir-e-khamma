<script lang="ts">
	import ScriptTitle from '$lib/components/ScriptTitle.svelte';
	import GlossaryTermCard from '$lib/components/GlossaryTermCard.svelte';
	import { ghazalTerms } from '$lib/data/glossary-terms';
	import { sarirTerms } from '$lib/data/sarir-terms';
	import { poets } from '$lib/data/poets';
	import type { GlossaryTerm } from '$lib/types/glossary';

	let query = $state('');

	function matches(term: GlossaryTerm, q: string) {
		if (!q) return true;
		const hay = [
			term.english.label,
			term.english.definition,
			term.urdu?.label,
			term.urdu?.script,
			term.urdu?.definition,
			term.kashmiri?.label,
			term.kashmiri?.script,
			term.kashmiri?.definition
		]
			.filter(Boolean)
			.join(' ')
			.toLowerCase();
		return hay.includes(q);
	}

	const filteredSarir = $derived(sarirTerms.filter((t) => matches(t, query.toLowerCase())));
	const filteredGhazal = $derived(ghazalTerms.filter((t) => matches(t, query.toLowerCase())));
	const filteredPoets = $derived(
		poets.filter((p) => {
			const q = query.toLowerCase();
			if (!q) return true;
			return p.name.toLowerCase().includes(q) || p.bio.toLowerCase().includes(q);
		})
	);
</script>

<ScriptTitle as="h1">Glossary</ScriptTitle>
<p class="glossary__intro">
	English · Urdu · Kashmiri — terms from Sarir e Khamma and the ghazal tradition.
</p>

<label class="glossary__search">
	<span class="sr-only">Filter terms</span>
	<input type="search" placeholder="Search all languages…" bind:value={query} />
</label>

<section class="glossary__section" aria-labelledby="sarir-heading">
	<h2 id="sarir-heading" class="subhead-accent">Sarir e Khamma</h2>
	{#each filteredSarir as term (term.slug)}
		<GlossaryTermCard {term} />
	{:else}
		<p class="glossary__empty">No Sarir terms match your search.</p>
	{/each}
</section>

<section class="glossary__section" aria-labelledby="ghazal-heading">
	<h2 id="ghazal-heading" class="subhead-accent">Ghazal &amp; metre</h2>
	{#each filteredGhazal as term (term.slug)}
		<GlossaryTermCard {term} />
	{:else}
		<p class="glossary__empty">No ghazal terms match your search.</p>
	{/each}
</section>

<section class="glossary__section" aria-labelledby="poets-heading">
	<h2 id="poets-heading" class="subhead-accent">Poets</h2>
	<ul class="glossary__poets">
		{#each filteredPoets as poet (poet.slug)}
			<li id={poet.slug}>
				<h3>{poet.name}</h3>
				<p>{poet.bio}</p>
			</li>
		{:else}
			<li class="glossary__empty">No poets match your search.</li>
		{/each}
	</ul>
</section>

<style>
	.glossary__intro {
		margin: 0.5rem 0 1.25rem;
	}

	.glossary__search {
		display: block;
		margin-bottom: 2rem;
	}

	.glossary__search input {
		width: 100%;
		max-width: 24rem;
		padding: 0.6rem 0.85rem;
		border: 1px solid rgba(255, 255, 255, 0.35);
		border-radius: 4px;
		background: rgba(0, 0, 0, 0.12);
		color: var(--text);
		font: inherit;
	}

	.glossary__search input::placeholder {
		color: rgba(255, 255, 255, 0.65);
	}

	.glossary__section {
		margin-bottom: 2.5rem;
	}

	.glossary__section h2 {
		margin-bottom: 0.5rem;
	}

	.glossary__poets {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.glossary__poets li {
		padding: 1rem 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}

	.glossary__poets h3 {
		margin: 0 0 0.35rem;
		font-size: 1.1rem;
	}

	.glossary__poets p {
		margin: 0;
		max-width: 52ch;
		opacity: 0.95;
	}

	.glossary__empty {
		opacity: 0.85;
		font-style: italic;
	}
</style>
