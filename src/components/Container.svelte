<script lang="ts">
	// export let $$restProps: any = {};
</script>

<div {...$$props} class={`container${$$props.class ? ' ' + $$props.class : ''}`}>
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
	}
</style>
