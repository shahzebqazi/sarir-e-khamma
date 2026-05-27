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
		{ href: '/testimonials', label: 'Testimonials' },
		{ href: '/ideas', label: 'Ideas' },
		{ href: '/glossary', label: 'Glossary' }
	];

	/** Pathname from `$page` is relative to `paths.base`; nav `href` values are not prefixed. */
	function routePath(pathname: string) {
		if (!base) return pathname;
		if (pathname === base || pathname === `${base}/`) return '/';
		if (pathname.startsWith(`${base}/`)) return pathname.slice(base.length);
		return pathname;
	}

	function isActive(pathname: string, href: string) {
		const path = routePath(pathname);
		if (href === '/') return path === '/' || path === '';
		return path === href || path.startsWith(`${href}/`);
	}
</script>

<div class="shell">
	<header class="shell__header">
		<a class="shell__brand" href="{base}/">
			<span class="shell__brand-script">sarir e khamma</span>
		</a>
		<nav class="shell__nav" aria-label="Main">
			{#each nav as item}
				{@const active = isActive($page.url.pathname, item.href)}
				<a
					class="shell__nav-link"
					class:shell__nav-link--active={active}
					aria-current={active ? 'page' : undefined}
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
		box-sizing: border-box;
		min-height: 100vh;
		width: 100%;
		max-width: var(--max-width);
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		overflow-x: clip;
	}

	.shell__header {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: var(--space);
		width: 100%;
		min-width: 0;
	}

	@media (max-width: 48rem) {
		.shell__header {
			flex-direction: column;
			align-items: flex-start;
		}

		.shell__nav {
			width: 100%;
		}
	}

	.shell__brand {
		text-decoration: none;
	}

	.shell__brand-script {
		font-family: var(--font-script);
		font-size: clamp(1.75rem, 4vw, 2.5rem);
		font-weight: 400;
		line-height: 1.1;
	}

	.shell__nav {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem 1.25rem;
	}

	.shell__nav-link {
		font-family: var(--font-script);
		text-decoration: none;
		font-size: clamp(1.05rem, 2.8vw, 1.35rem);
		font-weight: 400;
		letter-spacing: 0.02em;
		opacity: 0.9;
		min-height: 2.75rem;
		display: inline-flex;
		align-items: center;
	}

	.shell__nav-link:hover {
		opacity: 1;
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}

	.shell__nav-link--active {
		color: var(--accent);
		opacity: 1;
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}

	.shell__main {
		flex: 1;
		width: 100%;
		padding: 0 var(--space) calc(var(--space) * 2);
		min-width: 0;
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
