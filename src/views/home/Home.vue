<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <h2>购物街</h2>
      </template>
    </nav-bar>
    <my-swiper :banners="banners"></my-swiper>
  </div>
</template>

<script>

  import NavBar from "../../components/common/navbar/NavBar";
  import MySwiper from "./childComps/MySwiper";
  import {getHomeMultidata} from "../../network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      MySwiper
    },
    data() {
      return {
        banners: [],
        recommends: [],
      }
    },
    created() {
      // 1. 请求数据
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

</style>
