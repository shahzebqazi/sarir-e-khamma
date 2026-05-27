<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		as?: 'h2' | 'h3' | 'p';
		class?: string;
		children: Snippet;
	}

	let { as = 'p', class: className = '', children }: Props = $props();
</script>

<svelte:element this={as} class="script-subhead {className}">
	{@render children()}
</svelte:element>

<style>
	.script-subhead {
		font-family: var(--font-script-accent);
		color: var(--accent);
		font-size: clamp(1.25rem, 3.5vw, 2rem);
		line-height: 1.2;
		margin: 0;
		font-weight: 600;
	}
</style>
