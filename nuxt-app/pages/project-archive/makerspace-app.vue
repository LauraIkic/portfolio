<template>
  <div>
    <!-- Fullscreen Header Image -->
    <div class="relative h-screen bg-cover bg-center" :style="{ backgroundImage: `url(${project.image})` }">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 flex items-center justify-center h-full">
        <h1 class="text-5xl text-white font-bold">{{ project.name }}</h1>
      </div>
    </div>

    <!-- Content Section -->
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(content, index) in project.contents" :key="index" class="flex flex-col md:flex-row">
          <div class="w-full md:w-1/2">
            <img :src="content.image" alt="" class="rounded-xl shadow-md" />
          </div>
          <div class="w-full md:w-1/2 md:pl-8">
            <h2 class="text-3xl font-bold mb-4">{{ content.title }}</h2>
            <p class="text-lg">{{ content.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { defineComponent, onMounted, ref } from "vue"
import {useRoute} from "nuxt/app";

export default defineComponent({
  setup(){
    const route = useRoute()

    // function handleScrollY() {
    //   /*      console.log(section1.value.offsetHeight)
    //         if (window.scrollY > section1.value.offsetHeight) {
    //           bgColor.value = 'bg-white';
    //         }
    //
    //         if (window.scrollY >= section1.value.offsetHeight) {
    //           bgColor.value = 'bg-black';
    //         }
    //
    //         if (window.scrollY > section1.value.offsetHeight) {
    //           bgColor.value = 'bg-[#0b1229]';
    //         }
    //
    //         if (window.scrollY >= section2.value.offsetHeight ) {
    //           bgColor.value = 'bg-white';
    //         }
    //
    //         if (window.scrollY >= section3.value.offsetHeight + section2.value.offsetHeight ) {
    //           bgColor.value = 'bg-black';
    //
    //         }*/
    // }



    onMounted(() => {console.log('Route', route.params)

    })
    return{
      route
    }
  }

})

</script>

<style scoped>

</style>