<template>
  <div>
    <h1>Sales Product({{ cartList.length }}) - {{ totalPrice }}원</h1>
    <div>
      <h3>구입목록</h3>
      <ul>
        <li v-for="(item, i) in cartList" :key="item.title">
          <strong>{{ item.title }}</strong>
          <span>{{ item.price }}원</span>
          <a href="" @click.prevent="delItem(i)">삭제</a>
          <hr style="border: 1px dashed" />
        </li>
      </ul>
    </div>
    <product-list
      :chips-data="chips"
      like="10"
      @add-item="addItem"
    ></product-list>
  </div>
</template>

<script>
import {Fragment} from "vue";
import ProductList from "./components/ProductList.vue";
export default {
  components: {ProductList, Fragment},
  data() {
    return {
      cartList: [],
      chips: [
        {
          img: `mango.jpg`,
          title: `자연그대로 망고칩`,
          desc: `단맛이 그대로 살아있는 망고칩입니다.`,
          price: 2500,
        },
        {
          img: `apple.jpg`,
          title: `천연 오가닉 사과칩`,
          desc: `깨끗한 재료를 엄선하여 자연을 그대로 담았습니다.`,
          price: 2000,
        },
        {
          img: `jujube.jpg`,
          title: `아이깨끗 대추칩`,
          desc: `새콤함이 살아있는 반건조 대추그대로.`,
          price: 3000,
        },
      ],
    };
  },
  computed: {
    totalPrice() {
      return this.cartList.reduce((a, b) => a + b.price, 0);
    },
  },
  methods: {
    addItem(index) {
      this.cartList.push(this.chips[index]);
    },
    delItem(index) {
      this.cartList.splice(index, 1);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
body {
  padding: 30px;
}
.list {
  margin: 20px 0;
  display: flex;
}
.list > li {
  width: 200px;
  margin: 5px;
  border: 1px solid gray;
  padding: 10px;
}
.list > li > * {
  display: block;
}
.list > li > img {
  width: 200px;
  margin-bottom: 20px;
}
.list > li > strong {
  font-size: 20px;
  color: #666;
  margin-bottom: 10px;
}
.list > li > span {
  margin-bottom: 10px;
}
</style>
