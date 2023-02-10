<template>
  <div>
    <div class="user_profile">
      <span>by </span>
      <strong>
        <router-link :to="`/user/${askItem.user}`">{{
          askItem.user
        }}</router-link>
      </strong>
      <b> - {{ askItem.time_ago }}</b>
    </div>
    <h2>{{ askItem.title }}</h2>
    <p v-html="askItem.content"></p>
    <hr />
    <!-- 댓글 리스트 -->
    <ul class="comments">
      <li v-for="comment in askItem.comments" :key="comment.id">
        <i class="fas fa-arrow-right"></i>
        <div v-html="comment.content"></div>
        <!-- <div>v-html</div> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    askItem() {
      return this.$store.state.item;
    },
  },
  created() {
    this.$store.dispatch("FETCH_ITEM", this.$route.query.id);
  },
};
</script>

<style></style>
