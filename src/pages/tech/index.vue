<template>
	<div class="tech">
		<createForm
			v-if="$route.params.popFlag === 'edit'"
			:flag="'tech'"
      @getData="getTechList"
		></createForm>
		<listView
			v-else-if="$route.params.popFlag === 'view'"
			:data="list"
			:flag="'tech'"
			@getData="getTechList"
		/>
		<listWrap
			v-else
			:listData="list"
			:loading="loading"
			@getData="getTechList"
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
  import listWrap from '../../components/post/listWrap.vue';
	import createForm from '../../components/post/formControl.vue';
	import listView from '../../components/post/list-view.vue';
  import btn from '../../components/common/generalBtn.vue';

	export default {
		head() {
			return {
				title: `Tech`,
				meta: [
					{ hid: 'description', name: 'description', content: `개발자 서재우의 기술 블로그` },
					{ hid: 'og:image', name: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/kingsjw7-f7e06.appspot.com/o/images%2Fwhy.jpg?alt=media&token=aa6e1c2f-d496-4d03-8f1d-896b965ae5e5' },
					{ hid: 'og:title', name: 'og:title', content: `kingsjw - Tech` },
					{ hid: 'og:description', name: 'og:description', content: `개발자 서재우의 기술 블로그` },
				],
			};
		},
		components: {
			listWrap,
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
			getTechList() {
				const db = Firebase.firestore();
				this.loading = true;
				db.collection('tech').orderBy("title", "asc").get().then((querySnapshot) => {
					this.list = [];
					querySnapshot.forEach((doc) => {
						const data = Object.assign({ id: doc.id, type: 'tech' }, doc.data());
						this.list.push(data);
					});
					this.$store.commit('post/saveData', { tech: [...this.list] });
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
  };
</script>

