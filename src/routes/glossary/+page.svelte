<script lang="ts">
	import { onMount } from 'svelte';
	import EpigraphTitle from '$lib/components/EpigraphTitle.svelte';
	import GlossaryTermCard from '$lib/components/GlossaryTermCard.svelte';
	import { ghazalTerms } from '$lib/data/glossary-terms';
	import {
		glossaryPins,
		groupTitle,
		termPinGroup
	} from '$lib/data/glossary-pin-groups';
	import { sarirTerms } from '$lib/data/sarir-terms';
	import { poets } from '$lib/data/poets';
	import {
		isGroupUnlocked,
		loadUnlockedGroups,
		tryUnlockPin
	} from '$lib/glossary/pin-unlock';
	import type { GlossaryPinGroup, GlossaryTerm } from '$lib/types/glossary';

	let query = $state('');
	let pinInput = $state('');
	let pinMessage = $state('');
	let unlocked = $state<Set<GlossaryPinGroup>>(new Set());

	onMount(() => {
		unlocked = loadUnlockedGroups();
	});

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
			term.kashmiri?.definition,
			...(term.sources?.map((s) => [s.title, s.detail].filter(Boolean).join(' ')) ?? [])
		]
			.filter(Boolean)
			.join(' ')
			.toLowerCase();
		return hay.includes(q);
	}

	function termLocked(term: GlossaryTerm) {
		const group = termPinGroup(term.slug);
		return !isGroupUnlocked(group, unlocked);
	}

	function submitPin(event: Event) {
		event.preventDefault();
		const result = tryUnlockPin(pinInput, unlocked);
		if (result.ok) {
			unlocked = loadUnlockedGroups();
			pinMessage = `Unlocked: ${groupTitle(result.group)}.`;
			pinInput = '';
		} else {
			pinMessage = 'That pin did not match. Try again.';
		}
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

	const lockedSarirCount = $derived(
		filteredSarir.filter((t) => termPinGroup(t.slug) !== null && termLocked(t)).length
	);
	const lockedGhazalCount = $derived(
		filteredGhazal.filter((t) => termPinGroup(t.slug) !== null && termLocked(t)).length
	);
</script>

<svelte:head>
	<title>Glossary — Sarir e Khamma</title>
</svelte:head>

<div class="glossary__hero">
	<EpigraphTitle as="p" class="glossary__epigraph" />
</div>

<p class="glossary__intro subhead-accent">
	Terms from Sarir e Khamma and the ghazal tradition — English, Urdu, and Kashmiri.
</p>
<p class="prose-mixed glossary__tone-note">
	<span class="tone-light">Search by English or Urdu;</span>
	<span class="tone-dark">definitions stay close to workshop language</span>
	<span class="tone-light">on the terracotta page.</span>
</p>

<form class="glossary__pin" onsubmit={submitPin} aria-labelledby="pin-heading">
	<h2 id="pin-heading" class="subhead-accent glossary__pin-title">Unlock terms</h2>
	<p class="glossary__pin-intro">
		<span class="tone-light">Baatin and Zaahir are always open.</span>
		<span class="tone-dark">Enter a workshop pin</span>
		<span class="tone-light">to reveal the next group of definitions (saved for this browser session).</span>
	</p>
	<div class="glossary__pin-row">
		<label class="glossary__pin-label">
			<span class="sr-only">Pin code</span>
			<input
				type="password"
				inputmode="numeric"
				autocomplete="off"
				placeholder="Pin"
				bind:value={pinInput}
			/>
		</label>
		<button type="submit" class="glossary__pin-btn">Unlock</button>
	</div>
	{#if pinMessage}
		<p class="glossary__pin-msg" role="status">{pinMessage}</p>
	{/if}
	<ul class="glossary__pin-status" aria-label="Unlock status">
		{#each glossaryPins as { group, title } (group)}
			<li class:glossary__pin-status--on={unlocked.has(group)}>
				<span class="glossary__pin-status-label">{title}</span>
				<span class="glossary__pin-status-state">
					{unlocked.has(group) ? 'Unlocked' : 'Locked'}
				</span>
			</li>
		{/each}
	</ul>
</form>

<label class="glossary__search">
	<span class="sr-only">Filter terms</span>
	<input type="search" placeholder="Filter terms…" bind:value={query} />
</label>

<section class="glossary__section" aria-labelledby="sarir-heading">
	<h2 id="sarir-heading" class="subhead-accent">Sarir e Khamma</h2>
	{#if lockedSarirCount > 0 && !query}
		<p class="glossary__locked-note">
			{lockedSarirCount} term{lockedSarirCount === 1 ? '' : 's'} locked — use a pin above.
		</p>
	{/if}
	{#each filteredSarir as term, i (term.slug)}
		{@const locked = termLocked(term)}
		<GlossaryTermCard {term} {locked} stagger={query ? undefined : i} />
	{:else}
		<p class="glossary__empty">No terms in this section match your filter.</p>
	{/each}
</section>

<section class="glossary__section" aria-labelledby="ghazal-heading">
	<h2 id="ghazal-heading" class="subhead-accent">Ghazal &amp; metre</h2>
	{#if lockedGhazalCount > 0 && !query}
		<p class="glossary__locked-note">
			{lockedGhazalCount} term{lockedGhazalCount === 1 ? '' : 's'} locked — use a pin above.
		</p>
	{/if}
	{#each filteredGhazal as term, i (term.slug)}
		{@const locked = termLocked(term)}
		<GlossaryTermCard {term} {locked} stagger={query ? undefined : filteredSarir.length + i} />
	{:else}
		<p class="glossary__empty">No terms in this section match your filter.</p>
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
			<li class="glossary__empty">No terms in this section match your filter.</li>
		{/each}
	</ul>
</section>

<style>
	.glossary__hero {
		margin-bottom: 1.5rem;
	}

	.glossary__hero :global(.glossary__epigraph) {
		font-size: clamp(2rem, 6vw, 3.25rem);
		margin-bottom: 1.25rem;
	}

	.glossary__intro {
		margin: 0.25rem 0 1.25rem;
	}

	.glossary__pin {
		margin-bottom: 2rem;
		padding: 1rem 0 1.25rem;
		border-top: 1px solid rgba(255, 255, 255, 0.15);
		border-bottom: 1px solid rgba(255, 255, 255, 0.15);
	}

	.glossary__pin-title {
		margin: 0 0 0.5rem;
		font-size: 1.1rem;
	}

	.glossary__pin-intro {
		margin: 0 0 1rem;
		max-width: 52ch;
	}

	.glossary__pin-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		align-items: stretch;
		max-width: 20rem;
	}

	.glossary__pin-label {
		flex: 1;
		min-width: 8rem;
	}

	.glossary__pin-row input {
		width: 100%;
		padding: 0.6rem 0.85rem;
		border: 1px solid rgba(255, 255, 255, 0.35);
		border-radius: 4px;
		background: rgba(0, 0, 0, 0.12);
		color: var(--text);
		font: inherit;
	}

	.glossary__pin-row input:focus {
		outline: none;
		border-color: rgba(255, 255, 255, 0.75);
	}

	.glossary__pin-btn {
		padding: 0.6rem 1rem;
		border: 1px solid rgba(255, 255, 255, 0.45);
		border-radius: 4px;
		background: var(--accent);
		color: var(--bg);
		font: inherit;
		font-weight: 600;
		cursor: pointer;
		min-height: 2.75rem;
	}

	.glossary__pin-btn:hover {
		filter: brightness(1.08);
	}

	.glossary__pin-msg {
		margin: 0.65rem 0 0;
		font-size: 0.95rem;
	}

	.glossary__pin-status {
		list-style: none;
		margin: 1rem 0 0;
		padding: 0;
		display: grid;
		gap: 0.35rem;
		max-width: 28rem;
	}

	.glossary__pin-status li {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		font-size: 0.9rem;
		opacity: 0.85;
	}

	.glossary__pin-status--on {
		opacity: 1;
	}

	.glossary__pin-status--on .glossary__pin-status-state {
		color: var(--accent);
		font-weight: 600;
	}

	.glossary__tone-note {
		margin: 0 0 1.25rem;
		max-width: 52ch;
	}

	.glossary__search {
		display: block;
		margin-bottom: 2rem;
	}

	.glossary__search input {
		width: 100%;
		max-width: 100%;
		padding: 0.6rem 0.85rem;
		border: 1px solid rgba(255, 255, 255, 0.35);
		border-radius: 4px;
		background: rgba(0, 0, 0, 0.12);
		color: var(--text);
		font: inherit;
		transition: border-color 0.2s ease;
	}

	.glossary__search input:focus {
		outline: none;
		border-color: rgba(255, 255, 255, 0.75);
	}

	.glossary__search input::placeholder {
		color: rgba(255, 255, 255, 0.65);
	}

	.glossary__section {
		margin-bottom: 2.5rem;
		padding-top: 0.5rem;
		border-top: 1px solid rgba(255, 255, 255, 0.15);
	}

	.glossary__section:first-of-type {
		border-top: none;
		padding-top: 0;
	}

	.glossary__section h2 {
		margin-bottom: 0.5rem;
	}

	.glossary__locked-note {
		margin: 0 0 0.75rem;
		font-size: 0.9rem;
		font-style: italic;
		opacity: 0.9;
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
