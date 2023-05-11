<script lang="ts">
	import type { Post } from '../types/posts';
	import Card from './Card.svelte';
	import Pagination from './Pagination.svelte';

	export let posts: Post[] = [];
	export let loading = false;
	export let currentPage: number | string = 1;
</script>

<title>Blog</title>

<section>
	{#each posts as post, index}
		<Card {post} {index} />
	{/each}
</section>

{#if loading}
	<p>Loading...</p>
{/if}

<Pagination {currentPage} />

<style>
	section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-template-rows: repeat(auto-fit, minmax(400px, 1fr));
		grid-gap: 16px;
		margin-top: 100px;
		min-height: 50vh;
	}
</style>
