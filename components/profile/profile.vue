<template>
	<div class="profile">
    <div class="intro">
      <div class="profile-img"></div>
      <div class="info-wrap">
        <div class="name">Seo Jae Woo</div>
        <div class="info-text">hi! im software engineer.</div>
      </div>
    </div>
    <div class="project">
    </div>
	</div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
	.profile{
		width: 1200px;
    height: calc(100vh - 80px);
		margin: 0 auto;
    position: relative;
    .intro{
      width: 300px;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      box-shadow: 2px 0 2px -2px rgba(0,0,0,0.2);
      .profile-img{
        width: 65px;
        height: 65px;
        background-color: #ccc;
        border-radius: 50px;
        margin: 15px auto;
      }
      .info-wrap{
        text-align: center;
        .name{
          font-weight: 500;
          font-size: 16px;
        }
        .info-text{
          font-size: 12px;
          color: #939499;
        }
      }
    }
    .project{
      float: right;
    }
    &::after{
      clear: both;
      content: '';
      display: block;
    }
	}
</style>
