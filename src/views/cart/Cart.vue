<template>
  <div class="cart">
    <nav-bar>
      <template #center class="nav-bar">
        <h2 class="nav-bar-title">购物车({{cartLength}})</h2>
      </template>
    </nav-bar>
    <cart-list></cart-list>
  </div>
</template>

<script>

  import NavBar from "../../components/common/navbar/NavBar";
  import CartList from "./childComps/CartList";

  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList
    },
    computed: {
      // ...mapGetters({
      //   length: 'cartLength'
      // }),
      ...mapGetters(['cartLength'])
    }
  }
</script>

<style scoped>
  .cart {
    height: 100vh;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: white;
  }
</style>
