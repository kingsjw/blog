<template>
  <div
    :class="{
      scrollDown,
      scrollDownTop,
      scrollWeb,
    }"
  >
    <Header></Header>
    <nuxt/>
		<loginForm
			v-if="openPop"
			@close-pop="openPop = false"
			@login="login"
		/>
    <btn
			v-if="authLoad && !$store.state.user.isLogin"
      :type="'login'"
			@click.native="openPop = true"
		/>
  </div>
</template>

<script>
  import Firebase from 'firebase';
  import Header from '../components/common/header.vue';
  import btn from '../components/common/generalBtn.vue';
  import loginForm from '../components/common/loginForm.vue';

  export default {
    components: {
			Header,
			loginForm,
      btn,
    },
    data() {
      return {
        authLoad: false,
				userData: null,
				openPop: false,
        scrollDown: false,
        scrollDownTop: false,
        scrollWeb: false,
        timeout: '',
        isMobile: false,
      };
    },
    methods: {
      bodyScroll() {
        const scrollY = (window.pageYOffset || document.documentElement.scrollTop);
        if (this.lastScroll < scrollY) {
          this.scrollDown = true;
          this.scrollDownTop = true;
          if (scrollY < 30) {
            this.scrollDownTop = false;
          }
        } else {
          this.scrollDown = false;
          this.scrollDownTop = false;
        }
        if (scrollY <= 0) {
          this.scrollDown = false;
          this.scrollDownTop = false;
          this.scrollWeb = false;
        } else {
          this.scrollWeb = true;
        }
        if (scrollY + window.outerHeight > document.body.clientHeight - 50) {
          this.scrollDown = false;
        }
        this.lastScroll = scrollY;
      },
			login(user) {
				if (user.userId && user.userPw) {
					Firebase.auth().setPersistence(Firebase.auth.Auth.Persistence.SESSION).then(() => {
						return Firebase.auth().signInWithEmailAndPassword(user.userId, user.userPw).then(() => {
              this.openPop = false;
              this.$store.commit('user/loginCheck', true);
            });
					}).catch((error) => {
						// console.log(error.code);
						switch (error.code) {
							case 'auth/invalid-email' :
								alert('아이디가 이메일이여야 하는거 잊었나??');
								break;
							case 'auth/project-not-found' :
								alert('아이디 확인하시죠');
								break;
							case 'auth/wrong-password' :
								alert('비번 확인하시죠');
								break;
							default :
								alert('로그인 실패');
								break;
						}
					});
				}
			},
			getUserSession(user) {
				this.userData = JSON.parse(window.sessionStorage.getItem(`firebase:authUser:${user.l}:${user.m}`));
				this.$store.commit('user/loginCheck', this.userData);
				// console.log(this.userData);
			},
      resizeWindow(e) {
        if (this.timeout) {
          clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
          if (e.currentTarget.innerWidth <= 768) {
            this.isMobile = true;
            this.timeout = '';
          } else {
            this.isMobile = false;
          }
          this.$store.commit('common/changeDevice', this.isMobile);
        }, 300);
      },
    },
    mounted() {
      window.addEventListener('scroll', this.bodyScroll);
      if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
      ) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
      this.$store.commit('common/changeDevice', this.isMobile);
      Firebase.auth().onAuthStateChanged((user) => {
				this.authLoad = true;
				if (user) {
					this.getUserSession(user);
				}
    	});
      this.$nextTick(() => {
        window.addEventListener('resize', this.resizeWindow);
      });
    },
  }
</script>

<style lang="scss">
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  input{
    &:focus{
      outline: none;
    }
  }
  .md-button{
    min-width: 88px;
    height: 36px;
    color: #000;
    transition: .4s cubic-bezier(.4,0,.2,1);
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    user-select: none;
    border-radius: 2px;
    font-size: 14px;
    margin: 6px 8px;
    font-weight: 500;
    text-transform: uppercase;
    vertical-align: top;
    white-space: nowrap;
    outline: none;
    &:hover{
      background-color: #e1e1e1;
    }
    &.success{
      color: #fff;
      background-color: #448aff;
      &:hover{
        background-color: rgba(69, 116, 255, 0.8);
      }
    }
  }

  .fade-enter-active, .fade-leave-active{
    transition: .3s ease;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }

  .slide-left-enter-active, .slide-left-leave-active{
    transition: transform .4s cubic-bezier(.25,.8,.25,1);
    will-change: transform,box-shadow;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
  }
  .slide-left-enter, .slide-left-leave-to
    /* .slide-leave-active below version 2.1.8 */ {
    transform: translate3D(-100%,0,0);
  }
</style>

