<template>
  <div>
    <Header></Header>
    <nuxt/>
		<loginForm
			v-if="openPop"
			@close-pop="openPop = false"
			@login="login"
		/>
    <loginBtn
			v-if="authLoad && !$store.state.user.isLogin"
			@click.native="openPop = true"
		/>
  </div>
</template>

<script>
  import Firebase from 'firebase';
  import Header from '../components/common/header.vue';
  import loginBtn from '../components/common/loginBtn.vue';
  import loginForm from '../components/common/loginForm.vue';

  export default {
    components: {
			Header,
			loginForm,
      loginBtn,
    },
    data() {
      return {
        authLoad: false,
				userData: null,
				openPop: false,
      };
    },
    methods: {
			login(user) {
				this.openPop = false;
				if (user.userId && user.userPw) {
					Firebase.auth().setPersistence(Firebase.auth.Auth.Persistence.SESSION).then(() => {
						this.$store.commit('user/loginCheck', true);
						return Firebase.auth().signInWithEmailAndPassword(user.userId, user.userPw);
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
    },
    mounted() {
      Firebase.auth().onAuthStateChanged((user) => {
				this.authLoad = true;
				if (user) {
					this.getUserSession(user);
				}
    	});
    },
  }
</script>

<style>
</style>

