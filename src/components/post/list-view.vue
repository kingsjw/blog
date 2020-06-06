<template>
	<div class="list-view" :class="$store.state.device.isMobile ? 'mobile' : ''">
		<div v-if="!editMode">
			<listViewLoading
				v-if="loading"
			></listViewLoading>
			<div
				v-else
				class="contents markdown-body" v-html="listViewData && listViewData.contents"
			></div>
		</div>
		<editForm
			v-else
			:data="listViewData"
			:flag="flag"
			@getData="$emit('getData')"
		/>
		<div class="btn-wrap">
			<button
        v-if="$store.state.user.isLogin"
				@click="editMode = !editMode"
				class="md-button success"
			>
        <div>{{ editMode ? '취소' : '수정'}}</div>
      </button>
		</div>
	</div>
</template>

<script>
  import 'github-markdown-css/github-markdown.css';
	import Firebase from 'firebase';
	import editForm from './formControl.vue';
	import listViewLoading from '../loading/list-view-loading.vue';

	export default {
		props: ['flag'],
		head() {
			const name = this.listViewData && this.listViewData.title;
			return {
				title: name,
			};
		},
		components: {
			editForm,
			listViewLoading,
		},
		data() {
			return {
				data: '',
				loading: false,
				editMode: false,
        error: false,
			};
		},
		computed: {
			listViewData() {
				let viewData = '';
				if (this.data) {
					viewData = this.data;
				} else {
					viewData = this.$store.state.postView.data && this.$store.state.postView.data[this.$route.query.id];
				}
				return viewData;
			},
		},
    methods: {
      getListViewQuery(id) {
        const db = Firebase.firestore();
        return db.collection(this.flag).doc(id);
      },
    },
		mounted() {
			this.loading = true;
			// console.log(this.$store.state.postView);
			// console.log((this.$store.state.postView.data && this.$store.state.postView.data[this.$route.query.id]) === undefined);
			if ((this.$store.state.postView.data && this.$store.state.postView.data[this.$route.query.id]) === undefined) {
			  try {
          const query = this.getListViewQuery(this.$route.query.id);
          query.get().then((doc) => {
            const loadedData = doc.data();
            if (loadedData) {
              this.data = Object.assign({ id: doc.id }, loadedData);
              this.$store.commit('postView/saveData', this.data);
              this.loading = false;
            } else {
              // console.log('load error');
              this.$nuxt.error({ statusCode: 404, message: 'Post not found' });
            }
          });
        } catch (err) {
          if (err) {
            // console.log('load error');
            this.$nuxt.error({ statusCode: 404, message: 'Post not found' });
          }
        }
			}
		},
	};
</script>

<style lang="scss" scoped>
	.list-view{
		width: 1200px;
		margin: 0 auto;
    padding: 0 12px 40px 12px;
    &.mobile{
      width: 100%;
    }
    .contents{
      margin-top: 30px;
    }
		.btn-wrap{
			margin-top: 30px;
			display: flex;
			justify-content: flex-end;
		}
	}
</style>
