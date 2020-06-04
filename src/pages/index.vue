<template>
  <div class="main" :class="$store.state.device.isMobile ? 'mobile' : ''">
    <div class="wrap">
      <div class="searchWrap">
        <div class="search">
          <div class="title">개발자 서재우</div>
          <div class="inputWrap">
            <input type="text" placeholder="Search Topic" v-bind:value="search" v-on:input="search = $event.target.value">
          </div>
        </div>
      </div>
      <div class="listWrap">
        <div class="title">
          <div>
            <span class="bold">{{ search ? `"${search}"` : 'All' }} Topic</span>
            <transition name='fade'>
              <span v-if="search && (searchPostData && 0 >= searchPostData.length)" class="no">- no result</span>
            </transition>
          </div>
        </div>
        <transition-group
          v-if="allPostData && allPostData.length > 0"
          name='fade'
          tag='div'
          class='itemWrap'
        >
          <list
            v-for="(val, index) in search && (searchPostData && searchPostData.length > 0) ? searchPostData : allPostData"
            :key="`${val}${index}`"
            :list="val"
            :class="val.type"
            @click.native="selectView(val.type, val.id)"
          ></list>
        </transition-group>
        <div
          v-else
          class="itemWrap"
        >
          <listLoading
            v-for="x in 6" :key="x"
          ></listLoading>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase';
import list from '../components/post/list.vue';
import listLoading from '../components/loading/list.vue';

export default {
  components: {
    list,
    listLoading,
  },
  data() {
    const postStoreData =  this.$store.state.post;
    const necessaryCollectionList = Object.keys(postStoreData).filter((key) => postStoreData[key] && postStoreData[key].length <= 0);
    return {
      postStoreData,
      search: '',
      postList: [],
      necessaryCollectionList,
    };
  },
  computed: {
    allPostData() {
      let allData = [];
      if (this.listData && this.listData.length > 0) {
        allData = this.listData;
      } else {
        allData = allData.concat(this.postStoreData['tech'], this.postStoreData['travel'], this.postStoreData['movie']);
      }
      return allData;
    },
    searchPostData() {
      const searchText = this.search.trim();
      const data = this.allPostData.filter((v) => {
        const title = v.title.toLowerCase();
        const contentsText = v.contents.replace(/(<([^>]+)>)/ig, '').toLowerCase();
        return title.indexOf(searchText) >= 0 || contentsText.indexOf(searchText) >= 0;
      });
      return data;
    },
  },
  methods: {
    getAllPostData() {
      const db = Firebase.firestore();
      const collectionList = this.necessaryCollectionList;
      const groupQueryObj = collectionList.map((v) => {
        return { name: v, query: db.collection(v) };
      });
      // console.log(groupQueryObj);
      Object.values(groupQueryObj).forEach((obj, index) => {
        obj.query.orderBy('title', 'asc').get().then((querySnapshot) => {
          const list = [];
          const commitData = {};
          querySnapshot.forEach((doc) => {
              const data = Object.assign({ id: doc.id, type: obj.name }, doc.data());
              list.push(data);
              this.postList.push(data);
              this.$store.commit('postView/saveData', data);
          });
          console.log(list);
          commitData[obj.name] = [...list];
          this.$store.commit('post/saveData', commitData);
        });
      });
      // console.log(this.$store.state.postView);
    },
    selectView(type, id) {
      this.$router.push({ path: `/${type}/view`, query: { id } });
    },
  },
  mounted() {
    if (this.necessaryCollectionList && this.necessaryCollectionList.length > 0) {
      this.getAllPostData();
    }
  },
};
</script>

<style lang="scss" scoped>
  .main{
    &.mobile{
      .wrap{
        padding: 0 20px 120px 20px;
        .searchWrap{
          padding: 40px 20px;
          .search{
            width: 100%;
          }
        }
        .listWrap{
          width: 100%;
        }
      }
    }
    .wrap{
      width: 100%;
      padding-bottom: 120px;
      .searchWrap{
        width: 100%;
        padding: 60px 20px;
        border-bottom: 1px solid #e9e9e9;
        .search{
          width: 1200px;
          margin: 0 auto;
          .title{
            font-size: 20px;
            font-weight: bold;
            padding-bottom: 10px;
          }
          .inputWrap{
            width: 100%;
            height: 76px;
            padding-left: 20px;
            border-radius: 2px;
            box-shadow: 0 2px 6px 0 rgba(0,0,0,.1);
            background-color: #fff;
            border: 1px solid #e5e5e5;
            font-size: 20px;
            input{
              width: 100%;
              height: 100%;
              border: none;
            }
          }
        }
      }
      .listWrap{
        width: 1200px;
        margin: 30px auto 0 auto;
        .title{
          .bold{
            font-size: 18px;
            font-weight: bold;
          }
          .no{
            font-size: 16px;
            font-weight: 500;
          }
        }
        .itemWrap{
          display: flex;
          flex-basis: 33.33%;
          flex-wrap: wrap;
          margin-top: 20px;
        }
      }
    }
  }
</style>

