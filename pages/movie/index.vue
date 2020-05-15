<template>
  <div class="movie">
    <createForm
      v-if="$route.params.popFlag === 'edit'"
      :flag="'movie'"
      @complete="getMovieList"
    ></createForm>
    <listView
      v-else-if="$route.params.popFlag === 'view'"
      :data="list"
      :flag="'movie'"
    />
    <movieList
      v-else
      :listData="list"
      :loading="loading"
      @getData="getMovieList"
      @selectView="selectView"
    ></movieList>
    <btn
      v-if="!$route.params.popFlag && $store.state.user.isLogin"
      :type="'edit'"
      @click.native="edit()"
    />
  </div>
</template>

<script>
  import createForm from '../../components/common/formControl.vue';
  import listView from '../../components/common/list-view.vue';
  import movieList from '../../components/movie/movieList.vue';
  import btn from '../../components/common/generalBtn.vue';
  import Firebase from "firebase";

  export default {
    components: {
      createForm,
      listView,
      movieList,
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
            const data = Object.assign({ id: doc.id }, doc.data());
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
