<template>
  <div>
    <h2>jobs</h2>
    <list-item :list-date="list"></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";

export default {
  components: {ListItem},
  computed: {
    list() {
      return this.$store.state.list;
    },
  },
  created() {
    this.$store.dispatch("FETCH_LIST", "jobs");
  },
};
</script>

<style></style>
