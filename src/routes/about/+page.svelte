<script lang="ts">
	import { base } from '$app/paths';
	import AlifPortraitAside from '$lib/components/AlifPortraitAside.svelte';
	import ConnectIcon from '$lib/components/ConnectIcon.svelte';
	import ScriptSubhead from '$lib/components/ScriptSubhead.svelte';
	import ScriptTitle from '$lib/components/ScriptTitle.svelte';
	import PageGrid from '$lib/components/PageGrid.svelte';
	import { aboutBridgeLine } from '$lib/data/about-copy';
	import { connectLinks } from '$lib/data/about-links';
	import {
		posterDisciplines,
		posterInstructorName,
		posterSessionsIntro1,
		posterSessionsIntro2,
		posterWhyWhatHow,
		posterWithLabel
	} from '$lib/data/poster-copy';
</script>

<svelte:head>
	<title>About — Sarir e Khamma</title>
	<meta
		name="description"
		content="Mohammad Muneem Nazir (Alif) — creative writing, poetry, and songwriting with Sarir e Khamma."
	/>
</svelte:head>

<PageGrid>
	{#snippet children()}
		<ScriptTitle as="h1">About</ScriptTitle>

		<p class="about__with">
			<span>{posterWithLabel}</span>
			<span class="subhead-accent">{posterInstructorName}</span>
		</p>

		<p class="about__bridge">{aboutBridgeLine}</p>

		<ScriptSubhead as="h2" class="about__script-lines">{posterWhyWhatHow}</ScriptSubhead>
		<ScriptSubhead as="p" class="about__script-lines">{posterDisciplines}</ScriptSubhead>

		<div class="about__bio">
			<p>{posterSessionsIntro1}</p>
			<p>{posterSessionsIntro2}</p>
			<p class="about__more">
				<a href="{base}/sessions">Full session curriculum →</a>
			</p>
		</div>

		<section class="about__connect" aria-labelledby="connect-heading">
			<h2 id="connect-heading" class="subhead-accent">Connect</h2>
			<ul class="about__links about__links--icons">
				{#each connectLinks as link (link.href)}
					<li>
						<a
							class="about__connect-link"
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={link.label}
						>
							<ConnectIcon kind={link.kind} />
							<span class="about__connect-label">{link.shortLabel}</span>
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{/snippet}

	{#snippet aside()}
		<AlifPortraitAside />
	{/snippet}
</PageGrid>

<style>
	:global(.about__script-lines) {
		margin: 0.35rem 0;
	}

	.about__with {
		margin: 0.5rem 0 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
	}

	.about__with span:first-child {
		font-size: 0.95rem;
	}

	.about__bridge {
		margin: 0 0 1.25rem;
		max-width: 52ch;
	}

	.about__bio {
		max-width: 52ch;
		margin: 0 0 2rem;
	}

	.about__bio p {
		margin: 0 0 1.1rem;
	}

	.about__more {
		margin-top: 1.25rem;
		margin-bottom: 0;
	}

	.about__connect h2 {
		margin-bottom: 1rem;
	}

	.about__links {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
		gap: 0.75rem;
	}

	.about__connect-link {
		display: inline-flex;
		align-items: center;
		gap: 0.65rem;
		min-height: 2.75rem;
		padding: 0.35rem 0;
		font-weight: 500;
		text-decoration: none;
		transition:
			color 0.2s ease,
			transform 0.2s ease;
	}

	.about__connect-link:hover {
		color: var(--accent);
		transform: scale(1.05);
	}

	.about__connect-link:focus-visible {
		outline: 2px solid var(--text);
		outline-offset: 3px;
	}

	.about__connect-label {
		font-size: 0.95rem;
	}
</style>
