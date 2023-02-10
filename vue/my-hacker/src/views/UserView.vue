<template>
  <div class="user_profile">
    <strong>User name : </strong>
    <b>Write : </b>
    <b>Karma : </b>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.user_profile {
  font-size: 24px;
}
.user_profile > * {
  display: block;
}
.user_profile > span {
  margin-right: 5px;
}
.user_profile > strong {
  color: #2455c3;
}
</style>
