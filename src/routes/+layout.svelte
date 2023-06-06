<script>
	import '@fontsource-variable/nunito';
	import Header from '../components/Header.svelte';
	import { fade } from 'svelte/transition';
	import Footer from '../components/Footer.svelte';
</script>

<Header />
<main class="main-wrapper" in:fade={{ delay: 0 }}>
	<slot class="main" />
</main>

<Footer />

<style lang="scss">
	.main-wrapper {
		padding-top: 100px;
	}

	:global(body),
	:global(html) {
		margin: 0;
		padding: 0;
	}

	:global(html) {
		font-size: 62.5%;
		font-family: 'Nunito Variable', Geneva, Tahoma, sans-serif;

		@media (max-width: 768px) {
			font-size: 50%;
		}
	}
	:global(body) {
		line-height: 1.5;
		color: #fff;
		background-color: rgb(23, 36, 44);
	}

	::global(*) {
		margin: 0;
		padding: 0;
	}

	/* links */
	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	/* inputs */
	:global(input) {
		font-family: inherit;
		font-family: 'Nunito Variable', sans-serif;
		letter-spacing: 3;
		font-size: inherit;
		line-height: inherit;
		color: inherit;
		background-color: transparent;
		border: none;
		outline: none;
	}

	/* resets */
	:global(ul) {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		margin: 0;
		padding: 0;
		line-height: 1.5;
	}

	:global(p) {
		margin: 0;
		padding: 0;
	}

	:global(img) {
		display: block;
		max-width: 100%;
	}

	:global(button) {
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
		color: inherit;
		background-color: transparent;
		border: none;
		outline: none;
		cursor: pointer;
	}

	:global(svg) {
		fill: currentColor;
	}

	:global(h1) {
		font-size: 4rem;
	}

	:global(h2) {
		font-size: 3.2rem;
	}

	:global(h3) {
		font-size: 2.4rem;
	}

	:global(h4) {
		font-size: 2rem;
	}

	:global(h5) {
		font-size: 1.8rem;
	}

	:global(h6) {
		font-size: 1.6rem;
	}

	:global(p) {
		font-size: 1.6rem;
	}

	:global(a) {
		font-size: 1.6rem;
	}

	:global(input) {
		font-size: 1.6rem;
	}

	:global(button) {
		font-size: 1.6rem;
	}
</style>
