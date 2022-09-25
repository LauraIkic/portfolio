<template>
  <div class="h-screen container mx-auto " id="content">
    <div class="pt-24">
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <!--Left Col-->
        <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <p class="text-2xl text-white font-mono text-[#CC3883] ">
            Hi, my name is
          </p>
          <p class="text-6xl text-white font-mono ">
            Laura Ikic
          </p>
          <p class="text-xl text-gray-400 font-mono ">
            A software developer from Austria
          </p>
          <a href="mailto:ikic.laura@gmx.at" class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
            <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

            <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-Ftransparent opacity-5 h-1/3"></span>

            <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

            <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

            <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
            <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
            <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
            <span class="relative">
            Send Message
      </span>
          </a>
        </div>
        <!--Right Col-->
        <div class="w-full md:w-3/5 py-6 text-center">
          <img class="w-full md:w-4/5 z-50" src="../assets/img/laptop.jpg" />
        </div>
      </div>
    </div>
    <div class=" container flex justify-center mt-80 ">
      <div class="h-52 w-1/2 mx-auto">
        <p class="text-2xl text-white font-mono text-[#CC3883] ">
          Hi, my name is
        </p>
        <p class="text-6xl text-white font-mono ">
          Laura Ikic
        </p>
        <p class="text-xl text-gray-400 font-mono ">
          A software developer from Austria
        </p>
      </div>
    </div>

  </div>
<!--  <div class="h-screen">
    <div class="flex flex-col justify-center w-full h-full text-center">
      <h2 class="text-[#CC3883]">
        ABOUT ME
      </h2>
      <h3 class="md:text-5xl leading-normal font-semibold text-white ease-in transition duration-300 sm:text-4xl">
        & my work
      </h3>
      <br>
      <div class="w-96 mx-auto">
        <p class="text-white ">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
      <br>
    </div>
  </div>-->
</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({
})
</script>
<style>
#content {
  position: relative;
  animation-name: content;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

@keyframes content{
  0% {bottom: -100px;}
  100% {bottom: 0px;}
}

</style>