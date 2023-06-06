<script>
	import Container from './Container.svelte';
	import Logo from './Logo.svelte';
</script>

<header>
	<Container fillViewport class="header__container">
		<nav>
			<a href="/" class="header__logo-wrapper" aria-label="Home">
				<Logo />
			</a>

			<ul>
				<li>
					<a href="https://synergist.netlify.app" aria-label="Home">Home</a>
				</li>
				<li>
					<a href="https://github.com/ogunsolahabib" aria-label="Posts">Posts</a>
				</li>
				<li>
					<a href="/" aria-label="Blog">Blog</a>
				</li>
			</ul>
		</nav>
	</Container>
</header>

<style lang="scss">
	header {
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
		background-color: rgb(23, 36, 44);
		z-index: 1000;
		background: linear-gradient(rgb(23, 36, 44) 90%, transparent 100%);
	}

	.header {
		&__logo-wrapper {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	:global(.logo) {
		width: 200px;
	}
	:global(.header__container) {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 60px;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	@media (max-width: 768px) {
		header {
			height: 60px;
		}
	}

	ul {
		display: none;
		gap: 20px;
		@media (min-width: 768px) {
			display: flex;
		}

		li {
			list-style: none;

			a {
				color: #fff;
				font-size: 18px;
				text-decoration: none;
				transition: all 0.2s ease-in-out;

				&:hover {
					color: #fff;
					text-decoration: underline;
				}
			}
		}
	}
</style>
