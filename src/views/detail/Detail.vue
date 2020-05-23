<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="detailTopImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @image-load="imageLoad"></detail-goods-info>
      <detail-param-info :param-info="paramInfo"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
    </scroll>
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

  import Scroll from "../../components/common/scroll/Scroll";

  import {getDetail, Goods, Shop, GoodsParam} from "../../network/detail";

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
      DetailCommentInfo
    },
    data() {
      return {
        iid: "",
        detailTopImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {}
      }
    },
    created() {
      // 1.保存传入的iid
      this.iid = this.$route.params.iid;
      // 2.获取数据
      getDetail(this.iid).then(res => {
        console.log(res);
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
      })
    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh();
      }
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
    height: calc(100% - 44px);
  }
</style>
