<template>
	<md-button
		v-if="init"
		class="md-fab md-plain md-fab-bottom-right fx"
	>
		<md-icon>edit</md-icon>
	</md-button>
</template>

<script>
	export default {
		data() {
			return {
				init: false,
			};
		},
		mounted() {
			this.init = true;
		},
	};
</script>

<style lang="scss" scoped>
	@import 'vue-material/dist/vue-material.min.css';
	@import 'vue-material/dist/theme/default.css';
</style>