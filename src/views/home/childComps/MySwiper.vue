<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="my-swiper">
    <swiper-slide v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" @load="imageLoad">
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>

  import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'

  export default {
    name: "MySwiper",
    props: {
      banners: Array
    },
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
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
        isImageLoadEmit: false
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      // console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    },
    methods: {
      imageLoad() {
        if(!this.isImageLoadEmit) {
          this.$emit('swiper-image-load');
          this.isImageLoadEmit = true;
        }
      }
    }
  }
</script>

<style scoped>
  @import "../../../../node_modules/swiper/css/swiper.css";

  .my-swiper img {
    width: 100%;
  }
</style>
