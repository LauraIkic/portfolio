<template>
  <Header/>
  <div class="bg-[#0b1229]">
    <slot />
  </div>
</template>


<script>
import Header from "../components/Header";
export default {
  name: "default",
  components: {Header}
}
</script>

<style scoped>

</style>