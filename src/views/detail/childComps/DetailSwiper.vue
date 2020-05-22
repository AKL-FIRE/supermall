<template>
  <div class="detail-swiper">
    <swiper :options="swiperOptions" >
      <swiper-slide v-for="(item, index) in topImages"
                    class="detail-swiper-slide">
        <img :src="item" alt="">
      </swiper-slide>
      <div class="swiper-pagination my-swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

  import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'

  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperSlide,
      directive
    },
    props: {
      topImages: Array
    },
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
          // 循环
          loop: true,
          // 自动播放
          autoplay: {
            delay: 1500,
            stopOnLastSlide: false,
            disableOnInteraction: false
          }
        },
      }
    }
  }
</script>

<style scoped>
  @import "../../../../node_modules/swiper/css/swiper.css";
  .detail-swiper {
    height: 300px;
    overflow: hidden;
  }
  .detail-swiper-slide img {
    width: 100%;
  }
  .my-swiper-pagination {
    top: 270px!important;
  }
</style>
