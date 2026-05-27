<script lang="ts">
	import type { GlossaryTerm } from '$lib/types/glossary';

	interface Props {
		term: GlossaryTerm;
	}

	let { term }: Props = $props();

	const hasUrdu = $derived(
		Boolean(term.urdu?.label || term.urdu?.script || term.urdu?.definition)
	);
	const hasKashmiri = $derived(
		Boolean(term.kashmiri?.label || term.kashmiri?.script || term.kashmiri?.definition)
	);
</script>

<article class="term-card" id={term.slug}>
	<h3 class="term-card__title">{term.english.label}</h3>

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
</article>

<style>
	.term-card {
		padding: 1.25rem 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}

	.term-card__title {
		font-family: var(--font-body);
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0 0 0.75rem;
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
</style>
