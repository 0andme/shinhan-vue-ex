<template>
  <ul class="list">
    <li v-for="news in listDate" :key="news.id">
      <b>{{ news.time_ago }}</b>
      <!-- 현재 route.name이 news일 때 -->

      <template v-if="$route.name === 'news'">
        <span>
          by
          <router-link :to="'/user/' + news.user">{{ news.user }}</router-link>
        </span>
        <br />
        <a :href="news.url"
          >{{ news.title }} <i>({{ news.comments_count }})</i>
        </a>
      </template>
      <!-- 현재 route.name이 new가 아닐 때 -->
      <template v-else>
        <span> by {{ news.user }}</span>
        <br />
        <a :href="news.url"
          >{{ news.title }} <i>({{ news.comments_count }})</i>
        </a>
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["listDate"],
};
</script>

<style></style>
