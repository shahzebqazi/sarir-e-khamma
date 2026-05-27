<script lang="ts">
	import { base } from '$app/paths';
	import ScriptTitle from '$lib/components/ScriptTitle.svelte';
	import PageGrid from '$lib/components/PageGrid.svelte';
</script>

<PageGrid>
	{#snippet children()}
		<ScriptTitle as="h1">sarir e khamma / sessions</ScriptTitle>

		<p class="sessions__with">
			<span>With</span>
			<span class="subhead-accent">Mohammad muneem nazir/Alif</span>
		</p>

		<section class="sessions__pillars" aria-label="Why, What, How">
			<h2 class="sr-only">Why, What, How</h2>
			<ul class="sessions__pillar-list">
				<li><strong>Why</strong> — Unlock creative writing through sensory detail, emotion, and lived experience.</li>
				<li>
					<strong>What</strong> — Creative Writing · Poetry · Songwriting; ghazal craft, <em>urooz</em>,
					<em>behrs</em>, and performance.
				</li>
				<li>
					<strong>How</strong> — Sek: 10-session Symbiosis virtual one-on-one workshops; intimate listening,
					structure and its intentional breaking.
				</li>
			</ul>
		</section>

		<div class="sessions__body">
			<p>
				“Sarir e Khama,” is a curriculum designed to unlock new creative writing practices. Through
				techniques focused on sensory detail, emotion, and lived experience, we will explore the
				foundations of expression while addressing essential questions: Is writer's block real? Do
				you write to impress? Why do you write? And more...
			</p>
			<p>
				The session will delve into the rich world of creative writing, including prose, nazms, and
				ghazals. We will explore the technicalities of <em>urooz</em> and <em>behrs</em> while
				unpacking the distinctions between poetry and prose. Song writting, writing to a melody.
				Encouraged to write in the language most authentic to your voice, experiment with
				songwriting, and play with both structure and its intentional breaking. Finally, focus on the
				transition from page to performance, learning how to deliver work with clarity, emotion, and
				impact.
			</p>
			<p>
				The title “Sarir e Khama” refers to the subtle sound a pen makes as it glides over
				paper—a delicate noise marking the birth of what is to be heard read &amp; documented. The
				sessions capture intimate moments, encouraging you to listen to your own thoughts and trust
				your words to hold your emotions and give them shape.
			</p>
			<p>
				By the end of the workshop, one will gain new writing tools, fresh perspectives, and a deeper
				connection with their emotions that one wishes to share through poetry, songwriting and in
				silence of words.
			</p>
		</div>
	{/snippet}

	{#snippet aside()}
		<figure class="sessions__portrait-wrap">
			<img
				class="portrait sessions__portrait"
				src="{base}/images/muneem-portrait.jpg"
				alt="Mohammad Muneem Nazir"
				width="480"
				height="600"
			/>
		</figure>
	{/snippet}
</PageGrid>

<style>
	.sessions__with {
		margin: 0.5rem 0 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
	}

	.sessions__with span:first-child {
		font-size: 0.95rem;
	}

	.sessions__pillar-list {
		margin: 0 0 1.5rem;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 0.75rem;
	}

	.sessions__pillar-list li {
		margin: 0;
		padding-left: 0;
	}

	.sessions__body p {
		margin: 0 0 1.25rem;
		max-width: 52ch;
	}

	.sessions__portrait-wrap {
		margin: 0;
	}

	.sessions__portrait {
		width: 100%;
		object-fit: cover;
		object-position: top center;
	}
</style>
