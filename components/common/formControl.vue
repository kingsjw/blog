<template>
	<div class="edit" v-if="init">
		<editForm
			:formData="formData"
			@saveThumbnail="saveThumbnail"
		/>
		<div>
			<img v-if="mode === 'edit'" class='thumbnailImage' :src='data.thumbnail'>
			<input type="file" @change="saveThumbnail" ref="thumbnail">
		</div>
		<md-button @click="submit" class="md-raised md-primary submit-btn">{{ mode === 'create' ? '저장' : '수정'}}</md-button>
	</div>
</template>

<script>
	import Firebase from 'firebase';
	import editForm from './form.vue';

	export default {
		props: ['flag', 'data'],
		components: {
			editForm,
		},
		data() {
			const formData = {
				title: this.data ? this.data.title : '',
				contents: this.data ? this.data.contents : '',
			};
			return {
				formData,
				mode: this.data ? 'edit' : 'create',
				thumbnail: null,
				init: false,
			};
		},
		methods: {
			saveThumbnail() {
				this.thumbnail = this.$refs.thumbnail.files[0];
				// console.log(data);
			},
			setData() {
				let submitData = {};
				if (!this.formData.title || !this.formData.contents || (this.mode === 'create' && !this.thumbnail) || (this.mode === 'edit' && !this.data.thumbnail)) {
					alert('다 입력해야지..');
					return;
				} else {
					submitData = {
						title: this.formData.title,
						contents: this.formData.contents,
						thumbnail: this.thumbnail,
						writer: 'Master',
						date: new Date()
					};
				}
				return new Promise((resolve) => {
					resolve(submitData);
				});
			},
			setThumbnail() {
				const storageRef = Firebase.storage().ref();

				return this.mode !== 'edit' || (this.mode === 'edit' && this.thumbnail !== null) ?
					storageRef.child(`images/${this.thumbnail.name}`).put(this.thumbnail).then(() => {
						return storageRef.child(`images/${this.thumbnail.name}`).getDownloadURL();
					})
					: new Promise((resolve) => {
							resolve(this.data.thumbnail);
						});
			},
			uploadContentsImage() {
				const contentsData = this.formData.contents;
				const regExp = /<(\img)([^>]*)>/gi;
				let img = contentsData.match(regExp);
				if (img && img.length > 0) {
					const storageRef = Firebase.storage().ref();
					const temp = document.createElement('div');
					for (let x = 0; x < img.length; x += 1) {
						temp.innerHTML += img[x];
					}
					const imageHtml = temp.getElementsByTagName('img');
					const imageData = [...imageHtml].map(v => v.currentSrc);
					function dataURLtoFile(dataurl, filename) {
						const arr = dataurl.split(',');
						const mime = arr[0].match(/:(.*?);/)[1];
						const bstr = atob(arr[1]);
						let n = bstr.length, u8arr = new Uint8Array(n);
						while(n--){
							u8arr[n] = bstr.charCodeAt(n);
						}
						return new File([u8arr], filename, { type: mime });
					}
					const file = [];
					const date = new Date();
					// const replaceImgData = [];
					for (let x = 0; x < imageData.length; x += 1) {
						file.push(dataURLtoFile(imageData[x], `${date.getMilliseconds()}${x}`));
					}
					for (let x = 0; x < file.length; x += 1) {
						storageRef.child(`images/${file[x].name}`).put(file[x]).then(() => {
							storageRef.child(`images/${file[x].name}`).getDownloadURL().then((url) =>{
								this.formData.contents = this.formData.contents.replace(img[x], `<img src="${url}">`);
							});
						});
					}
				}
				return new Promise((resolve) => {
					resolve(this.formData.contents);
				});
			},
			submit() {
				const db = Firebase.firestore();
				this.uploadContentsImage().then((contents) => {
					this.formData.contents = contents;
						this.setThumbnail().then((url) => {
							// console.log(url);
								this.setData().then((submitData) => {
									const data = submitData;
									data.thumbnail = url;
									if (this.mode === 'create') {
										const id = db.collection(this.flag).doc().id
										db.collection(this.flag).doc(id).set(data).then(() => {
											// const data = Object.assign({ id: id }, submitData);
											console.log("Document successfully written!");
											this.$router.push({ params: { popFlag: '' } });
										}).catch((error) => {
											console.error("Error writing document: ", error);
											alert('실패');
										});	
									} else {
										db.collection(this.flag).doc(this.data.id).update(data).then(() => {
											console.log("Document successfully update!");
											this.$router.push({ params: { popFlag: '' } });
										}).catch((error) => {
											console.error("Error writing document: ", error);
											alert('실패');
										});
									}
								});
						});
				});
			},
		},
		mounted() {
			this.init = true;
		},
	};
</script>

<style lang="scss" scoped>
	@import 'vue-material/dist/vue-material.min.css';
	@import 'vue-material/dist/theme/default.css';
	.edit{
		width: 1200px;
		margin: 60px auto;
		.thumbnailImage{
			width: 120px;
			height: 100px;
		}
		.submit-btn{
			padding: 0;
			margin: 20px 10px 0 0;
			float: right;
			&::after{
				clear: both;
				content: '';
				display: block;
			}
		}
	}
</style>