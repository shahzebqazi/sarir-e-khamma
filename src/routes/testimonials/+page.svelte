<script lang="ts">
	import ScriptTitle from '$lib/components/ScriptTitle.svelte';
	import PageGrid from '$lib/components/PageGrid.svelte';
	import { testimonials } from '$lib/data/testimonials';
</script>

<svelte:head>
	<title>Testimonials — Sarir e Khamma</title>
	<meta name="description" content="Participant voices from Sarir e Khamma workshops." />
</svelte:head>

<PageGrid>
	{#snippet children()}
		<ScriptTitle as="h1">Testimonials</ScriptTitle>

		{#each testimonials as item (item.author)}
			<section class="testimonials__item">
				<blockquote class="testimonials__quote">
					{#each item.quote.split('\n\n') as paragraph, i (i)}
						<p>{paragraph}</p>
					{/each}
				</blockquote>
				<footer class="testimonials__attribution">
					<cite class="testimonials__author">{item.author}</cite>
					{#if item.href && item.roleOrSite}
						<a
							class="testimonials__site"
							href={item.href}
							target="_blank"
							rel="noopener noreferrer"
						>
							{item.roleOrSite}
						</a>
					{:else if item.roleOrSite}
						<span class="testimonials__site">{item.roleOrSite}</span>
					{/if}
				</footer>
			</section>
		{/each}
	{/snippet}
</PageGrid>

<style>
	.testimonials__item {
		margin: 1.75rem 0 0;
		max-width: 52ch;
	}

	.testimonials__quote {
		margin: 0;
		padding: 0;
		border: none;
	}

	.testimonials__quote p {
		margin: 0 0 1.1rem;
	}

	.testimonials__quote p:last-child {
		margin-bottom: 0;
	}

	.testimonials__attribution {
		margin-top: 1.25rem;
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0.35rem 0.75rem;
	}

	.testimonials__author {
		font-style: normal;
		font-weight: 600;
	}

	.testimonials__site {
		font-size: 0.95rem;
		opacity: 0.95;
	}
</style>
