<template>
	<div class="travel">
		<createForm
			v-if="$route.params.popFlag === 'edit'"
			:flag="'travel'"
      @complete="getTravelList"
		></createForm>
		<listView
			v-else-if="$route.params.popFlag === 'view'"
			:data="list"
			:flag="'travel'"
		/>
		<travelList
			v-else
			:listData="list"
			:loading="loading"
			@getData="getTravelList"
			@selectView="selectView"
		/>
		<btn
			v-if="!$route.params.popFlag && $store.state.user.isLogin"
      :type="'edit'"
			@click.native="edit()"
		/>
	</div>
</template>

<script>
	import Firebase from 'firebase';
	import travelList from '../../components/travel/travel.vue';
	import createForm from '../../components/common/formControl.vue';
	import listView from '../../components/common/list-view.vue';
  import btn from '../../components/common/generalBtn.vue';

	export default {
		components: {
			travelList,
			listView,
      btn,
			createForm,
		},
		data() {
			return {
				list: [],
				loading: false,
			};
		},
		methods: {
			getTravelList() {
				const db = Firebase.firestore();
				this.loading = true;
				db.collection('travel').orderBy("date", "desc").get().then((querySnapshot) => {
					this.list = [];
					querySnapshot.forEach((doc) => {
						const data = Object.assign({ id: doc.id }, doc.data());
						this.list.push(data);
					});
					this.$store.commit('post/saveData', { travel: [...this.list] });
					this.loading = false;
				});
			},
			selectView(id) {
				this.$router.push({ params: { popFlag: 'view' }, query: { id } });
			},
			edit() {
				this.$router.push({ params: { popFlag: 'edit' } });
			},
		},
    mounted() {
    },
  };
</script>
