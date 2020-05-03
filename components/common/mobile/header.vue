<template>
  <div class="mobileHeader page-container md-layout-column">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">kingsjw blog</span>
      <div class="md-toolbar-section-end">
      </div>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation" md-swipeable class="menu">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">my topic</span>
      </md-toolbar>

      <md-list>
        <md-list-item @click="$router.push('/profile'), showNavigation = !showNavigation">
          <md-icon>account_box</md-icon>
          <span class="md-list-item-text">Profile</span>
        </md-list-item>

        <md-list-item @click="$router.push('/travel'), showNavigation = !showNavigation">
          <md-icon>card_travel</md-icon>
          <span class="md-list-item-text">Travel</span>
        </md-list-item>
      </md-list>
    </md-drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showNavigation: false,
        showSidepanel: false
      }
    },
  };
</script>

<style lang="scss">
  .mobileHeader{
    .md-overlay {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 5;
      overflow: hidden;
      background: rgba(0,0,0,.6);
      transition: .35s cubic-bezier(.4,0,.2,1);
      transition-property: opacity;
      will-change: opacity;
    }

    .md-list-item-content {
      min-height: 48px;
      padding: 4px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: padding .4s cubic-bezier(.25,.8,.25,1);
      will-change: padding;
    }
    .md-button, .md-button-clean {
      margin: 0;
      padding: 0;
      display: inline-block;
      position: relative;
      overflow: hidden;
      outline: none;
      background: transparent;
      border: 0;
      border-radius: 0;
      transition: .4s cubic-bezier(.4,0,.2,1);
      font-family: inherit;
      line-height: normal;
      text-decoration: none;
      vertical-align: top;
      white-space: nowrap;
    }
  }
</style>

<style lang="scss" scoped>
  @import 'vue-material/dist/vue-material.min.css';
  @import 'vue-material/dist/theme/default.css';
  .md-drawer {
    position: fixed;
  }
  .md-toolbar.md-theme-default.md-primary {
    background-color: #816bff;
  }
  .page-container {
    overflow: hidden;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }
</style>
