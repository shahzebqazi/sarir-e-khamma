<script lang="ts">
	import type { GlossaryTerm } from '$lib/types/glossary';

	interface Props {
		term: GlossaryTerm;
		stagger?: number;
		locked?: boolean;
	}

	let { term, stagger, locked = false }: Props = $props();

	const hasUrdu = $derived(
		Boolean(term.urdu?.label || term.urdu?.script || term.urdu?.definition)
	);
	const hasKashmiri = $derived(
		Boolean(term.kashmiri?.label || term.kashmiri?.script || term.kashmiri?.definition)
	);
</script>

<article
	class="term-card"
	class:term-card--enter={stagger !== undefined}
	class:term-card--locked={locked}
	id={term.slug}
	style={stagger !== undefined ? `--stagger: ${stagger}` : undefined}
>
	{#if locked}
		<h3 class="term-card__title">Locked term</h3>
		<p class="term-card__locked-msg">Enter a workshop pin above to unlock this definition.</p>
	{:else}
		<h3 class="term-card__title term-card__title--accent">{term.english.label}</h3>

		<dl class="term-card__langs">
		<div class="term-card__row">
			<dt>English</dt>
			<dd>{term.english.definition}</dd>
		</div>

		{#if hasUrdu}
			<div class="term-card__row">
				<dt>Urdu</dt>
				<dd>
					{#if term.urdu?.script}
						<p class="urdu term-card__script">{term.urdu.script}</p>
					{/if}
					{#if term.urdu?.label}
						<p class="term-card__label">{term.urdu.label}</p>
					{/if}
					{#if term.urdu?.definition}
						<p class="urdu">{term.urdu.definition}</p>
					{/if}
				</dd>
			</div>
		{/if}

		{#if hasKashmiri}
			<div class="term-card__row">
				<dt>Kashmiri</dt>
				<dd>
					{#if term.kashmiri?.script}
						<p class="urdu term-card__script">{term.kashmiri.script}</p>
					{/if}
					{#if term.kashmiri?.label}
						<p class="term-card__label">{term.kashmiri.label}</p>
					{/if}
					{#if term.kashmiri?.definition}
						<p>{term.kashmiri.definition}</p>
					{/if}
				</dd>
			</div>
		{/if}
	</dl>

		{#if term.sources?.length}
			<p class="term-card__sources">
				<span class="term-card__sources-label">Source:</span>
				{#each term.sources as source, i (source.title)}
					{#if i > 0}<span class="term-card__sources-sep"> · </span>{/if}
					{#if source.url}
						<a href={source.url} target="_blank" rel="noopener noreferrer">
							{source.title}{#if source.detail} — {source.detail}{/if}
						</a>
					{:else}
						<span>{source.title}{#if source.detail} — {source.detail}{/if}</span>
					{/if}
				{/each}
			</p>
		{/if}
	{/if}
</article>

<style>
	.term-card {
		padding: 1.25rem 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		scroll-margin-top: 5rem;
	}

	.term-card--enter {
		animation: term-fade-in 500ms ease-out both;
		animation-delay: min(calc(var(--stagger) * 40ms), 400ms);
	}

	@keyframes term-fade-in {
		from {
			opacity: 0;
			transform: translateY(0.35rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.term-card__title {
		font-family: var(--font-body);
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0 0 0.75rem;
	}

	.term-card__title--accent {
		color: var(--accent);
	}

	.term-card__langs {
		margin: 0;
		display: grid;
		gap: 0.75rem;
	}

	.term-card__row {
		display: grid;
		gap: 0.25rem;
	}

	@media (min-width: 40rem) {
		.term-card__row {
			grid-template-columns: 6rem 1fr;
			gap: 1rem;
		}
	}

	.term-card__row dt {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		opacity: 0.85;
		font-weight: 600;
	}

	.term-card__row dd {
		margin: 0;
		min-width: 0;
		overflow-wrap: anywhere;
	}

	.term-card__script {
		font-size: 1.35rem;
		margin: 0 0 0.35rem;
	}

	.term-card__label {
		margin: 0 0 0.35rem;
		font-style: italic;
		opacity: 0.95;
	}

	.term-card__sources {
		margin: 0.75rem 0 0;
		font-size: 0.75rem;
		line-height: 1.45;
		opacity: 0.9;
		max-width: 52ch;
	}

	.term-card__sources-label {
		font-weight: 600;
		margin-right: 0.25rem;
	}

	.term-card__sources a {
		text-decoration: underline;
		text-underline-offset: 0.15em;
	}

	.term-card__sources-sep {
		opacity: 0.85;
	}

	.term-card--locked {
		opacity: 0.9;
	}

	.term-card__locked-msg {
		margin: 0;
		font-style: italic;
		opacity: 0.9;
		max-width: 42ch;
	}

</style>
