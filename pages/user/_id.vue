<template>
  <div class="pa4 code">{{user.id}} has been a user {{user.created | timeSince }}</div>
</template>

<script>
// const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export default {
  async asyncData({ $axios, route }) {
    const user = await $axios.$get(`user/${route.params.id}.json`);
    // const user = await $axios.$get(`${baseUrl}user/${route.params.id}.json`);
    return {
      user
    };
  }
};
</script>

<style lang="scss" scoped>
</style>