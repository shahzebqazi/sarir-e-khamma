<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		as?: 'h1' | 'h2' | 'p';
		class?: string;
		children: Snippet;
	}

	let { as = 'h1', class: className = '', children }: Props = $props();
</script>

<svelte:element this={as} class="script-title {className}">
	{@render children()}
</svelte:element>
