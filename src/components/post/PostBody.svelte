<script lang="ts">
	import { fade } from 'svelte/transition';
	import Container from '../Container.svelte';

	export let content: string;
</script>

<Container _class="post__body">
	{@html content}
</Container>

<style lang="scss">
	:global(.post__body) {
		/* gap: 16px; */
		display: flex;
		flex-direction: column;
		margin-left: auto;
		margin-right: auto;
		width: fit-content;

		padding: 20px 0;
	}

	:global(.post__body > *) {
		margin: auto;
		max-width: calc(100% - 40px);
		margin-left: 0;
		margin-right: 0;

		@media screen and (min-width: 768px) {
			max-width: 51rem;
		}
	}
	:global(.post__body p),
	:global(.post__body li) {
		font-size: 1.6rem;
		color: inherit;
		white-space: pre-line;
		line-height: 24px;
		margin-block: 16px;
	}
	:global(.post__body h2) {
		margin-top: 20px;
	}
	:global(.post__body ol li) {
		list-style-type: circle;
	}
</style>
