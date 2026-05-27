<script lang="ts">
	import { base } from '$app/paths';

	// UI: transparent cutout (terracotta shows through). Source with orange field:
	// static/images/alif-sessions-cutout.png — see AGENTS.md / CONVENTIONS.md.
</script>

<figure class="alif-portrait-aside">
	<img
		class="alif-portrait-aside__img"
		src="{base}/images/alif-sessions-cutout-transparent.png"
		alt="Mohammad Muneem Nazir (Alif)"
		width="592"
		height="1104"
	/>
</figure>

<style>
	.alif-portrait-aside {
		margin: 0;
		animation: portrait-fade-in 700ms ease-out both;
	}

	@keyframes portrait-fade-in {
		from {
			opacity: 0;
			transform: translateX(1rem);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.alif-portrait-aside__img {
		width: 100%;
		height: auto;
		object-fit: contain;
		object-position: center;
	}
</style>
