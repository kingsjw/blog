<template>
	<div class="travel">
		<div class="wrap">
			<p class="title">Travel is refresh</p>
			<editForm v-if="$route.params.popFlag === 'edit'">
			</editForm>
		</div>
		<edit
			v-if="$route.params.popFlag !== 'edit'"
			@click.native="edit()"
		/>
	</div>
</template>

<script>
	import edit from '../../components/common/edit-btn.vue';
	import editForm from '../../components/common/edit-list.vue';

	export default {
		components: {
			edit,
			editForm,
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