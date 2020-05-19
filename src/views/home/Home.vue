<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <h2>购物街</h2>
      </template>
    </nav-bar>
    <my-swiper :banners="banners"></my-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行', '新款', '精选']" class="tab-control"></tab-control>
    <ul>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
      <li>adasd</li>
    </ul>
  </div>
</template>

<script>

  import MySwiper from "./childComps/MySwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import NavBar from "../../components/common/navbar/NavBar";
  import TabControl from "../../components/content/tabControl/TabControl";

  import {getHomeMultidata} from "../../network/home";

  export default {
    name: "Home",
    components: {
      MySwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl
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
  #home {
    padding-top: 44px;
    padding-bottom: 49px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
