<template>
	<div class="travel">
		<editForm
			v-if="$route.params.popFlag === 'edit'"
			:flag="'travel'"
		></editForm>
		<listView
			v-else-if="$route.params.popFlag === 'view'"
			:data="list"
			:flag="'travel'"
		/>
		<travelList
			v-else
			:listData="list"
			@getData="getTravelList"
			@selectView="selectView"
		/>
		<edit
			v-if="$route.params.popFlag !== 'edit'"
			@click.native="edit()"
		/>
	</div>
</template>

<script>
	import Firebase from 'firebase';
	import travelList from '../../components/travel/travel.vue';
	import editForm from '../../components/common/edit-form.vue';
	import listView from '../../components/common/list-view.vue';
	import edit from '../../components/common/edit-btn.vue';

	export default {
		components: {
			travelList,
			listView,
			edit,
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
					this.list = [];
					querySnapshot.forEach((doc) => {
						const data = Object.assign({ id: doc.id }, doc.data());
						this.list.push(data);
					});
				});
			},
			selectView(id) {
				this.$router.push({ params: { popFlag: 'view' }, query: { id } });
			},
			edit() {
				this.$router.push({ params: { popFlag: 'edit' } });
			},
		},
	};
</script>

<style lang="scss" scoped>
</style>