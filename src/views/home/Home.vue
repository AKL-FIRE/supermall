<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <h2>购物街</h2>
      </template>
    </nav-bar>
    <tab-control :titles="['流行', '新款', '精选']"
                 @tab-click="tabClick"
                 ref="tabControl1"
                 class="tab-control" v-show="isTabFixed"></tab-control>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scrolling="contentScroll"
            :pull-up-load="true"
            @pulling-up="loadMore">
      <my-swiper :banners="banners" @swiper-image-load="swiperImageLoad"></my-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行', '新款', '精选']"
                   @tab-click="tabClick"
                   ref="tabControl2"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!-- 在我们需要监听一个组件的原生事件时，必须给对应的事件加上.native修饰符，才能监听 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>

  import MySwiper from "./childComps/MySwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import NavBar from "../../components/common/navbar/NavBar";
  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";
  import Scroll from "../../components/common/scroll/Scroll";

  import {getHomeMultidata, getHomeGoods} from "../../network/home";
  import {itemListenerMixin, backTopMixIn} from "../../common/mixin/mixin";
  import {BACK_POSITION} from "../../common/const/const";

  export default {
    name: "Home",
    components: {
      MySwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
    },
    mixins: [itemListenerMixin, backTopMixIn],
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop' : {page: 0, list: []},
          'new' : {page: 0, list: []},
          'sell' : {page: 0, list: []},
        },
        currentType: 'pop',
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0,
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list;
      }
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0);
      this.$refs.scroll.refresh();
    },
    deactivated() {
      // 1.保存y值
      this.saveY = this.$refs.scroll.getScrollY();
      // 2.取消全局事件的监听
      this.$bus.$off('itemImageLoad', this.itemImageListener);
    },
    created() {
      // 1. 请求数据
      this.getHomeMultidata();
      // 2.请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');

    },
    mounted() {
      // // 3.监听item中图片加载完成
      // const refresh = debounce(this.$refs.scroll.refresh, 500);
      //
      // this.itemImageListener = () => {refresh();}
      // this.$bus.$on('itemImageLoad', this.itemImageListener);

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
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      contentScroll(pos) {
        // 1.判断BackTop是否显示
        this.listenShowBackTop(pos);
        // 2. 决定tabControl是否吸顶(position: fixed)
        this.isTabFixed = -pos.y > this.tabOffsetTop;
      },
      loadMore() {
        this.getHomeGoods(this.currentType);
      },
      swiperImageLoad() {
        // 获取tabControl的offsetTop
        // 所有的组件都有一个属性$el,用来获取组件中的元素
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
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
          // 完成上拉加载更多
          this.$refs.scroll.finishPullingUp();
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
    /*padding-top: 44px;*/
    /*padding-bottom: 49px;*/
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }
  .content {
    /*height: 300px;*/
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-control {
    position: relative;
    z-index: 9;
  }
</style>
