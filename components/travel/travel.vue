<template>
	<div class="travel">
		<div class="wrap">
			<p class="title">Travel is refresh</p>
			<editForm
				v-if="$route.params.popFlag === 'edit'"
				:flag="'travel'"
				></editForm>
				<div
					v-if="$route.params.popFlag !== 'edit'"
					class="list-wrap"
				>
					<list
						v-for="(val, index) in list"
						:key="index"
						:list="val"
					></list>
				</div>
		</div>
		<edit
			v-if="$route.params.popFlag !== 'edit'"
			@click.native="edit()"
		/>
	</div>
</template>

<script>
	import edit from '../../components/common/edit-btn.vue';
	import editForm from '../../components/common/edit-form.vue';
	import list from './list.vue';
	import Firebase from 'firebase';

	export default {
		components: {
			edit,
			editForm,
			list,
		},
		data() {
			return {
				list: [],
			};
		},
		methods: {
			getTravelList() {
				const db = Firebase.firestore();
				db.collection('travel').orderBy("date", "desc").get().then((querySnapshot) => {
					querySnapshot.forEach((doc) => {
						const data = Object.assign({ id: doc.id }, doc.data());
						console.log(data);
						this.list.push(data);
					});
				});
			},
			edit() {
				this.$router.push({ params: { popFlag: 'edit' } });
			},
		},
		mounted() {
			this.getTravelList();
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
			.list-wrap{
				width: 100%;
				display: flex;
				.list{
					margin-left: 30px;
					&:first-of-type{
						margin-left: 0;
					}
				}
			}
		}
	}
</style>