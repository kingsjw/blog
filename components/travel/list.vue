<template>
	<div class="list">
		<div
			:style="{ backgroundImage: `url('${list.thumbnail}')` }"
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
		border: 1px solid #eee;
		border-radius: 2px;
		overflow: hidden;
		cursor: pointer;
		transition: .3s ease;
		box-shadow: 0 1px 11px 0 rgba(0,0,0,.1);
		&:hover{
			transform: scale(1.02);
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