<script lang="ts">
	import { onMount } from 'svelte';
	import PostsContainer from '../components/PostsContainer.svelte';
	import type { Post } from '../types/posts';
	import fetchPosts from '../utils/fetchPosts';

	let posts: Post[] = [];
	let loading = true;

	onMount(async () => {
		posts = [];
		posts = await fetchPosts();
		loading = false;
	});
</script>

<PostsContainer {posts} {loading} />

<style>
</style>
