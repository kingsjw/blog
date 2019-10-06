<template>
	<header>
		<div class="wrap">
			<div class="logo">
				<a href="/">
					kingsjw
					<p>software enginer</p>
				</a>
			</div>
			<div class="menu">
				<ul>
					<li><button>Profile</button></li>
					<li><button>Project</button></li>
					<li><button>Movie</button></li>
					<li><button>Drama</button></li>
					<li><button>Travel</button></li>
				</ul>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
	header{
		width: 100%;	
		height: 80px;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: rgb(238, 238, 238) 0px 1px 0px 0px;
		.wrap{
			width: 1200px;
			height: 100%;
			padding: 0 60px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.logo{
				font-weight: bold;
				font-size: 22px;
				a{
					display: block;
					text-decoration: none;
					color: inherit;
					p{
						margin: 2px 0 0 0;
						line-height: normal;
						font-size: 10px;
						font-weight: normal;
						color: #aaa;
					}
				}
			}
			.menu ul{
				display: flex;
				align-items: center;
				li{
					font-size: 16px;
					margin-left: 27px;
					&:first-of-type{
						margin-left: 0;
					}
					> button{
						font-weight: 800;
						white-space: nowrap;
						height: 36px;
						&:hover{
							color: #816bff;
						}
					}
				}
			}
		}
	}
</style>