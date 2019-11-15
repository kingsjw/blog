<template>
	<div class="edit" v-if="init">
		<editForm
			:formData="formData"
		/>
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
				init: false,
        formImage: [],
			};
		},
		methods: {
			async replaceContentsImage() {
				const contentsData = this.formData.contents;
				const regExp = /<(\img)([^>]*)>/gi;
				let img = contentsData.match(regExp);
				let replaceContentsData = '';
        let cdnUrl = [];
        if (img && img.length > 0) {
          const temp = document.createElement('div');
          for (let x = 0; x < img.length; x += 1) {
            temp.innerHTML += img[x];
          }
          const imageHtml = temp.getElementsByTagName('img');
          const imageData = [...imageHtml].map(v => v.currentSrc);
          for (let x = 0; x < imageData.length; x += 1) {
            if (this.isBase64(imageData[x])) {
              const file = dataURLtoFile(imageData[x], Date.now());
              await this.uploadImage(file, file.name);
              const url = await this.getImageUrl(file.name);
              replaceContentsData = contentsData.replace(img[x], `<img src="${url}">`);
              cdnUrl.push({ name: file.name, url: url});
              // await this.removeImage(this.data.imgArr);
              this.formImage.push(url);
            } else {
              replaceContentsData = contentsData.replace(img[x], `<img src="${imageData[x]}">`);
              this.formImage.push(imageData[x]);
            }
          }
        } else {
          replaceContentsData = this.formData.contents;
        }
        function dataURLtoFile(dataurl, filename) {
          const arr = dataurl.split(',');
          const mime = arr[0].match(/:(.*?);/)[1];
          const bstr = atob(arr[1]);
          let n = bstr.length, u8arr = new Uint8Array(n);
          while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
          }
          return new File([u8arr], filename, {type: mime});
        }
        return new Promise(resolve => {
          resolve({ data: replaceContentsData, cdnUrl });
        });
			},
      getImageUrl(fileName) {
        const storeageRef = Firebase.storage().ref();
        return storeageRef.child(`images/${this.flag}/${fileName}`).getDownloadURL();
      },
      uploadImage(file, fileName) {
			  const storeageRef = Firebase.storage().ref();
			  return storeageRef.child(`images/${this.flag}/${fileName}`).put(file);
      },
      isBase64(str) {
        const exp = /data:image\/([a-zA-Z]*);base64,([^\"]*)/g;
        return exp.test(str);
      },
      async removeImage(fileName) {
        const storageRef = Firebase.storage().ref();
        storageRef.child(`images/${this.flag}/${fileName}`) ? await storageRef.child(`images/${this.flag}/${fileName}`).delete() : '';
      },
      async submit() {
			  const db = Firebase.firestore();
			  if (this.formData.title || this.formData.contents) {
          const id = db.collection(this.flag).doc().id;
          const submitData = {
            title: this.formData.title,
            contents: '',
            imgArr: [],
            writer: 'Master',
            date: new Date()
          };
          const rs = await this.replaceContentsImage();
          console.log(rs);
          submitData.contents = rs.data;
          if (this.mode === 'create') {
            if (rs.cdnUrl && rs.cdnUrl.length > 0) {
              submitData.imgArr = rs.cdnUrl;
            }
            // console.log(submitData);
            db.collection(this.flag).doc(id).set(submitData)
              .catch((e) => {
                console.log(e);
              });
            this.$router.push({params: {popFlag: ''}});
          } else {
            submitData.imgArr = rs.cdnUrl && rs.cdnUrl.length > 0 ? rs.cdnUrl : this.data.imgArr;
            //update
            if (this.formImage && this.formImage.length > 0) {
              for (let x = 0; x < this.data.imgArr.length; x += 1) {
                for (let y = 0; y < this.formImage.length; y += 1) {
                  if (this.data.imgArr[x].url !== this.formImage[y]) {
                    this.removeImage(this.data.imgArr[x].name);
                    submitData.imgArr = submitData.imgArr.filter(val => val.name !== this.data.imgArr[x].name);
                  }
                }
              }
            } else {
              for (let x = 0; x < this.data.imgArr.length; x += 1) {
                this.removeImage(this.data.imgArr[x].name);
              }
              submitData.imgArr = [];
            }
            console.log(submitData);
            db.collection(this.flag).doc(this.data.id).update(submitData).then(() => {
              console.log("Document successfully update!");
              this.$router.push({params: {popFlag: ''}});
            }).catch((error) => {
              console.error("Error writing document: ", error);
              alert('실패');
            });
          }

        } else {
			    alert('다 입력해야지 ㅡㅡ');
        }
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
