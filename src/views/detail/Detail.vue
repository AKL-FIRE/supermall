<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="detailTopImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
  </div>
</template>

<script>

  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";

  import {getDetail, Goods, Shop} from "../../network/detail";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo
    },
    data() {
      return {
        iid: "",
        detailTopImages: [],
        goods: {},
        shop: {}
      }
    },
    created() {
      // 1.保存传入的iid
      this.iid = this.$route.params.iid;
      // 2.获取数据
      getDetail(this.iid).then(res => {
        // 1.获取顶部轮播数据
        const data = res.result;
        this.detailTopImages = data.itemInfo.topImages;
        // 2.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
        // 3.创建店铺信息
        this.shop = new Shop(data.shopInfo);
      })
    }
  }
</script>

<style scoped>

</style>
