<template>
	<div class="list" :class="$store.state.device.isMobile ? 'mobile' : ''">
		<div class="thumbnail">
      <div class="moveItem"></div>
    </div>
    <div>
      <div class="info">
        <div class="title">
          <div class="moveItem"></div>
        </div>
        <div class="writer">
          <div class="moveItem"></div>
        </div>
      </div>
    </div>
	</div>
</template>

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
      background-color: #f8f8f8;
      overflow: hidden;
      position: relative;
		}
		.info{
			padding: 32px 16px;
			color: #494c62;
			line-height: 20px;
			.title, .writer{
        position: relative;
        background-color: #f8f8f8;
        overflow: hidden;
			}
      .title{
        width: 100%;
        height: 20px;
      }
      .writer{
        width: 40%;
        height: 15px;
        margin-top: 5px;
      }
		}
    .moveItem{
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(to left, rgba(238, 238, 238, 0), #fff, rgba(255, 255, 255, 0));
      opacity: 0;
      display: block;
      position: absolute;
      animation: moveleft 1s infinite linear;
    }
    @keyframes moveleft {
      from {
        opacity: 0;
        transform: translateX(-200%);
      }
      10%{
        opacity: 1;
      }
      60%{ opacity: 1; }
      to {
        opacity: 0;
        transform: translateX(200%);
      }
    }
	}
</style>
