<script lang="ts">
	import AlifPortraitAside from '$lib/components/AlifPortraitAside.svelte';
	import ScriptSubhead from '$lib/components/ScriptSubhead.svelte';
	import ScriptTitle from '$lib/components/ScriptTitle.svelte';
	import PageGrid from '$lib/components/PageGrid.svelte';
	import {
		posterDisciplines,
		posterInstructorName,
		posterSessionsBodyParagraphs,
		posterSessionsIntro1,
		posterSessionsIntro2,
		posterSessionsTitle,
		posterWhyWhatHow,
		posterWithLabel
	} from '$lib/data/poster-copy';
</script>

<svelte:head>
	<title>Sessions — Sarir e Khamma</title>
	<meta
		name="description"
		content="Creative writing sessions — poetry, ghazal metre, songwriting, and performance with Sarir e Khamma."
	/>
</svelte:head>

<PageGrid>
	{#snippet children()}
		<ScriptTitle as="h1">{posterSessionsTitle}</ScriptTitle>

		<p class="sessions__with">
			<span>{posterWithLabel}</span>
			<span class="subhead-accent">{posterInstructorName}</span>
		</p>

		<ScriptSubhead as="h2" class="sessions__script-lines">{posterWhyWhatHow}</ScriptSubhead>
		<ScriptSubhead as="p" class="sessions__script-lines">{posterDisciplines}</ScriptSubhead>

		<p class="sessions__intro">{posterSessionsIntro1}</p>
		<p class="sessions__intro">{posterSessionsIntro2}</p>

		<div class="sessions__body">
			{#each posterSessionsBodyParagraphs as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>
	{/snippet}

	{#snippet aside()}
		<AlifPortraitAside />
	{/snippet}
</PageGrid>

<style>
	:global(.sessions__script-lines) {
		margin: 0.35rem 0;
	}

	.sessions__with {
		margin: 0.5rem 0 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
	}

	.sessions__with span:first-child {
		font-size: 0.95rem;
	}

	.sessions__intro,
	.sessions__body p {
		margin: 0 0 1.25rem;
		max-width: 52ch;
	}
</style>
