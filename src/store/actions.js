import {ADD_COUNTER, ADD_TO_CART} from "./mutation-types";

export default {
  addCart(context, payload) {
    // payload新添加的商品
    let product = context.state.cartList.find(item => item.iid === payload.iid);
    if(product) {
      context.commit(ADD_COUNTER, product);
    } else {
      payload.count = 1;
      context.commit(ADD_TO_CART, payload);
    }
  }
}
