<template>
	<div>
		<input type="text" class="title" v-model="formData.title" placeholder="제목을 입력해주세요.">
		<vue-editor v-model="formData.contents"/>
	</div>
</template>

<script>
	export default {
		props: ['formData'],
	};
</script>

<style lang="scss" scoped>
  .mobile{
    .title{
      width: 100%;
    }
  }
	.title{
		width: calc(100% - 24px);
		margin-bottom: 20px;
		border: 1px solid #ccc;
		height: 33px;
		font-size: 13px;
		padding: 0 12px;
	}
</style>
