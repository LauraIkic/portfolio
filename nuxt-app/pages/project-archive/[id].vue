<template>
  <section>
    <div class="">

    </div>

  </section>
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



    onMounted(() => {console.log(route.params)

    })
    return{
      route
    }
  }

})

</script>

<style scoped>

</style>