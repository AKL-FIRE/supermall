<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="info-header clear-fix">
      <div class="header-title">用户评论</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="data">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" v-for="(item, index) in commentInfo.images" :key="index" alt="">
      </div>
    </div>
  </div>
</template>

<script>

  import {formatDate} from "../../../common/utils/utils";

  export default {
    name: "DetailCommentInfo",
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showDate(value) {
        // 1.将时间戳转换成Date对象
        const date = new Date(value * 1000);
        // 2.将date进行格式化
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
      }
    }
  }
</script>

<style scoped>
  .comment-info {
    padding: 15px;
  }
  .info-header {
    border-bottom: 3px solid #ccc;
    padding-bottom: 15px;
  }
  .header-more {
    float: right;
  }
  .header-title {
    float: left;
  }
  .info-user {
    margin-top: 10px;
    font-size: 14px;
  }
  .info-user img {
    height: 40px;
    vertical-align: bottom;
  }
  .info-user span {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    margin-left: 15px;
    color: black;
  }
  .info-detail {
    margin-top: 10px;
    font-size: 14px;
  }
  .info-other {
    margin-top: 10px;
    color: #a29e9e;
  }
  .info-other span:first-child {
    margin-right: 5px;
  }
  .info-imgs {
    margin-top: 10px;
    height: 100px;
  }
  .info-imgs img {
    height: 100%;
    margin-right: 10px;
  }
</style>
