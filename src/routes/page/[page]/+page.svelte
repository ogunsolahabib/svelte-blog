<script lang="ts">
	import PostsContainer from '../../../components/PostsContainer.svelte';
	import type { Post } from '../../../types/posts';
	import { afterNavigate } from '$app/navigation';
	import fetchPosts from '../../../utils/fetchPosts';

	export let data: any;

	let posts: Post[] = [];
	let loading = true;

	afterNavigate(async () => {
		posts = [];
		posts = await fetchPosts(data.page);
		loading = false;
	});
</script>

<PostsContainer {posts} {loading} currentPage={data.page} />
