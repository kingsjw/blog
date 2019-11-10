<template>
	<div class="list-view">
		<div
			v-if="!editMode"
			class="contents markdown-body" v-html="data.contents"
		></div>
		<editForm
			v-else
			:data="data"
			:flag="flag"
		/>
		<!-- {{data}} -->
		<div class="btn-wrap">
			<md-button
				@click="editMode = !editMode"
				class="md-dense md-primary">{{ editMode ? '취소' : '수정'}}</md-button>
		</div>
	</div>
</template>

<script>
	import Firebase from 'firebase';
	import editForm from './formControl';

	export default {
		props: ['flag'],
		components: {
			editForm,
		},
		data() {
			return {
				data: '',
				editMode: false,
			};
		},
		mounted() {
			const db = Firebase.firestore();
			db.collection(this.flag).doc(this.$route.query.id).get().then((doc) => {
				const data = Object.assign({ id: doc.id }, doc.data());
				this.data = data;
			});
		},
	};
</script>

<style lang="scss" scoped>
	@import 'github-markdown-css/github-markdown.css';
	@import 'vue-material/dist/vue-material.min.css';
	@import 'vue-material/dist/theme/default.css';
	.list-view{
		width: 1200px;
		margin: 0 auto;
		.btn-wrap{
			margin-top: 30px;
			display: flex;
			justify-content: flex-end;
		}
	}
</style>