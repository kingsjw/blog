<template>
	<div
    class="travelList"
    :class="$store.state.common.isMobile ? 'mobile' : ''"
  >
		<div class="wrap">
			<p class="title">Travel is refresh</p>
      <div v-if="loading" class="itemWrap">
        <listLoading
          v-for="x in 3" :key="x"
        ></listLoading>
      </div>
			<div v-else class="itemWrap">
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
	import list from '../common/list.vue';
	import listLoading from '../loading/list.vue';

	export default {
		props: ['listData', 'loading'],
		components: {
			list,
			listLoading,
		},
    computed: {
		  travelList() {
		    let data = [];
		    if (this.listData && this.listData.length > 0) {
		      data = this.listData;
        } else {
		      data = this.$store.state.post && this.$store.state.post.travel;
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
      if (this.$store.state.post.travel && this.$store.state.post.travel.length <= 0) {
			  this.$emit('getData');
      }
		},
	};
</script>

<style lang="scss" scoped>
	.travelList{
		width: 100%;
    margin-top: 40px;
		margin-bottom: 60px;
    &.mobile{
      margin-top: 30px;
      .wrap{
        width: 100%;
        margin: 0;
        padding: 0 20px;
        .itemWrap{
          display: block;
          flex-basis: initial;
          flex-wrap: initial;
          margin-top: 20px;
        }
        .title{
          margin-top: 10px;
        }
      }
    }
		.wrap{
			width: 1200px;
			margin: 0 auto;
			.title{
				font-weight: bold;
				font-size: 20px;
				color: #494c62;
			}
			.itemWrap{
				width: 100%;
				display: flex;
				flex-basis: 33.33%;
				flex-wrap: wrap;
        margin-top: 20px;
			}
		}
	}
</style>
