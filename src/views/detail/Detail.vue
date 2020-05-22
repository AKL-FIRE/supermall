<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="detailTopImages"></detail-swiper>
  </div>
</template>

<script>

  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";

  import {getDetail} from "../../network/detail";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper
    },
    data() {
      return {
        iid: "",
        detailTopImages: []
      }
    },
    created() {
      // 1.保存传入的iid
      this.iid = this.$route.params.iid;
      // 2.获取数据
      getDetail(this.iid).then(res => {
        // 1.获取顶部轮播数据
        this.detailTopImages = res.result.itemInfo.topImages;
      })
    }
  }
</script>

<style scoped>

</style>
