<template>
	<div class="list-view" :class="$store.state.common.isMobile ? 'mobile' : ''">
		<div v-if="!editMode">
			<listViewLoading
				v-if="loading"
			></listViewLoading>
			<div
				v-else
				class="contents markdown-body" v-html="data.contents"
			></div>
		</div>
		<editForm
			v-else
			:data="data"
			:flag="flag"
		/>
		<!-- {{data}} -->
		<div class="btn-wrap">
			<button
        v-if="$store.state.user.isLogin"
				@click="editMode = !editMode"
				class="md-button success">
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
		components: {
			editForm,
			listViewLoading,
		},
		data() {
			return {
				data: '',
				loading: false,
				editMode: false,
			};
		},
		async mounted() {
			const db = Firebase.firestore();
			this.loading = true;
			const doc = await db.collection(this.flag).doc(this.$route.query.id).get();
      const data = Object.assign({ id: doc.id }, doc.data());
			this.data = data;
			this.loading = false;
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
