<template>
	<div class="travel">
		<div class="wrap">
			<p class="title">Travel is refresh</p>
			<div v-if="$route.params.popFlag === 'edit'" class="list">asdasd</div>
		</div>
		<edit
			@click.native="edit()"
		/>
	</div>
</template>

<script>
	import edit from '../../components/common/edit-btn.vue';

	export default {
		components: {
			edit,
		},
		methods: {
			edit() {
				this.$router.push({ params: { popFlag: 'edit' } });
			},
		},
	};
</script>

<style lang="scss" scoped>
	.travel{
		width: 100%;
		.wrap{
			width: 1200px;
			margin: 0 auto;
			.title{
				font-weight: bold;
				font-size: 20px;
				margin-top: 40px;
				color: #494c62;
			}
		}
	}
</style>