<template>
	<div class="travel">
		<createForm
			v-if="$route.params.popFlag === 'edit'"
			:flag="'travel'"
		></createForm>
		<listView
			v-else-if="$route.params.popFlag === 'view'"
			:data="list"
			:flag="'travel'"
		/>
		<travelList
			v-else
			:listData="list"
			@getData="getTravelList"
			@selectView="selectView"
		/>
		<edit
			v-if="!$route.params.popFlag && $store.state.user.isLogin"
			@click.native="edit()"
		/>
	</div>
</template>

<script>
	import Firebase from 'firebase';
	import travelList from '../../components/travel/travel.vue';
	import createForm from '../../components/common/formControl.vue';
	import listView from '../../components/common/list-view.vue';
	import edit from '../../components/common/edit-btn.vue';

	export default {
		components: {
			travelList,
			listView,
			edit,
			createForm,
		},
		data() {
			return {
				list: [],
        // test: [
        //   {
        //     name: '러블리 파우더 룸',
        //     url: 'https://cdn.bringprice.com/image/fas/jejuAir/powderRoom.png',
        //   },
        //   {
        //     name: '안락한 리빙 룸',
        //     url: 'https://cdn.bringprice.com/image/fas/jejuAir/livingRoom.png',
        //   },
        //   {
        //     name: 'FOOD ZONE',
        //     url: 'https://cdn.bringprice.com/image/fas/jejuAir/foodZone.png',
        //   },
        //   {
        //     name: '가족을 위한 프라이빗 부스',
        //     url: 'https://cdn.bringprice.com/image/fas/jejuAir/privateBooth.png',
        //   },
        // ],
        // test2: [
        //   {
        //     name: '러블리 파우더 룸',
        //     url: 'https://cdn.bringprice.com/image/fas/jejuAir/powderRoom.png',
        //   },
        //   {
        //     name: '안락한 리빙 룸',
        //     url: 'https://cdn.bringprice.com/image/fas/jejuAir/livingRoom.jpg',
        //   },
        //   {
        //     name: 'FOOD ZONE',
        //     url: 'https://cdn.bringprice.com/image/fas/jejuAir/foodZone.png',
        //   },
        //   {
        //     name: '가족을 위한 프라이빗 부스',
        //     url: 'https://cdn.bringprice.com/image/fas/jejuAir/privateBooth.png',
        //   },
        // ],
			};
		},
		methods: {
			getTravelList() {
				const db = Firebase.firestore();
				db.collection('travel').orderBy("date", "desc").get().then((querySnapshot) => {
					this.list = [];
					querySnapshot.forEach((doc) => {
						const data = Object.assign({ id: doc.id }, doc.data());
						this.list.push(data);
					});
				});
			},
			selectView(id) {
				this.$router.push({ params: { popFlag: 'view' }, query: { id } });
			},
			edit() {
				this.$router.push({ params: { popFlag: 'edit' } });
			},
      // loadImage(url) {
			//   return new Promise((resolve, reject) => {
      //     let img = new Image();
      //     img.src = url;
      //     img.onload = () => {
      //       resolve(img);
      //     };
      //     img.onerror = (e) => {
      //       reject(e);
      //     };
      //     return img;
      //   });
      // },
      // async imgRun() {
			//   for await (const url of this.map(img => img.height, this.map(({url}) => this.loadImage(url), this.test2))) {
			//     console.log(url);
      //   }
      // },
      // * map(f, iter) {
      //   for (const v of iter) {
      //     yield v instanceof Promise ? v.then(f) : f(v);
      //   }
      // },
		},
    mounted() {
		  // this.loadImage(this.test[0].url).then((img) => {
		  //   console.log(img);
      // });
      // this.imgRun();
    },
  };
</script>

<style lang="scss" scoped>
</style>
