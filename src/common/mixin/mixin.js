import {debounce} from "../utils/utils";
import BackTop from "../../components/content/backTop/BackTop";
import {BACK_POSITION} from "../const/const";

export const itemListenerMixin = {
  data() {
    return {
      itemImageListener: null,
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100);
    this.itemImageListener = () => {
      this.newRefresh();
    }
    this.$bus.$on('itemImageLoad', this.itemImageListener);
  }
}

export const backTopMixIn = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    listenShowBackTop(pos) {
      this.isShowBackTop = -pos.y > BACK_POSITION;
    }
  }
}
