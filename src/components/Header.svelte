<script>
	import Container from './Container.svelte';
	import Logo from './Logo.svelte';
</script>

<header>
	<Container _class="header__container">
		<nav>
			<a href="/" class="header__logo-wrapper">
				<Logo />
			</a>

			<ul>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/page/1">Posts</a>
				</li>
			</ul>
		</nav>
	</Container>
</header>

<style lang="scss">
	header {
		/* height: 100px; */
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
		background-color: rgb(23, 36, 44);
		z-index: 1000;
		padding: 15px 0;
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
		/* height: 100%; */
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
		display: flex;
		gap: 20px;

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
