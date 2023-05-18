<script lang="ts">
	export let _class: string | undefined;
</script>

<div class={`container${_class ? ' ' + _class : ''}`} {...$$restProps}>
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
