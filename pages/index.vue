<template>
  <div>
    <div class="f1 code">Hello World</div>
    <ul class="list pa2">
      <li v-for="item of items" :key="item.id">{{item.title}}</li>
      <!-- <li v-for="user of users" :key="user.id">{{user.login}}</li> -->
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["ids", "items"])
  // async asyncData({ $axios }) {
  //   const users = await $axios.$get("https://api.github.com/users");
  //   return {
  //     users
  //   };
  // }
  // computed: mapState(["users"])
};
</script>