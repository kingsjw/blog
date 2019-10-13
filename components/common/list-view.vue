<template>
	<div class="list-view">
		<div class="contents" v-html="data.contents">
		</div>
	</div>
</template>

<script>
	import Firebase from 'firebase';

	export default {
		props: ['flag'],
		data() {
			return {
				data: '',
			};
		},
		mounted() {
			// this.contents = 
			const db = Firebase.firestore();
			db.collection(this.flag).doc(this.$route.query.id).get().then((doc) => {
				const data = Object.assign({ id: doc.id }, doc.data());
				this.data = data;
			});
		},
	};
</script>

<style lang="scss" scoped>
	.list-view{
		width: 1200px;
		margin: 0 auto;
	}
</style>