<template>
<div class="pop" @click.stop="$emit('close-pop')">
  <div
    @click.stop
    id="loginWrapper"
  >
    <div
      class="login"
      @keyup.enter="login"
    >
      <div class="login">
        <p class="title">로그인</p>
        <p class="title-sub">관리자만 로그인할 수 있는거 알죠???</p>
        <div
          class="inputWrapper">
          <p class="input-title input-email">이메일주소</p>
          <input type="text" class="email" v-bind:value="id" v-on:input="id = $event.target.value">
          <p class="input-title input-password">비밀번호</p>
          <input v-bind:value="pw" v-on:input="pw = $event.target.value" type="password" class="password">
        </div>
        <div class="btn-wrap">
          <button
            @click="login"
            :class="id && pw ? 'active' : ''"
            class="submit"
          >로그인</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
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
  #loginWrapper{
    width: 515px;
    background-color: #fff;
    padding: 50px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #f1f1f1;
    border-radius: 6px;
    a{
      color: inherit;
      text-decoration: none;
    }
    .title{
      font-size: 20px;
      line-height: 29px;
      font-weight: bold;
    }
    .title-sub{
      font-size: 14px;
      line-height: 20px;
      color: #7f828b;
    }
    .inputWrapper{
      width: 100%;
      margin-top: 30px;
      .input-title{
        font-size: 14px;
        color: #000;
      }
      .email, .password{
        transition: 0.3s ease;
        width: 100%;
        height: 36px;
        border: none;
        border-bottom: 2px solid #e9e9e9;
      }
      input:focus{
        border-bottom: 2px solid #ff5252;
      }
      .input-password{
        margin-top: 16px;
      }
    }
    .btn-wrap{
      margin-top: 30px;
      position: relative;
      button{
        width: 100%;
        height: 53px;
        border-radius: 2px;
        transition: .3s ease;
      }
      button.active{
        background-color: #ff5252;
        font-weight: bold;
        color: #fff;
        cursor: pointer;
      }
      .submit{
        position: relative;
        font-size: 16px;
        cursor: default;
        color: #fff;
        background-color: #e9e9e9;
      }
    }
  }
  .pop{
    z-index: 9;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.3);
  }
</style>
