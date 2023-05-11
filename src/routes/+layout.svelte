<script>
	import '@fontsource/habibi';
	import Header from '../components/Header.svelte';
</script>

<Header />
<div {...$$props} class={`container${$$props.class ? ' ' + $$props.class : ''}`}>
	<slot />
</div>

<style lang="scss">
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 16px;
	}
	.main-container {
		margin-top: 100px;
	}

	:global(html) {
		font-size: 62.5%;
		font-family: 'Habibi', Geneva, Tahoma, sans-serif;

		@media (max-width: 768px) {
			font-size: 50%;
		}
	}
	:global(body) {
		line-height: 1.5;
		color: #fff;
		background-color: rgb(23, 36, 44);
	}

	/* links */
	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	/* inputs */
	:global(input) {
		font-family: inherit;
		font-family: 'Habibi', sans-serif;
		letter-spacing: 3;
		font-size: inherit;
		line-height: inherit;
		color: inherit;
		background-color: transparent;
		border: none;
		outline: none;
	}
</style>
