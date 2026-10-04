<!--tz-meta {"id":"sveltekit-page","title":"Verde landing page","category":"Starter","file":"starters/sveltekit/src/routes/+page.svelte","tags":["sveltekit","landing"],"description":"Verde houseplant-care landing page: asymmetric field-journal hero with a specimen-plate focal element, journal-entry how-it-works, staggered specimen-plate features, app-store CTA, real footer.","dnas":["botanical-lab"]} -->
<script>
	import '../app.css';

	const entries = [
		{
			week: 'Week 01',
			title: 'Catalogue the collection',
			body: 'Photograph each plant and Verde files it like a specimen: species, Latin name, and the day it arrived on your sill. A collection you can finally keep track of.'
		},
		{
			week: 'Week 02',
			title: 'Read the room',
			body: 'Hold your phone up to the window. The light meter grades the spot — full sun, bright indirect, or low light — and tells you which plants will honestly survive there.'
		},
		{
			week: 'Week 03',
			title: 'Water on evidence',
			body: 'Reminders keyed to each species, its pot size, and the season. Check the soil, log it in seconds, and stop drowning the pothos every Sunday out of habit.'
		}
	];

	const plates = [
		{
			no: 'No. 01',
			latin: 'Sansevieria trifasciata',
			nickname: 'The unkillable',
			copy: 'Snake plant. Let the soil dry out completely between waterings — it tolerates low light and the occasional forgotten month.',
		},
		{
			no: 'No. 02',
			latin: 'Calathea orbifolia',
			nickname: 'The diva',
			copy: 'Prayer plant. Wants humidity and filtered water; tap water browns its edges. Fussy, but the stripes earn it.',
		},
		{
			no: 'No. 03',
			latin: 'Epipremnum aureum',
			nickname: 'The generous',
			copy: 'Golden pothos. Water when dry to the second knuckle, and snip a stem below a node — it roots in a plain glass of water.',
		},
		{
			no: 'No. 04',
			latin: 'Zamioculcas zamiifolia',
			nickname: 'The camel',
			copy: 'ZZ plant. Its rhizomes store water for weeks, so when in doubt, wait another week. Built for dark corners.',
		}
	];
</script>

<svelte:head>
	<title>Verde — a field journal for your houseplants</title>
</svelte:head>

<header class="site-head">
	<a class="wordmark" href="#top">Verde</a>
	<nav>
		<a href="#journal">Journal</a>
		<a href="#plates">Plates</a>
		<a href="#get">Get the app</a>
	</nav>
</header>

