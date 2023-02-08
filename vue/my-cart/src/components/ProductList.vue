<template>
  <ul class="list">
    <li v-for="(chip, i) in chipsData" :key="chip.title">
      <img :src="require(`@/assets/${chip.img}`)" />
      <strong>{{ chip.title }}</strong>
      <span>{{ chip.desc }}</span>
      <b>{{ chip.price.toLocaleString() }}원</b>
      <button @click="addItem(i)">구입하기</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    chipsData: Array,
  },
  methods: {
    addItem(price) {
      this.$emit("add-item", Number(price));
    },
  },
};
</script>
