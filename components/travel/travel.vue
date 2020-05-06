<template>
	<div
    v-if="init"
    class="travelList"
  >
		<div class="wrap" :class="$store.state.common.isMobile ? 'mobile' : ''">
			<p class="title">Travel is refresh</p>
			<div
				v-if="$route.params.popFlag !== 'edit'"
				class="list-wrap"
			>
				<list
					v-for="(val, index) in travelList"
					:key="index"
					:list="val"
					@click.native="selectView(val.id)"
				></list>
			</div>
		</div>
	</div>
</template>

<script>
	import list from './list.vue';

	export default {
		props: ['listData'],
		components: {
			list,
		},
    data() {
		  return {
		    init: false,
      };
    },
    computed: {
		  travelList() {
		    let data = [];
		    if (this.listData && this.listData.length > 0) {
		      data = this.listData;
        } else {
		      data = this.$store.state.travel && this.$store.state.travel.list;
        }
		    return data;
      },
    },
		methods: {
			selectView(id) {
				this.$emit('selectView', id);
			},
		},
		mounted() {
      if (this.$store.state.travel.list && this.$store.state.travel.list.length <= 0) {
			  this.$emit('getData');
      }
			this.$nextTick(() => {
			  this.init = true;
      });
		},
	};
</script>

<style lang="scss" scoped>
	.travelList{
		width: 100%;
		margin-bottom: 60px;
		.wrap{
			width: 1200px;
			margin: 0 auto;
      &.mobile{
        width: 100%;
        margin: 0;
        padding: 0 20px;
        .list-wrap{
          display: block;
          flex-basis: initial;
          flex-wrap: initial;
          margin-top: 20px;
        }
        .title{
          margin-top: 10px;
        }
      }
			.title{
				font-weight: bold;
				font-size: 20px;
				margin-top: 40px;
				color: #494c62;
			}
			.list-wrap{
				width: 100%;
				display: flex;
				flex-basis: 33.33%;
				flex-wrap: wrap;
        margin-top: 10px;
			}
		}
	}
</style>
