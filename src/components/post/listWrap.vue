<template>
	<div
    class="postWrap"
    :class="[$store.state.device.isMobile ? 'mobile' : '', pageName]"
  >
		<div class="wrap">
			<h2><p class="title">{{ utils.postPageTitle(pageName) }}</p></h2>
      <div v-if="loading" class="itemWrap">
        <listLoading
          v-for="x in 3" :key="x"
        ></listLoading>
      </div>
			<div v-else class="itemWrap">
				<list
					v-for="(val, index) in listing"
					:key="index"
					:list="val"
					:class="val.type"
					@click.native="selectView(val.id)"
				></list>
			</div>
		</div>
	</div>
</template>

<script>
	import list from './list.vue';
  import listLoading from '../loading/list.vue';
  import utils from '../../utils/index.js'

	export default {
    props: ['listData', 'loading'],
    data() {
      return {
        utils,
      };
    },
		components: {
			list,
			listLoading,
		},
    computed: {
      pageName() {
        return (this.$route && this.$route.path) ? this.$route.path.split('/')[1] : '';
      },
		  listing() {
		    let data = [];
		    if (this.listData && this.listData.length > 0) {
		      data = this.listData;
        } else {
		      data = this.$store.state.post && this.$store.state.post[this.pageName];
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
      if (this.$store.state.post[this.pageName] && this.$store.state.post[this.pageName].length <= 0) {
			  this.$emit('getData');
      }
		},
	};
</script>

<style lang="scss" scoped>
	@import './listWrap.scss';
</style>
