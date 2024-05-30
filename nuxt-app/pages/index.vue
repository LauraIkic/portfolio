<template>
  <div class="relative flex flex-col w-full transition duration-500 ease-in-out " :class="bgColor" >
    <div ref="section1" >
      <About2 class=""/>
    </div>
    <div ref="section3">
      <WorkSection  />
    </div>
    <ProjectSection  ref="section4"/>
    <Contact/>

  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue"

export default defineComponent({
  setup(){
    const X = ref(null);
    const section1 = ref(null);
    const section2 = ref(null);
    const section3 = ref(null);
    const bgColor = ref('');

    function handleScrollX() {
      if (window.scrollY >= section1.value.offsetHeight) {
        X.value = -(window.scrollY - section1.value.offsetHeight);
      }

      if (X.value <= - (section2.value.offsetHeight - window.innerWidth)) {
        X.value = -(section2.value.offsetHeight - window.innerWidth);
      }
      if (window.scrollY < section1.value.offsetHeight) {
        X.value = 0;
      }
    }
    function handleScrollY() {
/*      console.log(section1.value.offsetHeight)
      if (window.scrollY > section1.value.offsetHeight) {
        bgColor.value = 'bg-white';
      }

      if (window.scrollY >= section1.value.offsetHeight) {
        bgColor.value = 'bg-black';
      }

      if (window.scrollY > section1.value.offsetHeight) {
        bgColor.value = 'bg-[#0b1229]';
      }

      if (window.scrollY >= section2.value.offsetHeight ) {
        bgColor.value = 'bg-white';
      }

      if (window.scrollY >= section3.value.offsetHeight + section2.value.offsetHeight ) {
        bgColor.value = 'bg-black';

      }*/
    }



    onMounted(() => {
      document.addEventListener('scroll',handleScrollX);
      document.addEventListener('scroll',handleScrollY);
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });

    })
    return{
      X,section1,section2,section3,bgColor,
      handleScrollX,handleScrollY
    }
  }

})
</script>