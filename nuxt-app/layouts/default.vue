<template>
  <div class="bg-[#001727]">
    <div v-if="isLoading">
      <LoadingSpinner />
    </div>
    <div v-else class="fade-in-dynamic">
      <Header2 />
      <slot />
      <ContactBar class=""/>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Header2 from '~/components/Header.vue'; // Import your Header2 component
import LoadingSpinner from '~/components/LoadingSpinner.vue';

export default {
  name: 'default',
  components: {
    Header2,
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
