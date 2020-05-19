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
    <tab-control :titles="['流行', '新款', '精选']"
                 class="tab-control"
                 @tab-click="tabClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>

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
  import GoodsList from "../../components/content/goods/GoodsList";

  import {getHomeMultidata, getHomeGoods} from "../../network/home";

  export default {
    name: "Home",
    components: {
      MySwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop' : {page: 0, list: []},
          'new' : {page: 0, list: []},
          'sell' : {page: 0, list: []},
        },
        currentType: 'pop'
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list;
      }
    },
    created() {
      // 1. 请求数据
      this.getHomeMultidata();
      // 2.请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods: {
      /*
      * 事件监听相关事件
      * */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
      },
      /*
      * 网络请求相关
      * */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        });
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          // console.log(res);
          // 注意这里不能直接赋值，否则后面页码的数据会被覆盖
          // this.goods[type].list = res.data.list;
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page++;
        })
      }
    }
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
