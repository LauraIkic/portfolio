<template>
  <section>
    <div class="bg-[#001727] ">
      <div class="relative h-96 bg-no-repeat bg-center" :style="{ backgroundImage: `url(${src})` }">
      </div>
<!--    header-->
      <h1 class="text-white z-100 flex justify-center mt-5">City Guide App</h1>
  <div class="flex flex-col h-auto w-screen">
<!--    <img class="w-56" src="assets/webp/makerspace.webp" alt="">-->
    <div class="w-56 flex justify-center">
      <p class="text-white">
        Maker space Grand Garage
      </p>
    </div>
  </div>
    </div>

  </section>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue"
import {useRoute} from "nuxt/app";

export default defineComponent({
  setup(){
    const route = useRoute()
    const src = '../assets/webp/makerspace.webp'
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



    onMounted(() => {console.log(route.params)

    })
    return{
      route,src
    }
  }

})

</script>

<style scoped>

</style>