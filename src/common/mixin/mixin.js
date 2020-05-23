import {debounce} from "../utils/utils";

export const itemListenerMixin = {
  data() {
    return {
      itemImageListener: null
    }
  },
  mounted() {
    let newRefresh = debounce(this.$refs.scroll.refresh, 100);
    this.itemImageListener = () => {
      newRefresh();
    }
    this.$bus.$on('itemImageLoad', this.itemImageListener);
    console.log('我是混入中的内容');
  }
}
