<script lang="ts">
	import Container from '../Container.svelte';
	import categoriesJson from '../../utils/categories.json';
	import WaveSvg from './WaveSvg.svelte';
	import Space from '../Space.svelte';
	import CalendarIcon from '../icons/CalendarIcon.svelte';
	import StopwatchIcon from '../icons/StopwatchIcon.svelte';

	export let post: any;

	let categoryId: string = post.categories[0];

	const categories = categoriesJson as any;
</script>

<div class="post-hero">
	<Container class="post-hero__container">
		<div class="post-hero__image-wrapper">
			<img src={post.featured_media} alt={post.title} loading="lazy" />
		</div>
		<div class="post-hero__content">
			<p class="post-hero__content__category">
				{categories[categoryId]?.name}
			</p>
			<h1>
				{@html post.title}
			</h1>
			<p class="post-hero__content__author">
				by {post.author}
			</p>
			<Space gap={30}>
				<Space gap={4}>
					<CalendarIcon />

					<p class="post-hero__content__date">
						{post.date}
					</p>
				</Space>
				<Space gap={4}>
					<StopwatchIcon />
					<p class="post-hero__content__length">
						{post.reading_time} min read
					</p>
				</Space>
			</Space>
		</div>
	</Container>
</div>
<WaveSvg />

<style lang="scss">
	:global(.post-hero__container) {
		gap: 16px;
		display: flex;
		flex-direction: column;
		/* max-width: clamp(300px, 100%, 1200px) !important; */

		@media screen and (min-width: 768px) {
			gap: 40px;
		}
		@media screen and (min-width: 992px) {
			gap: 40px;
			flex-direction: row-reverse;
		}
		@media screen and (min-width: 1280px) {
			gap: 100px;
		}
	}

	.post-hero {
		background: rgb(16, 24, 29);
		display: flex;
		margin-top: -200px;
		padding-top: 200px;

		&__image-wrapper {
			flex-shrink: 0;

			@media screen and (min-width: 992px) {
				flex: 3 1 0%;
				width: 600px;
				max-width: 100%;
			}

			img {
				width: 100%;
				height: 220px;
				object-fit: cover;
				border-radius: 17px;
				border: 2px solid rgb(80, 174, 235);
				@media (min-width: 576px) {
					height: 440px;
				}
			}
		}

		&__content {
			flex: 2 1 0%;

			&__category {
				font-size: 1.6rem;
				color: rgb(80, 174, 235);
				margin-bottom: 8px;
			}

			h1 {
				font-size: 3.2rem;
				margin-top: 1.6rem;
				margin-bottom: 2.4rem;
			}

			&__author {
				margin-bottom: 20px;
			}
			&__author,
			&__date,
			&__length {
				color: rgb(100, 116, 139);
			}
			&__date,
			&__length {
				font-size: 1.6rem;
				color: rgb(100, 116, 139);
				margin-bottom: 8px;

				@media screen and (min-width: 768px) {
					margin-bottom: 0;
				}
			}
		}
	}
</style>
