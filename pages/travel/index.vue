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
	import travelList from '../../components/post/listWrap.vue';
	import createForm from '../../components/post/formControl.vue';
	import listView from '../../components/post/list-view.vue';
  import btn from '../../components/common/generalBtn.vue';

	export default {
		head() {
			return {
				title: `여행 리뷰`,
				meta: [
					{ hid: 'description', name: 'description', content: `여행 리뷰` },
					{ hid: 'og:image', name: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/kingsjw7-f7e06.appspot.com/o/images%2Fflog.jpg?alt=media&token=5d7a96e9-b03a-47a9-a2ac-0267ca4a4939' },
					{ hid: 'og:title', name: 'og:title', content: `kingsjw - 여행 리뷰` },
					{ hid: 'og:description', name: 'og:description', content: `여행 리뷰` },
				],
			};
		},
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
						const data = Object.assign({ id: doc.id, type: 'travel' }, doc.data());
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
