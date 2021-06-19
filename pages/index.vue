<template>
  <div class="main" :class="$store.state.device.isMobile ? 'mobile' : ''">
    <div class="searchWrap">
      <div class="search">
        <div class="title">개발자 서재우</div>
        <div class="inputWrap">
          <input
            type="text"
            placeholder="어떤 글을 찾으시나요?"
            v-bind:value="search"
            v-on:input="search = $event.target.value"
          />
        </div>
      </div>
    </div>
    <div class="contents">
      <div class="searchKeyword">
        <div>
          <h2 class="bold">
            <span>{{ search ? `"${search}"` : 'All' }}</span>
            <transition name="fade">
              <span v-if="!searchedPost.length"> - no result</span>
            </transition>
          </h2>
        </div>
      </div>
      <ListWrap :posts="search ? searchedPost : posts"></ListWrap>
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
      posts: posts ? [...posts].filter((v) => v.length).flat() : [],
    };
  },
  data() {
    return {
      search: '',
    };
  },
  computed: {
    searchedPost() {
      const searchText = this.search.trim().toLowerCase();
      return this.posts.filter(({ title, description }) => {
        return [title, description].some(
          (v) => v && v.toLowerCase().includes(searchText)
        );
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  &.mobile {
    padding: 0 20px;
    .searchWrap {
      padding: 40px 0;
      .search {
        width: 100%;
      }
    }
  }
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
  .contents {
    @include contentsWidth;
    margin: 20px auto 0;
    .searchKeyword {
      padding: 20px 0 0;
      .bold {
        font-size: 18px;
        font-weight: bold;
      }
      .no {
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
}
</style>

