<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      showImage() {
        return this.goodsItem.image || this.goodsItem.show.img;
      }
    },
    methods: {
      imageLoad() {
        // 事件总线
        this.$bus.$emit('itemImageLoad');
        // if(this.$route.path.indexOf('/home')) {
        //   this.$bus.$emit('home-item-image-load');
        // } else if (this.$route.path.indexOf('/detail')) {
        //   this.$bus.$emit('detail-item-image-load')
        // }
      },
      itemClick() {
        this.$router.push('/detail/' + this.goodsItem.iid);
      }
    }
  }
</script>

<style scoped>
  /*!*浮动方法布局*!*/
  /*.goods-item {*/
  /*  width: 50%;*/
  /*  float: left;*/
  /*  padding: 5px;*/
  /*  font-size: 14px;*/
  /*}*/
  /*.goods-item img {*/
  /*  width: 100%;*/
  /*}*/
  /*.goods-item p {*/
  /*  overflow: hidden;*/
  /*  text-overflow: ellipsis;*/
  /*  white-space: nowrap;*/
  /*  padding: 0 3px;*/
  /*  margin-bottom: 3px;*/
  /*}*/
  /*.goods-item .price {*/
  /*  color: var(--color-high-text);*/
  /*  margin-left: 30%;*/
  /*}*/
  /*.goods-item .collect {*/
  /*  margin-left: 5px;*/
  /*}*/
  /*.goods-item .collect::before {*/
  /*  content: "";*/
  /*  width: 14px;*/
  /*  height: 14px;*/
  /*  background: url("~assets/img/common/collect.svg") no-repeat;*/
  /*  !*background-color: pink;*!*/
  /*  background-size: 14px 14px;*/
  /*  display: inline-block;*/
  /*}*/

  /*flex方法布局*/
  .goods-item {
    padding-bottom: 40px;
    position: relative;

    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
