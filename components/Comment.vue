<template>
  <div>
    <div class="bb mb4">
      <div class="mb1">
        <span class="i">{{item.id}}</span>
        <nuxt-link :to="'/user/' + item.by">{{item.by}}</nuxt-link>
        {{item.time | timeSince}} ago
      </div>
      <div class="f6" v-html="item.text"></div>
      <div class="i f6 gray">Kids: {{item.kids}}</div>
    </div>
    <ul class="ml3">
      <comment v-for="id in item.kids" :key="id" :id="id"></comment>
    </ul>
  </div>
</template>

<script>
export default {
  name: "comment",
  data() {
    return {
      item: {},
      kids: []
    };
  },
  props: ["id"],

  async beforeMount() {
    const item = await this.$axios.$get(`item/${this.id}.json`);
    this.item = item;
  },

  async mounted() {
    if (this.item.kids) {
      const idToPromise = id => this.$axios.$get(`item/${id}.json`);
      const kidPromises = this.item.kids.map(idToPromise);
      const kids = await Promise.all(kidPromises);
      this.kids = kids;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>