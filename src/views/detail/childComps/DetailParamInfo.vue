<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table v-for="(table, index) in paramInfo.sizes"
           class="info-size"
           :key="index">
      <tr v-for="(tr, index2) in table" :key="index2">
        <td v-for="(td, index3) in tr" :key="index3">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.infos" :key="index">
        <td class="info-param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParamInfo",
    props: {
      paramInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .param-info {
    padding: 15px;
    border-top: 3px solid #ccc;
    font-size: 14px;
  }
  .info-size {
    width: 100%;
    /*background-color: pink;*/
    border-bottom: 3px solid #ccc;
    border-collapse: collapse;
  }
  .info-size td {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }
  .info-param {
    /*margin-top: 10px;*/
    border-collapse: collapse;
  }
  .info-param td {
    border-bottom: 1px solid #ccc;
    height: 48px;
  }
  .info-param-key {
    white-space: nowrap;
  }
  .param-value {
    color: var(--color-high-text);
    padding: 10px 0 10px 70px;
  }
  .info-img img {
    width: 100%;
  }
</style>
