<template>
  <div class="main" :class="$store.state.device.isMobile ? 'mobile' : ''">
    <div class="wrap">
      <div class="searchWrap">
        <div class="search">
          <div class="title">개발자 서재우</div>
          <div class="inputWrap">
            <input type="text" placeholder="Search Topic" />
          </div>
        </div>
      </div>
      <div class="listWrap">
        <div class="title">
          <div>
            <h2>
              <span class="bold"
                >{{ search ? `"${search}"` : 'All' }} Topic</span
              >
            </h2>
            <transition name="fade">
              <span v-if="search" class="no">- no result</span>
            </transition>
          </div>
        </div>
        <ListWrap :posts="posts"></ListWrap>
      </div>
    </div>
  </div>
</template>

<script>
import ListWrap from '../components/Post/PostListWrap.vue';

export default {
  components: {
    ListWrap,
  },
  async asyncData({ $content }) {
    const categories = ['movie', 'travel', 'tech'];
    const posts = await Promise.all(
      categories.map(
        async (category) => await $content(category, { deep: true }).fetch()
      )
    );
    return {
      posts: [...posts].filter((v) => v.length).flat(),
    };
  },
  data() {
    return {
      search: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  &.mobile {
    .wrap {
      padding: 0 20px 120px 20px;
      .searchWrap {
        padding: 40px 20px;
        .search {
          width: 100%;
        }
      }
      .listWrap {
        width: 100%;
      }
    }
  }
  .wrap {
    width: 100%;
    padding-bottom: 120px;
    .searchWrap {
      width: 100%;
      padding: 60px 20px;
      border-bottom: 1px solid #e9e9e9;
      .search {
        width: 1200px;
        margin: 0 auto;
        .title {
          font-size: 20px;
          font-weight: bold;
          padding-bottom: 10px;
        }
        .inputWrap {
          width: 100%;
          height: 76px;
          padding-left: 20px;
          border-radius: 2px;
          box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
          background-color: #fff;
          border: 1px solid #e5e5e5;
          font-size: 20px;
          input {
            width: 100%;
            height: 100%;
            border: none;
          }
        }
      }
    }
    .listWrap {
      width: 1200px;
      margin: 30px auto 0 auto;
      .itemLink {
        display: block;
      }
      .title {
        .bold {
          font-size: 18px;
          font-weight: bold;
        }
        .no {
          font-size: 16px;
          font-weight: 500;
        }
      }
      .itemWrap {
        display: flex;
        flex-basis: 33.33%;
        flex-wrap: wrap;
        margin-top: 20px;
      }
    }
  }
}
</style>

