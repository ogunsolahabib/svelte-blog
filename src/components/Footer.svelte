<script>
	import Container from './Container.svelte';
	import Space from './Space.svelte';
</script>

<Container fillViewport class="footer__container">
	<div class="footer__content">
		<div class="footer__content__subscribe">
			<p>Get notified about latest travel updates & new city guides</p>

			<div class="footer__content__form">
				<input type="text" placeholder="Enter your email" />
				<button>Subscribe</button>
			</div>
		</div>
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
			gap: 30px;
			&__subscribe {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 16px;

				@media (min-width: 768px) {
					flex-direction: row;

					p {
						width: 21rem;
						font-size: 1.4rem;
					}
				}
			}
			p {
				color: rgb(133, 147, 167);
			}

			@media (min-width: 768px) {
				flex-direction: row;
				justify-content: space-between;
			}
		}

		&__content__form {
			display: flex;
			gap: 16px;
			align-items: center;
			justify-content: center;

			input {
				padding: 8px 28px 8px 10px;
				border: none;
				border-radius: 10px;
				outline: none;
				font-size: 14px;
				background-color: rgb(31, 48, 58);
				color: rgb(133, 147, 167);
			}

			button {
				display: inline-flex;
				padding: 6px 20px;
				margin-left: -40px;
				border: none;
				border-radius: 10px;
				font-size: 14px;
				font-weight: 500;
				color: rgb(191, 232, 233);
				transition: background-color 200ms ease 0s, color 200ms ease 0s;
				background-color: rgb(43, 125, 125);
			}
		}
	}
</style>
