<template>
  <div>
    <Card></Card>
    <Sale></Sale>
    <Observe></Observe>
  </div>
</template>

<script>
import Card from "./Card";
import Sale from "./Sale/index.vue";
import Observe from "./Observe/index.vue";
export default {
  name: "Dashboard",
  components: {
    Card,
    Sale,
    Observe,
  },
  mounted() {
    this.$store.dispatch('getData')
  }
};
</script>

<style lang="scss" scoped>
</style>