<main id="top">
	<!-- ————— asymmetric hero: offset headline + one specimen-plate focal element ————— -->
	<section class="hero">
		<div class="hero-copy">
			<p class="label rise rise-1">Field guide Nº 04 — Houseplant care</p>
			<h1 class="rise rise-2">Keep every plant alive, on&nbsp;purpose.</h1>
			<p class="rise rise-3">
				Verde is a field journal for your windowsill. It learns each plant's Latin
				name, its light, and its thirst — then reminds you exactly when to water.
			</p>
			<div class="rise rise-4">
				<a class="btn" href="#get">Get Verde</a>
			</div>
		</div>
		<figure class="hero-plate frame rise rise-3">
			<svg viewBox="0 0 200 270" role="img" aria-label="Line drawing of a monstera leaf">
				<g fill="none" stroke="var(--ink)" stroke-width="1.5" stroke-linecap="round">
					<path
						d="M100 12 C148 12 182 58 176 118 C170 172 138 210 100 230 C62 210 30 172 24 118 C18 58 52 12 100 12 Z"
					/>
					<path d="M100 14 L100 228" stroke-width="1" />
					<path d="M100 60 L58 84 M100 60 L142 84" stroke-width="1" />
					<path d="M100 108 L52 132 M100 108 L148 132" stroke-width="1" />
					<path d="M100 156 L58 182 M100 156 L142 182" stroke-width="1" />
					<path d="M100 196 L70 214 M100 196 L130 214" stroke-width="1" />
					<path d="M42 92 q-9 26 -5 52" />
					<path d="M158 92 q9 26 5 52" />
					<path d="M52 152 q-5 22 -1 40" />
					<path d="M148 152 q5 22 1 40" />
					<path d="M100 230 C 98 244 96 254 92 264" />
				</g>
				<g fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round">
					<path d="M126 60 q14 4 20 16" />
					<path d="M74 60 q-14 4 -20 16" />
				</g>
			</svg>
			<figcaption>
				<span class="label">Pl. I</span>
				<span class="latin">Monstera deliciosa</span>
				<span class="plate-note">Water when the top 5&nbsp;cm run dry.</span>
			</figcaption>
		</figure>
	</section>

	<!-- ————— how it works: journal entries, not cards ————— -->
	<section class="journal" id="journal">
		<p class="label">How it works</p>
		<h2>Three entries<br />in the field journal.</h2>
		{#each entries as entry, i}
			<article class="entry" class:entry-right={i % 2 === 1}>
				<p class="label entry-week">{entry.week}</p>
				<h3>{entry.title}</h3>
				<p>{entry.body}</p>
			</article>
		{/each}
	</section>

	<!-- ————— features as specimen plates: staggered, hairline frames, Latin captions ————— -->
	<section class="plates-section" id="plates">
		<p class="label">The plates</p>
		<h2>Four species, kept<br />like specimens.</h2>
		<div class="plates">
			<div class="plates-col">
				{#each plates.filter((_, i) => i % 2 === 0) as plate}
					<figure class="plate frame">
						<figcaption>
							<span class="label">{plate.no}</span>
							<h3 class="latin">{plate.latin}</h3>
							<p class="plate-nickname">{plate.nickname}</p>
							<p class="plate-copy">{plate.copy}</p>
						</figcaption>
					</figure>
				{/each}
			</div>
			<div class="plates-col plates-col-offset">
				{#each plates.filter((_, i) => i % 2 === 1) as plate}
					<figure class="plate frame">
						<figcaption>
							<span class="label">{plate.no}</span>
							<h3 class="latin">{plate.latin}</h3>
							<p class="plate-nickname">{plate.nickname}</p>
							<p class="plate-copy">{plate.copy}</p>
						</figcaption>
					</figure>
				{/each}
			</div>
		</div>
	</section>

	<!-- ————— app-store CTA ————— -->
	<section class="cta" id="get">
		<p class="label cta-label">Get the app</p>
		<h2>Take the journal<br />to the windowsill.</h2>
		<p>
			Verde is free for your first ten plants. No account, no subscription pitch —
			just a field journal that remembers to water.
		</p>
		<div class="cta-buttons">
			<a class="btn btn-light" href="#get">Download on the App Store</a>
			<a class="btn btn-ghost-light" href="#get">Get it on Google Play</a>
		</div>
	</section>
</main>

<footer class="site-foot">
	<div class="foot-cols">
		<div>
			<p class="label">Verde</p>
			<a href="#top">About the journal</a>
			<a href="#journal">Field notes</a>
			<a href="#plates">The plates</a>
		</div>
		<div>
			<p class="label">Product</p>
			<a href="#get">iOS app</a>
			<a href="#get">Android app</a>
			<a href="#get">Changelog</a>
		</div>
		<div>
			<p class="label">Say hello</p>
			<a href="mailto:hello@verde.app">hello@verde.app</a>
			<a href="#top">@verde.journal</a>
		</div>
	</div>
	<div class="foot-base">
		<p class="label">© 2026 Verde Botanical Co. — a fictional product, built as a TZ-taste design reference.</p>
	</div>
</footer>

<style>
	/* ————— header ————— */
	.site-head {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		padding: var(--space-2) var(--space-3);
		border-bottom: 1px solid var(--line);
	}

	.wordmark {
		font-family: var(--font-display);
		font-size: 1.6rem;
		color: var(--ink);
		text-decoration: none;
	}

	.site-head nav {
		display: flex;
		gap: var(--space-2);
	}

	.site-head nav a {
		font-family: var(--font-mono);
		font-size: var(--text-micro);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--muted);
		text-decoration: none;
	}

	.site-head nav a:hover {
		color: var(--ink);
	}

	/* ————— hero: asymmetric ————— */
	.hero {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: var(--space-3);
		align-items: center;
		padding: var(--space-5) var(--space-3);
	}

	.hero-copy {
		grid-column: 2 / 8;
	}

	.hero-copy .label {
		margin-bottom: var(--space-2);
	}

	.hero-copy h1 {
		margin-bottom: var(--space-2);
	}

	.hero-copy p {
		color: var(--muted);
		margin-bottom: var(--space-3);
	}

	.hero-plate {
		grid-column: 9 / 13;
		margin: 0;
		padding: var(--space-3);
		background: var(--bg);
		box-shadow: 8px 8px 0 var(--line);
	}

	.hero-plate svg {
		width: 100%;
		height: auto;
	}

	.hero-plate figcaption {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		margin-top: var(--space-2);
		padding-top: var(--space-2);
		border-top: 1px solid var(--line);
	}

	.hero-plate .latin {
		font-family: var(--font-display);
		font-size: 1.25rem;
	}

	.plate-note {
		font-size: var(--text-small);
		color: var(--muted);
	}

	/* ————— journal entries ————— */
	.journal {
		padding: var(--space-5) var(--space-3);
		max-width: 1100px;
	}

	.journal > .label,
	.plates-section > .label {
		display: block;
		margin-bottom: var(--space-2);
	}

	.journal h2,
	.plates-section h2 {
		margin-bottom: var(--space-4);
	}

	.entry {
		border-top: 1px solid var(--line);
		padding: var(--space-3) 0;
		max-width: 620px;
	}

	.entry:last-of-type {
		border-bottom: 1px solid var(--line);
	}

	.entry-right {
		margin-left: auto;
	}

	.entry-week {
		margin: 0 0 var(--space-1);
	}

	.entry h3 {
		margin-bottom: var(--space-1);
	}

	.entry p:last-child {
		color: var(--muted);
		margin: 0;
	}

	/* ————— specimen plates: staggered columns ————— */
	.plates-section {
		padding: var(--space-5) var(--space-3);
		border-top: 1px solid var(--line);
	}

	.plates {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-3);
		max-width: 1100px;
	}

	.plates-col {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	.plates-col-offset {
		margin-top: var(--space-4);
	}

	.plate {
		margin: 0;
		padding: var(--space-3);
		background: var(--bg);
		transition: transform 0.3s var(--ease);
	}

	.plate:hover {
		transform: translateY(-4px);
	}

	.plate figcaption {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.plate .latin {
		font-family: var(--font-display);
		font-size: 1.5rem;
		letter-spacing: -0.01em;
	}

	.plate-nickname {
		font-family: var(--font-mono);
		font-size: var(--text-small);
		color: var(--accent);
		margin: 0;
	}

	.plate-copy {
		color: var(--muted);
		font-size: var(--text-small);
		margin: 0;
		max-width: 46ch;
	}

	/* ————— CTA band ————— */
	.cta {
		background: var(--ink);
		color: var(--bg);
		padding: var(--space-5) var(--space-3);
		margin: var(--space-5) 0 0;
	}

	.cta .cta-label {
		color: var(--line);
		display: block;
		margin-bottom: var(--space-2);
	}

	.cta h2 {
		margin-bottom: var(--space-2);
	}

	.cta p {
		color: var(--line);
		margin-bottom: var(--space-3);
	}

	.cta-buttons {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}

	.btn-light {
		background: var(--bg);
		color: var(--ink);
		border-color: var(--bg);
	}

	.btn-light:hover {
		background: var(--accent);
		border-color: var(--accent);
		color: var(--bg);
	}

	.btn-ghost-light {
		background: transparent;
		color: var(--bg);
		border: 1px solid var(--line);
	}

	.btn-ghost-light:hover {
		background: var(--bg);
		color: var(--ink);
		border-color: var(--bg);
	}

	/* ————— footer ————— */
	.site-foot {
		border-top: 1px solid var(--line);
		padding: var(--space-4) var(--space-3) var(--space-2);
	}

	.foot-cols {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-3);
		margin-bottom: var(--space-4);
	}

	.foot-cols div {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.foot-cols a {
		color: var(--muted);
		text-decoration: none;
		font-size: var(--text-small);
	}

	.foot-cols a:hover {
		color: var(--ink);
	}

	.foot-base {
		border-top: 1px solid var(--line);
		padding-top: var(--space-2);
	}

	/* ————— responsive ————— */
	@media (max-width: 900px) {
		.hero {
			grid-template-columns: 1fr;
			padding: var(--space-4) var(--space-2);
		}

		.hero-copy {
			grid-column: 1;
		}

		.hero-plate {
			grid-column: 1;
			max-width: 420px;
		}

		.plates {
			grid-template-columns: 1fr;
		}

		.plates-col-offset {
			margin-top: 0;
		}

		.foot-cols {
			grid-template-columns: 1fr;
		}
	}
</style>
