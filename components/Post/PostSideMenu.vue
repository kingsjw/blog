<template>
  <div class="postSideMenu">
    <ul>
      <li v-for="({ id, text, depth, path }, index) in toc" :key="index">
        <nuxt-link
          :to="{ path, hash: id }"
          :class="[
            `depth-${depth}`,
            currentlyActiveTocId === id ? 'active' : '',
          ]"
          >{{ text }}</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    toc: {
      type: Array,
      default: () => [],
    },
    currentlyActiveTocId: {
      type: String,
      default: () => '',
    },
  },
};
</script>

<style lang="scss" scoped>
.postSideMenu {
  width: 300px;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 100px;
  overflow-y: auto;
  padding: 10px 0;
  @include mobile {
    display: none;
  }
  @include tablet {
    display: none;
  }
  .depth-2 {
    font-weight: 500;
  }
  @for $i from 3 through 6 {
    .depth-#{$i} {
      margin-left: calc(#{$i - 1} * 10px);
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  li {
    color: #2c3e50;
    list-style: none;
    font-size: 13px;
    line-height: 18px;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  .active {
    color: #816bff;
  }
}
</style>