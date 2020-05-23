<template>
  <div class="shop-info" v-if="Object.keys(shop).length !== 0">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{shop.sells}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shop.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" class="row">
            <td>{{item.name}}</td>
            <td :class="{'great-score': item.isBetter}" class="score">{{item.score}}</td>
            <td>
              <span :class="{'great-text': item.isBetter}" class="text">{{item.isBetter ? '高' : '低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .shop-info {
    padding: 15px;
  }
  .shop-top {
    height: 50px;
    position: relative;
  }
  .shop-top img {
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 30px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .shop-top span {
    line-height: 50px;
    position: absolute;
    left: 60px;
    top: 0;
  }
  .shop-middle {
    margin-top: 30px;
    height: 70px;
    display: flex;
  }
  .shop-middle-item {
    width: 50%;
    height: 100%;
  }
  .shop-middle-item div {
    flex: 1;
  }
  .shop-middle-left {
    display: flex;
  }
  .shop-middle-right table {
    display: flex;
    font-size: 14px;
    flex-direction: column;
  }
  .shop-middle-left div {
    flex: 1;
    justify-content: space-evenly;
  }
  .info-sells,
  .info-goods {
    height: 100%;
    position: relative;
  }
  .sells-count,
  .goods-count {
    position: absolute;
    font-size: 16px;
    font-weight: 700;
    left: 50%;
    transform: translateX(-50%);
    top: 25%;
  }
  .sells-text,
  .goods-text {
    position: absolute;
    font-size: 14px;
    left: 50%;
    transform: translateX(-50%);
    top: 60%;
    white-space: nowrap;
  }
  .great-score {
    color: orangered!important;
  }
  .score {
    color: forestgreen;
  }
  .great-text {
    width: 14px;
    color: #fff;
    background-color: orangered!important;
  }
  .text {
    color: #fff;
    background-color: forestgreen;
  }
  .row {
    margin-bottom: 10px;
    display: flex;
    text-align: center;
  }
  .row td {
    flex: 1;
  }
  .shop-bottom {
    margin-top: 24px;
  }
  .enter-shop {
    height: 35px;
    width: 120px;
    background-color: #e5e5e5;
    margin: 0 auto;
    text-align: center;
    line-height: 35px;
    border-radius: 10px;
  }
</style>
