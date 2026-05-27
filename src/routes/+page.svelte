<script lang="ts">
	import AlifPortraitAside from '$lib/components/AlifPortraitAside.svelte';
	import EpigraphTitle from '$lib/components/EpigraphTitle.svelte';
	import PageGrid from '$lib/components/PageGrid.svelte';
</script>

<svelte:head>
	<title>Sarir e Khamma</title>
</svelte:head>

<PageGrid>
	{#snippet children()}
		<EpigraphTitle />
	{/snippet}

	{#snippet aside()}
		<AlifPortraitAside />
	{/snippet}
</PageGrid>
