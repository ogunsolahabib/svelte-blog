<script lang="ts">
	import { fade } from 'svelte/transition';
	import Container from '../Container.svelte';

	export let content: string;
</script>

<Container class="post__body">
	{@html content}
</Container>

<style lang="scss">
	:global(.post__body) {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-left: auto;
		margin-right: auto;
		width: fit-content;
		color: rgb(133, 147, 167);
		padding: 20px 0;
	}

	:global(.post__body > *) {
		margin: auto;
		margin-left: 0;
		margin-right: 0;

		@media screen and (min-width: 600px) {
			max-width: calc(100% - 40px);
		}
		@media screen and (min-width: 768px) {
			max-width: 51rem;
		}
	}
	:global(.post__body img),
	:global(.post__body video),
	:global(.post__body figure),
	:global(.post__body iframe) {
		margin: 0 auto;
		display: block;
		margin-top: 20px;
		margin-bottom: 20px;
		max-width: 100%;
		border-radius: 2rem;
	}
	:global(.post__body p),
	:global(.post__body li) {
		font-size: 1.6rem;
		color: inherit;
		white-space: pre-line;
		line-height: 24px;
		margin-block: 16px;
	}
	:global(.post__body h1),
	:global(.post__body h2),
	:global(.post__body h3) {
		margin-top: 2.5rem;
		color: rgb(223, 243, 244);
	}

	:global(.post__body h1) {
		font-size: 3.2rem;
	}
	:global(.post__body h2) {
		font-size: 2.4rem;
	}

	:global(.post__body h3) {
		font-size: 1.8rem;
	}
	:global(.post__body ol li) {
		list-style-type: circle;
	}
</style>
