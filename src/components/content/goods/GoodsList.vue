<template>
  <div class="goods">
    <goods-list-item v-for="(item, index) in goods"
                     :goods-item="item"
                     :key="index">
    </goods-list-item>
  </div>
</template>

<script>

  import GoodsListItem from "./GoodsListItem";

  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  /*flex方法布局*/
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
</style>
