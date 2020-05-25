<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @title-click="titleClick" ref="navbar"></detail-nav-bar>
    <scroll class="content"
            ref="scroll"
            @scrolling="contentScroll"
            :probe-type="3">
      <detail-swiper :top-images="detailTopImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @image-load="imageLoad"></detail-goods-info>
      <detail-param-info :param-info="paramInfo" ref="params"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @add-cart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>

  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";
  import DetailBottomBar from "./childComps/DetailBottomBar";

  import Scroll from "../../components/common/scroll/Scroll";
  import GoodsList from "../../components/content/goods/GoodsList";

  import {getDetail, getRecommend, Goods, Shop, GoodsParam} from "../../network/detail";
  import {debounce} from "../../common/utils/utils";
  import {itemListenerMixin, backTopMixIn} from "../../common/mixin/mixin";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar
    },
    mixins: [itemListenerMixin, backTopMixIn],
    data() {
      return {
        iid: "",
        detailTopImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopY: [],
        getThemeTopY: null
      }
    },
    created() {
      // 1.保存传入的iid
      this.iid = this.$route.params.iid;
      // 2.获取详情页数据
      getDetail(this.iid).then(res => {
        // 1.获取顶部轮播数据
        const data = res.result;
        this.detailTopImages = data.itemInfo.topImages;
        // 2.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
        // 3.创建店铺信息
        this.shop = new Shop(data.shopInfo);
        // 4.保存商品的详情数据
        this.detailInfo = data.detailInfo;
        // 5.获取参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
        // 6.获取评论信息
        if(data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }

        // this.$nextTick(() => {
        //   // 根据最新的数据，对应的DOM是已经被渲染出来的
        //   // 但是图片依然是没有加载完（目前获取到的offsetTop不包含其中的图片）
        //   this.themeTopY = [];
        //   this.themeTopY.push(0);
        //   this.themeTopY.push(this.$refs.params.$el.offsetTop);
        //   this.themeTopY.push(this.$refs.comment.$el.offsetTop);
        //   this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
        //   console.log(this.themeTopY);
        // })
      });
      // 3.请求推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list;
      })
      // 4. 给getThemeTopY赋值(对给this.themeTopY赋值的操作进行防抖)
      this.getThemeTopY = debounce(() => {
        this.themeTopY = [];
        this.themeTopY.push(0);
        this.themeTopY.push(this.$refs.params.$el.offsetTop);
        this.themeTopY.push(this.$refs.comment.$el.offsetTop);
        this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
        this.themeTopY = this.themeTopY.map((value, index) => index === 0 ? value : value - 44);
      }, 100)
    },
    methods: {
      imageLoad() {
        // this.$refs.scroll.refresh();
        this.newRefresh();
        this.getThemeTopY();
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 200);
      },
      contentScroll(pos) {
        // 1.获取y值
        const positionY = -pos.y;
        // 2.与主题中的值进行对比
        if(positionY < this.themeTopY[1]) {
          this.$refs.navbar.currentIndex = 0;
        } else if(positionY < this.themeTopY[2]) {
          this.$refs.navbar.currentIndex = 1;
        } else if(positionY < this.themeTopY[3]) {
          this.$refs.navbar.currentIndex = 2;
        } else {
          this.$refs.navbar.currentIndex = 3;
        }
        // 3.backTop组件的显示
        this.listenShowBackTop(pos);
      },
      addToCart() {
        // 1.获取购物车需要展示的信息
        const product = {}
        product.image = this.detailTopImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;
        // 2.将商品添加到购物车里
        this.$store.dispatch('addCart', product);
      }
    },
    mounted() {
    },
    destroyed() {
      this.$bus.$off('itemImageLoad', this.itemImageListener);
    }

  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content {
    height: calc(100% - 44px - 49px);
  }
</style>
