<template>
  <div>
    <h2>news</h2>
    <ul class="list">
      <li v-for="news in list" :key="news.id">
        <b>{{ news.time_ago }}</b>
        <span> by {{ news.user }}</span
        ><br />
        <a :href="news.url"
          >{{ news.title }} <i>({{ news.comments_count }})</i></a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    axios.get("https://api.hnpwa.com/v0/news/1.json").then((res) => {
      this.list = res.data;
    });
  },
};
</script>

<style></style>
