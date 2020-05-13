<template>
	<div class="list" :class="$store.state.common.isMobile ? 'mobile' : ''">
		<div
			:style="list && list.imgArr && list.imgArr[0] ? { backgroundImage: `url(${list.imgArr[0].url})`} : {}"
			class="thumbnail"></div>
			<div>
				<div class="info">
					<div class="title">{{list.title}}</div>
					<div class="writer">작성자: {{list.writer}}</div>
				</div>
			</div>
	</div>
</template>

<script>

	export default {
		props: ['list'],
  };
</script>

<style lang="scss" scoped>
	.list{
		width: calc((100% / 3) - 22px);
		height: 520px;
    margin-left: 30px;
		border: 1px solid #eee;
		border-radius: 2px;
		overflow: hidden;
		cursor: pointer;
		transition: .3s ease;
		box-shadow: 0 1px 11px 0 rgba(0,0,0,.1);
    &:nth-child(n + 4) {
      margin-top: 30px;
    }
    &:nth-child(3n + 1){
      margin-left: 0;
    }
		&:not(.mobile):hover{
			transform: scale(1.02);
		}
    &.mobile{
      width: 100%;
      height: 342px;
      margin-left: 0;
      margin-top: 20px;
      &:first-of-type{
        margin-top: 0;
      }
      .thumbnail{
        height: 70%;
      }
    }
		.thumbnail{
			width: 100%;
			height: 82%;
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
		}
		.info{
			padding: 32px 16px;
			color: #494c62;
			line-height: 20px;
			.title{
				font-size: 16px;
				font-weight: 600;
			}
			.writer{
				font-size: 10px;
			}
		}
	}
</style>
