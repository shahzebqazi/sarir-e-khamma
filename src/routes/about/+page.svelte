<script lang="ts">
	import ScriptTitle from '$lib/components/ScriptTitle.svelte';
	import PageGrid from '$lib/components/PageGrid.svelte';
	import { aboutBio, connectLinks } from '$lib/data/about-links';
</script>

<PageGrid>
	<ScriptTitle as="h1">About</ScriptTitle>

	<p class="about__bio">{aboutBio}</p>

	<section class="about__connect" aria-labelledby="connect-heading">
		<h2 id="connect-heading" class="subhead-accent">Connect</h2>
		<ul class="about__links">
			{#each connectLinks as link}
				<li>
					<a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
				</li>
			{/each}
		</ul>
	</section>
</PageGrid>

<style>
	.about__bio {
		max-width: 48ch;
		margin: 1.5rem 0 2rem;
	}

	.about__connect h2 {
		margin-bottom: 1rem;
	}

	.about__links {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.65rem;
	}

	.about__links a {
		font-weight: 500;
	}
</style>
