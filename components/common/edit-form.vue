<template>
	<div class="edit" v-if="init">
		<input type="text" class="title" v-model="title" placeholder="제목을 입력해주세요.">
		<vue-editor v-model="contents"/>
		<input type="file" @change="saveThumbnail" ref="thumbnail">
		<md-button @click="submit" class="md-raised md-primary submit-btn">저장</md-button>
		<!-- {{contents}} -->
	</div>
</template>

<script>
	import Firebase from 'firebase';

	export default {
		props: ['flag'],
		data() {
			return {
				title: '',
				contents: '',
				thumbnail: null,
				init: false,
			};
		},
		methods: {
			saveThumbnail() {
				this.thumbnail = this.$refs.thumbnail.files[0];
			},
			putImage() {
				if (!this.thumbnail.name) {
					alert('이미지 입력해야지');
				}
				const storageRef = Firebase.storage().ref();
				return storageRef.child(`images/${this.thumbnail.name}`).put(this.thumbnail);
			},
			setData() {
				let submitData = {};
				if (!this.title || !this.contents || !this.thumbnail) {
					alert('다 입력해야지..');
					return;
				} else {
					submitData = {
						title: this.title,
						contents: this.contents,
						thumbnail: this.thumbnail,
						writer: 'Master',
						date: new Date()
					};
				}
				return new Promise((resolve) => {
					resolve(submitData);
				});
			},
			getImage() {
				const storageRef = Firebase.storage().ref();
				return storageRef.child(`images/${this.thumbnail.name}`).getDownloadURL();
			},
			uploadContentsImage() {
				const storageRef = Firebase.storage().ref();
				const contentsData = this.contents;
				const regExp = /<(\img)([^>]*)>/gi;
				let img = contentsData.match(regExp);
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
							this.contents = this.contents.replace(img[x], `<img src="${url}">`);
						});
					});
				}
				return new Promise((resolve) => {
					resolve(this.contents);
				});
			},
			submit() {
				const db = Firebase.firestore();
				this.uploadContentsImage().then((contents) => {
					this.contents = contents;
					this.putImage().then(() => {
						this.getImage().then((url) => {
							this.setData().then((submitData) => {
								const id = db.collection(this.flag).doc().id;
								const data = submitData;
								data.thumbnail = url;
								db.collection(this.flag).doc(id).set(data).then(() => {
									// const data = Object.assign({ id: id }, submitData);
									console.log("Document successfully written!");
									this.$router.push({ params: { popFlag: '' } });
								}).catch((error) => {
									console.error("Error writing document: ", error);
									alert('실패');
								});
							});
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
		.title{
			width: calc(100% - 24px);
			margin-bottom: 20px;
			border: 1px solid #ccc;
			height: 33px;
			font-size: 13px;
			padding: 0 12px;
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