<script lang="ts">
	import Input from '../components/Input.svelte';
	import PostsGrid from '../components/PostsGrid.svelte';
	import type { Post } from '../types/posts';
	import Container from './Container.svelte';

	export let posts: Post[] = [];
	export let loading = false;

	export let currentPage: number | string = 1;
</script>

<Container>
	<Input placeholder="Search..." on:change={(e) => console.log(e.detail)} />
	<PostsGrid {posts} {loading} {currentPage} />
</Container>
