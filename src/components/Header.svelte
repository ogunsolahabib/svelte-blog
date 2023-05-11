<script>
	import Logo from './Logo.svelte';
</script>

<header>
	<nav>
		<Logo />

		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/page/1">Posts</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100px;
		margin-bottom: 60px;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		max-width: 1200px;
		padding: 0 20px;
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
