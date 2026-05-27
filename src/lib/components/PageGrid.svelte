<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		aside?: Snippet;
		children: Snippet;
	}

	let { class: className = '', aside, children }: Props = $props();
</script>

<div class="page-grid {className}">
	<div class="page-grid__main">
		{@render children()}
	</div>
	{#if aside}
		<aside class="page-grid__aside">
			{@render aside()}
		</aside>
	{/if}
</div>

<style>
	.page-grid {
		display: grid;
		gap: var(--space);
		align-items: start;
	}

	@media (min-width: 56rem) {
		.page-grid {
			grid-template-columns: 1fr min(18rem, 32vw);
		}

		.page-grid:not(:has(.page-grid__aside)) {
			grid-template-columns: 1fr;
		}
	}

	.page-grid__main {
		min-width: 0;
	}

	.page-grid__aside {
		min-width: 0;
	}
</style>
