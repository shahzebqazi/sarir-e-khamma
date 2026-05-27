<script lang="ts">
	import { base } from '$app/paths';
	import ScriptTitle from '$lib/components/ScriptTitle.svelte';
	import { ghazalTerms } from '$lib/data/glossary-terms';
	import {
		glossaryPins,
		groupTitle,
		pinGroupBySlug,
		termPinGroup
	} from '$lib/data/glossary-pin-groups';
	import { sarirTerms } from '$lib/data/sarir-terms';
	import type { GlossaryPinGroup, GlossaryTerm } from '$lib/types/glossary';

	const allTerms: GlossaryTerm[] = [...sarirTerms, ...ghazalTerms];

	function termsInGroup(group: GlossaryPinGroup): GlossaryTerm[] {
		return allTerms.filter((t) => termPinGroup(t.slug) === group);
	}
</script>

<svelte:head>
	<title>Workshop pins — Sarir e Khamma</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<ScriptTitle as="h1">Glossary pins</ScriptTitle>

<p class="pins__lead prose-mixed">
	<span class="tone-dark">Facilitator page — not linked in the site menu.</span>
	<span class="tone-light">
		Share each pin when the group is ready to open the next batch of glossary definitions.
	</span>
</p>

<section class="pins__section" aria-labelledby="how-heading">
	<h2 id="how-heading" class="subhead-accent">How it works</h2>
	<ol class="pins__steps">
		<li>
			On the <a href="{base}/glossary">glossary</a>, <strong>Baatin</strong> and <strong>Zaahir</strong> are
			always visible.
		</li>
		<li>All other Sarir and ghazal terms are split into three groups (below).</li>
		<li>Participants enter a pin in the unlock box; unlocked groups stay open for that browser session.</li>
		<li>Poets on the glossary page remain open without a pin.</li>
	</ol>
</section>

{#each glossaryPins as { pin, group, title } (group)}
	<section class="pins__section" aria-labelledby="group-{group}-heading">
		<h2 id="group-{group}-heading" class="subhead-accent">
			Pin <span class="pins__code">{pin}</span> — {title}
		</h2>
		<p class="pins__meta">{groupTitle(group)} · Group {group}</p>
		<ul class="pins__terms">
			{#each termsInGroup(group) as term (term.slug)}
				<li>{term.english.label}</li>
			{/each}
		</ul>
	</section>
{/each}

<section class="pins__section pins__section--muted" aria-labelledby="always-heading">
	<h2 id="always-heading" class="subhead-accent">Always visible</h2>
	<ul class="pins__terms">
		{#each allTerms.filter((t) => termPinGroup(t.slug) === null) as term (term.slug)}
			<li>{term.english.label}</li>
		{/each}
	</ul>
</section>

<p class="pins__footnote">
	Slug map lives in <code>src/lib/data/glossary-pin-groups.ts</code> ({Object.keys(pinGroupBySlug).length}
	locked terms).
</p>

<style>
	.pins__lead {
		margin: 0 0 1.5rem;
		max-width: 52ch;
	}

	.pins__section {
		margin-bottom: 2rem;
		padding-top: 0.5rem;
		border-top: 1px solid rgba(255, 255, 255, 0.15);
	}

	.pins__section h2 {
		margin-bottom: 0.35rem;
		font-size: 1.15rem;
	}

	.pins__code {
		font-family: var(--font-body);
		letter-spacing: 0.08em;
	}

	.pins__meta {
		margin: 0 0 0.75rem;
		font-size: 0.9rem;
		opacity: 0.9;
	}

	.pins__steps {
		margin: 0;
		padding-left: 1.25rem;
		max-width: 52ch;
		display: grid;
		gap: 0.5rem;
	}

	.pins__steps a {
		color: inherit;
	}

	.pins__terms {
		margin: 0;
		padding-left: 1.25rem;
		max-width: 40ch;
		display: grid;
		gap: 0.25rem;
	}

	.pins__section--muted {
		opacity: 0.95;
	}

	.pins__footnote {
		margin-top: 2rem;
		font-size: 0.8rem;
		opacity: 0.75;
	}

	.pins__footnote code {
		font-size: 0.85em;
	}
</style>
