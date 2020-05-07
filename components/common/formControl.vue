<template>
	<div class="edit" v-if="init" :class="$store.state.common.isMobile ? 'mobile' : ''">
		<editForm
			:formData="formData"
		/>
		<button @click="submit" class="md-button success submit-btn">
      <div>{{ mode === 'create' ? '저장' : '수정'}}</div>
    </button>
    <div
      v-if="loading"
      class="pop"
    >
      <div class="loading"></div>
    </div>
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
        loading: false,
				formData,
				mode: this.data ? 'edit' : 'create',
				init: false,
        formImage: [],
			};
		},
		methods: {
			async replaceContentsImage() {
				let replaceContentsData = this.formData.contents;
				const regExp = /<(\img)([^>]*)>/gi;
				let img = replaceContentsData.match(regExp);
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
              cdnUrl.push({ name: file.name, url: url});
              // console.log(replaceContentsData.indexOf(img[x]));
              replaceContentsData = replaceContentsData.replace(imageData[x], url);
              // console.log(replaceContentsData.match(regExp));
              // await this.removeImage(this.data.imgArr);
              this.formImage.push(url);
            } else {
              replaceContentsData = replaceContentsData.replace(imageData[x], imageData[x]);
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
          this.loading = true;
          const id = db.collection(this.flag).doc().id;
          const submitData = {
            title: this.formData.title,
            contents: '',
            imgArr: [],
            writer: 'kingsjw7',
            date: new Date()
          };
          const rs = await this.replaceContentsImage();
          // console.log(rs);
          submitData.contents = rs.data;
          if (this.mode === 'create') {
            if (rs.cdnUrl && rs.cdnUrl.length > 0) {
              submitData.imgArr = rs.cdnUrl;
            }
            db.collection(this.flag).doc(id).set(submitData).then(() => {
              console.log("Document successfully write!");
            }).catch((e) => {
                console.log(e);
              });
            this.$router.push({params: {popFlag: ''}});
          } else {
            submitData.imgArr = rs.cdnUrl && rs.cdnUrl.length > 0 ? rs.cdnUrl : this.data.imgArr;
            //update
            // console.log(this.formImage);
            if (this.formImage && this.formImage.length > 0) {
              const removeList = [];
              const imgArr = [];
              this.data.imgArr.forEach((obj) => {
                if (this.formImage.indexOf(obj.url) === -1) {
                  removeList.push(obj);
                } else {
                  imgArr.push(obj);
                }
              });
              // console.log(removeList);
              // console.log(imgArr);
              for (let x = 0; x < removeList.length; x += 1) {
                this.removeImage(removeList[x].name);
              }
              submitData.imgArr = imgArr;
            } else {
              for (let x = 0; x < this.data.imgArr.length; x += 1) {
                this.removeImage(this.data.imgArr[x].name);
              }
              submitData.imgArr = [];
            }
            // console.log(submitData);
            db.collection(this.flag).doc(this.data.id).update(submitData).then(() => {
              console.log("Document successfully update!");
              this.$router.push({params: {popFlag: ''}});
            }).catch((error) => {
              console.error("Error writing document: ", error);
              alert('실패');
            });
          }
          this.loading = false;
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
  .pop{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.7);
    .loading {
      width: 50px;
      height: 50px;
      margin: auto;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      &:before {
        content: '';
        width: 50px;
        height: 5px;
        background: #000;
        opacity: 0.1;
        position: absolute;
        top: 59px;
        left: 0;
        border-radius: 50%;
        animation: shadow .5s linear infinite;
      }
      &:after {
        content: '';
        width: 50px;
        height: 50px;
        background: #ff5252;
        animation: animate .5s linear infinite;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 3px;
      }
    }

    @keyframes animate {
      17% {
        border-bottom-right-radius: 3px;
      }
      25% {
        transform: translateY(9px) rotate(22.5deg);
      }
      50% {
        transform: translateY(18px) scale(1, .9) rotate(45deg);
        border-bottom-right-radius: 40px;
      }
      75% {
        transform: translateY(9px) rotate(67.5deg);
      }
      100% {
        transform: translateY(0) rotate(90deg);
      }
    }


    @keyframes shadow {
      0%, 100% {
        transform: scale(1, 1);
      }
      50% {
        transform: scale(1.2, 1);
      }
    }
  }
	.edit{
		width: 1200px;
		margin: 60px auto;
    &.mobile{
      width: 100%;
      margin-top: 20px;
      padding: 0 20px;
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
