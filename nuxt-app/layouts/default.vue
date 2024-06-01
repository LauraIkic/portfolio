<template>
  <div class="bg-[#001727]">
    <div v-if="isLoading">
      <LoadingSpinner />
    </div>
    <div v-else class="fade-in-dynamic">
      <Header />
      <slot />
      <ContactBar class=""/>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Header from '~/components/Header.vue';
import LoadingSpinner from '~/components/LoadingSpinner.vue';

export default {
  name: 'default',
  components: {
    Header,
    LoadingSpinner,
  },
  setup() {
    const isLoading = ref(true);

    onMounted(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 2000);
    });

    return {
      isLoading,
    };
  },
};
</script>

<style scoped>
.fade-in-dynamic {
  opacity: 0.5;
  animation: fadeInScale 0.01s ease forwards;
}

@keyframes fadeInScale {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
