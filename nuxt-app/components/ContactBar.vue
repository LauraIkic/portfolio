<template>
  <div v-if="isScreenMdOrLarger" class="fixed bottom-0 left-6 flex flex-col p-2 pb-0 rounded-lg" id="contactBar">
    <a href="https://github.com/LauraIkic" target="_blank" class="text-white text-2xl transition-colors duration-300 hover:text-[#ec55fc] mt-4">
      <i class="fa fa-github"></i>
    </a>
    <a href="https://www.instagram.com/laura__ikic/" target="_blank" class="text-white text-2xl transition-colors duration-300 hover:text-[#ec55fc] mt-4">
      <i class="fa fa-instagram"></i>
    </a>
    <a href="https://www.linkedin.com/in/laura-ikic-aa62b021a/" target="_blank" class="text-white text-2xl transition-colors duration-300 hover:text-[#ec55fc] mt-4">
      <i class="fa fa-linkedin-square"></i>
    </a>
    <a href="https://codepen.io/Laura__i" target="_blank" class="text-white text-2xl transition-colors duration-300 hover:text-[#ec55fc] mt-4 mb-4">
      <i class="fa fa-codepen"></i>
    </a>
    <div class="w-px h-24 bg-white ml-2.5"></div>
  </div>
</template>

<script>
export default {
  name: 'ContactBar',
  data() {
    return {
      screenWidth: window.innerWidth
    };
  },
  computed: {
    isScreenMdOrLarger() {
      return this.screenWidth >= 768; // Tailwind's md breakpoint is 768px
    }
  },
  created() {
    window.addEventListener('resize', this.updateScreenWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateScreenWidth);
  },
  methods: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    }
  }
};
</script>

<style scoped>
#contactBar {
  animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
  0% { bottom: -30px; opacity: 0%; }
  100% { bottom: 0; opacity: 100%; }
}
</style>
