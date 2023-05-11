<script lang="ts">
	import { afterNavigate } from '$app/navigation';

	import { page } from '$app/stores';
	let currentPageVal: string | number | null = '1';

	const { url } = $page;
	const searchParams = new URLSearchParams(url.search);

	export let currentPage: number | string = 1;

	const getUrl = (currentPage: number) => {
		return `/page/${currentPage}`;
		searchParams.set('page', currentPage.toString());
		const url = new URL($page.url);
		url.search = searchParams.toString();
		return url.toString();
	};

	afterNavigate(() => {
		currentPageVal = currentPage;
	});
</script>

<div>
	{#if Number(currentPageVal) > 1}
		<a href={getUrl(Number(currentPageVal) - 1)} class="btn-dir">
			<button>←</button>
		</a>
	{/if}
	{#each [1, 2, 3, 4, 5] as page}
		<a class={page === Number(currentPageVal) ? 'active' : ''} href={getUrl(page)}>
			<button>{page}</button></a
		>
	{/each}

	<a href={getUrl(Number(currentPageVal || 0) + 1)} class="btn-dir">
		<button>→</button>
	</a>
</div>

<style lang="scss">
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 100px;
		gap: 20px;
	}

	button {
		text-align: center;
		vertical-align: middle;
		white-space: nowrap;
		user-select: none;
		font-size: 18px;
		color: rgb(100, 116, 139);
		background: none;
		outline: none;
		border: none;
	}

	.active {
		button {
			color: #fff;
		}
	}

	.btn-dir {
		display: flex;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		display: block;
		align-items: center;
		justify-content: center;
		padding: 8px;

		background-color: rgb(115, 206, 207);
		text-decoration: none;
		cursor: pointer;

		button {
			font-size: 1rem;
		}
	}
</style>
