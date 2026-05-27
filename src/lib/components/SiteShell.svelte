<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import type { Snippet } from 'svelte';
	import { contactEmail } from '$lib/data/about-links';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	const nav = [
		{ href: '/', label: 'Home' },
		{ href: '/sessions', label: 'Sessions' },
		{ href: '/about', label: 'About' },
		{ href: '/ideas', label: 'Ideas' },
		{ href: '/glossary', label: 'Glossary' }
	];

	function isActive(pathname: string, href: string) {
		const target = href === '/' ? base || '/' : `${base}${href}`;
		return pathname === target || (href !== '/' && pathname.startsWith(target));
	}
</script>

<div class="shell">
	<header class="shell__header">
		<a class="shell__brand" href="{base}/">
			<span class="shell__brand-script">sarir e khamma</span>
		</a>
		<nav class="shell__nav" aria-label="Main">
			{#each nav as item}
				<a
					class="shell__nav-link"
					class:shell__nav-link--active={isActive($page.url.pathname, item.href)}
					href="{base}{item.href === '/' ? '' : item.href}"
				>
					{item.label}
				</a>
			{/each}
		</nav>
	</header>

	<main class="shell__main">
		{@render children()}
	</main>

	<footer class="shell__footer">
		<a href="mailto:{contactEmail}">{contactEmail}</a>
	</footer>
</div>

<style>
	.shell {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.shell__header {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: var(--space);
		max-width: var(--max-width);
		margin: 0 auto;
		width: 100%;
	}

	.shell__brand {
		text-decoration: none;
	}

	.shell__brand-script {
		font-family: var(--font-script);
		font-size: clamp(1.75rem, 4vw, 2.5rem);
	}

	.shell__nav {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem 1.25rem;
	}

	.shell__nav-link {
		text-decoration: none;
		font-size: 0.95rem;
		font-weight: 500;
		opacity: 0.9;
	}

	.shell__nav-link:hover,
	.shell__nav-link--active {
		opacity: 1;
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}

	.shell__main {
		flex: 1;
		width: 100%;
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 0 var(--space) calc(var(--space) * 2);
	}

	.shell__footer {
		padding: var(--space);
		text-align: center;
		font-size: 0.9rem;
		opacity: 0.95;
	}

	.shell__footer a {
		text-decoration: none;
	}

	.shell__footer a:hover {
		text-decoration: underline;
	}
</style>
