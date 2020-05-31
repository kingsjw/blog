<template>
  <div class="movie">
    <createForm
      v-if="$route.params.popFlag === 'edit'"
      :flag="'movie'"
      @getData="getMovieList"
    ></createForm>
    <listView
      v-else-if="$route.params.popFlag === 'view'"
      :data="list"
      :flag="'movie'"
      @getData="getMovieList"
    />
    <listWrap
      v-else
      :listData="list"
      :loading="loading"
      @getData="getMovieList"
      @selectView="selectView"
    ></listWrap>
    <btn
      v-if="!$route.params.popFlag && $store.state.user.isLogin"
      :type="'edit'"
      @click.native="edit()"
    />
  </div>
</template>

<script>
  import listWrap from '../../components/post/listWrap.vue';
	import createForm from '../../components/post/formControl.vue';
	import listView from '../../components/post/list-view.vue';
  import btn from '../../components/common/generalBtn.vue';
  import Firebase from "firebase";

  export default {
		head() {
			return {
				title: `서재우의 영화 리뷰`,
				meta: [
					{ hid: 'description', name: 'description', content: `강북의 이동진 영화인 서재우의 날카로운 리뷰` },
					{ hid: 'og:image', name: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/kingsjw7-f7e06.appspot.com/o/images%2Fai.jpg?alt=media&token=52d7d579-d0b6-433c-8f5a-d8fa9ebc04d8' },
					{ hid: 'og:title', name: 'og:title', content: `kingsjw - 영화 리뷰` },
					{ hid: 'og:description', name: 'og:description', content: `강북의 이동진 영화인 서재우의 날카로운 리뷰` },
				],
			};
		},
    components: {
      createForm,
      listView,
      listWrap,
      btn,
    },
    data() {
      return {
        loading: false,
        list: [],
      };
    },
    methods: {
      getMovieList() {
        const db = Firebase.firestore();
        this.loading = true;
        db.collection('movie').orderBy("date", "desc").get().then((querySnapshot) => {
          this.list = [];
          querySnapshot.forEach((doc) => {
            const data = Object.assign({ id: doc.id, type: 'movie' }, doc.data());
            this.list.push(data);
          });
          this.$store.commit('post/saveData', { movie: [...this.list] });
          this.loading = false;
        });
        // console.log('영화 부름');
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
