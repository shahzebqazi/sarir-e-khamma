<script lang="ts">
	import ScriptTitle from '$lib/components/ScriptTitle.svelte';
	import PageGrid from '$lib/components/PageGrid.svelte';
</script>

<PageGrid>
	<div>
		<ScriptTitle>sab shayr hai baatin kuch kuch zaahir hai</ScriptTitle>

		<section class="landing__defs" aria-labelledby="defs-heading">
			<h2 id="defs-heading" class="sr-only">Baatin and Zaahir</h2>

			<div class="landing__def">
				<h3 class="subhead-accent">Baatin</h3>
				<p>
					The inward, hidden dimension—what you feel before it finds words. Writing begins in
					baatin: listening to thought, trusting emotion, letting the private become shareable.
				</p>
			</div>

			<div class="landing__def">
				<h3 class="subhead-accent">Zaahir</h3>
				<p>
					The outward, manifest layer—what appears on the page and in performance. Zaahir is the
					shape your voice takes when it meets another ear.
				</p>
			</div>
		</section>

		<p class="landing__lede">
			Sarir e Khamma invites writers into creative practice through sensory detail, ghazal craft,
			songwriting, and performance—with Mohammad Muneem Nazir and Alif.
		</p>
	</div>
</PageGrid>

<style>
	.landing__defs {
		display: grid;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	@media (min-width: 40rem) {
		.landing__defs {
			grid-template-columns: 1fr 1fr;
		}
	}

	.landing__def h3 {
		margin-bottom: 0.5rem;
	}

	.landing__def p {
		margin: 0;
		max-width: 36ch;
	}

	.landing__lede {
		margin: 2rem 0 0;
		max-width: 42rem;
		font-size: 1.05rem;
	}
</style>
