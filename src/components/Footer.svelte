<script>
	import Container from './Container.svelte';
	import Space from './Space.svelte';
</script>

<Container fillViewport class="footer__container">
	<div class="footer__content">
		<Space>
			<p>Get notified about latest travel updates & new city guides</p>

			<div class="footer__content__form">
				<input type="text" placeholder="Enter your email" />
				<button>Subscribe</button>
			</div>
		</Space>
	</div>
</Container>

<style lang="scss">
	:global(.footer__container) {
		background-color: rgb(23, 36, 44);
		padding: 60px 0;
	}

	.footer {
		&__content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 30px;
			text-align: center;
		}

		&__content__form {
			display: flex;
			gap: 16px;
			align-items: center;
			justify-content: center;
			margin-top: 30px;

			input {
				padding: 10px 20px;
				border-radius: 4px;
				border: none;
				background-color: rgb(23, 36, 44);
				color: white;
				font-size: 16px;
				font-weight: 500;
				width: 100%;
				max-width: 300px;
			}

			button {
				padding: 10px 20px;
				border-radius: 4px;
				border: none;
				background-color: rgb(255, 255, 255);
				color: rgb(23, 36, 44);
				font-size: 16px;
				font-weight: 500;
				cursor: pointer;
				margin-left: -20px;
			}
		}
	}
</style>
