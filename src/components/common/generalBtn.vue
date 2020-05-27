<template>
	<button id="loginBtn" :class="imageName"></button>
</template>

<script>
	export default {
	  props: ['type'],
		data() {
			return {
				init: false,
			};
		},
    computed: {
	    imageName() {
	      const imageType = this.type;
	      let name = '';
	      switch (imageType) {
          case 'login' :
            name = 'loginIcon';
            break;
          case 'edit' :
            name = 'editIcon';
            break;
          default :
            name = '';
            break;
        }
	      return name;
      },
    },
		mounted() {
			this.init = true;
		},
	};
</script>

<style lang="scss" scoped>
	#loginBtn{
		position: fixed;
    bottom: 24px;
    right: 24px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
    background-color: #ff5252;
    transition: .4s cubic-bezier(.4,0,.2,1);
    background-repeat: no-repeat;
    background-position: center;
    outline: none;
    margin: 6px 8px;
    &:hover{
      background-color: rgb(235, 79, 79);
    }
    &.editIcon{
      background-size: 24px;
      background-image: url(~assets/img/icons/edit.svg);
    }
    &.loginIcon{
      background-size: 24px;
      background-image: url(~assets/img/icons/https.svg);
    }
	}
</style>
