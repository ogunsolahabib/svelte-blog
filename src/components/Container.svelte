<script lang="ts">
	// export let $$restProps: any = {};
	export let fillViewport: boolean = false;

	const classes = () => {
		const classList = [`container${$$props.class ? ' ' + $$props.class : ''}`];

		if (fillViewport) {
			classList.push('container--fill-viewport');
		}

		return classList.join(' ');
	};
</script>

<div {...$$props} class={classes()}>
	<slot />
</div>

<style lang="scss">
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 16px;

		@media screen and (min-width: 768px) {
			padding: 0 40px;
		}

		@media screen and (min-width: 992px) {
			padding: 0 100px;
		}

		&--fill-viewport {
			max-width: 100vw;
			padding: 0 40px;

			@media screen and (min-width: 768px) {
				padding: 30px 50px;
			}
		}
	}
</style>
