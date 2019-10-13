<template>
	<div class="travelList">
		<div class="wrap">
			<p class="title">Travel is refresh</p>
			<div
				v-if="$route.params.popFlag !== 'edit'"
				class="list-wrap"
			>
				<list
					v-for="(val, index) in listData"
					:key="index"
					:list="val"
					@click.native="selectView(val.id)"
				></list>
			</div>
		</div>
	</div>
</template>

<script>
	import list from './list.vue';

	export default {
		props: ['listData'],
		components: {
			list,
		},
		methods: {
			selectView(id) {
				this.$emit('selectView', id);
			},
		},
		mounted() {
			this.$emit('getData');
		},
	};
</script>

<style lang="scss" scoped>
	.travelList{
		width: 100%;
		margin-bottom: 60px;
		.wrap{
			width: 1200px;
			margin: 0 auto;
			.title{
				font-weight: bold;
				font-size: 20px;
				margin-top: 40px;
				color: #494c62;
			}
			.list-wrap{
				width: 100%;
				display: flex;
				flex-basis: 33.33%;
				flex-wrap: wrap;
				.list{
					margin-left: 30px;
					&:nth-child(n + 4) {
						margin-top: 30px;
					}
					&:nth-child(3n + 1){
						margin-left: 0;
					}
				}
			}
		}
	}
</style>