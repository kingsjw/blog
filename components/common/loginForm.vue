<template>
<div class="pop" @click.stop="$emit('close-pop')">
    <div
        @click.stop
        class="loginForm">
        <div class="input-wrap">
        <p>관리자만 로그인할 수 있는거 알죠???</p>
        <legend>
            <label>id</label>
            <input v-bind:value="id" v-on:input="id = $event.target.value">
        </legend>
        <legend>
            <label>password</label>
            <input v-bind:value="pw" v-on:input="pw = $event.target.value" type="password">
        </legend>
        </div>
        <div class="btn-wrap">
        <md-button
            @click="login"
            class="md-raised submit">로그인</md-button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'loginForm',
  data() {
    return {
      id: '',
      pw: '',
    };
  },
  methods: {
    login() {
      this.$emit('login', { userId: this.id, userPw: this.pw });
    },
  },
};
</script>

<style lang="scss" scoped>
  .loginForm{
    width: 515px;
    background-color: #fff;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 30px 50px 50px 50px;
    z-index: 9;
    .btn-wrap {
      display: flex;
      justify-content: flex-end;
    }
  }
  .pop{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.3);
  }
</style>