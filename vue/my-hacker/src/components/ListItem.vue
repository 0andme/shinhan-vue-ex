<template>
  <ul class="list">
    <li v-for="news in listDate" :key="news.id">
      <b>{{ news.time_ago }}</b>
      <span> by {{ news.user }}</span>
      <br />
      <a :href="news.url"
        >{{ news.title }} <i>({{ news.comments_count }})</i></a
      >
    </li>
  </ul>
</template>

<script>
export default {
  props: ["listDate"],
};
</script>

<style></style>
