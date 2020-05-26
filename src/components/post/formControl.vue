<template>
	<div class="edit" v-if="init" :class="$store.state.device.isMobile ? 'mobile' : ''">
		<editForm
			:formData="formData"
		/>
    <div class="mainImageSet">
      <div v-if="data && data.mainImage && data.mainImage.url">
        <div v-if="mainImageFixFlag">
          메인 이미지(수정): <input type="file" @change="onFileChange">
          <span @click="mainImageFixFlag = false" class="cancelBtn">취소</span>
        </div>
        <div v-else class="mainImage" :style="{ backgroundImage: `url(${data.mainImage.url})` }">
          <span @click="mainImageFixFlag = true" class="fixBtn">수정</span>
        </div>
      </div>
      <div v-else>
        메인 이미지:
        <input type="file" @change="onFileChange">
      </div>
    </div>
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
        mainImageFixFlag: false,
        mainImageFile: '',
			};
		},
		methods: {
      onFileChange(e) {
        const files = e.target.files || e.dataTransfer.files;
        this.mainImageFile =  files && files.length ? files[0] : '';
      },
			async replaceContentsImage() {
				let replaceContentsData = this.formData.contents;
				const imageRegExp = /<(\img)([^>]*)>/gi;
				let img = replaceContentsData.match(imageRegExp);
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
              // console.log(replaceContentsData.match(imageRegExp));
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
            date: new Date(),
          };
          if (this.mainImageFile) {
            const imageName = Date.now();
            await this.uploadImage(this.mainImageFile, imageName);
            submitData.mainImage = {
              name: imageName,
              url: await this.getImageUrl(imageName),
            };
          }
          const replaceImage = await this.replaceContentsImage();
          // console.log(replaceImage);
          submitData.contents = replaceImage.data;
          if (this.mode === 'create') {
            if (replaceImage.cdnUrl && replaceImage.cdnUrl.length > 0) {
              submitData.imgArr = replaceImage.cdnUrl;
            }
            // console.log(submitData);
            db.collection(this.flag).doc(id).set(submitData).then(() => {
              console.log("Document successfully write!");
            }).catch((e) => {
                console.log(e);
            });
            this.$emit('getData');
            setTimeout(() => {
              this.$router.push(`/${this.flag}`);
            }, 300);
          } else {
            submitData.imgArr = replaceImage.cdnUrl && replaceImage.cdnUrl.length > 0 ? replaceImage.cdnUrl : this.data.imgArr;
            //update
            // console.log(this.formImage);
            if (this.mainImageFile && this.data && this.data.mainImage) {
              this.removeImage(this.data.mainImage.name);
            }
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
              this.$emit('getData');
              setTimeout(() => {
                this.$router.push(`/${this.flag}`);
              }, 300);
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
  .mainImageSet{
    .cancelBtn{
      cursor: pointer;
    }
    .mainImage{
      width: 300px;
      height: 200px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      .fixBtn{
        display: none;
        cursor: pointer;
        color: #fff;
        z-index: 1;
        text-decoration: underline;
      }
      &::after{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0;
        background-color: rgba(0, 0, 0, 0.3);
        transition: .3s ease;
      }
      &:hover{
        .fixBtn{
          display: block;
        }
        &::after{
          opacity: 1;
        }
      }
    }
  }
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
