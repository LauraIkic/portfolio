<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="font-sans antialiased   shadow-2xl" id="app">
    <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <div id="navBar5" class="ml-1">
          <a href="/" class="text-[#ed52f9] text-xl font-bold border px-4 py-2 border-[#ed52f9]" >
            L
          </a>
        </div>
      </div>
      <div class="block sm:hidden">
        <button @click="toggle" class="flex items-center px-3 py-2 text-teal-lighter border-teal-light text-white hover:border-white ">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto md:mr-24" :key="open">
        <div class="text-sm sm:flex-grow">
        </div>
        <div>
          <a href="#about" id="navBar1" class="link-underline  inline-block text-sm px-4 py-2 leading-none text-gray-500 hover:text-white hover:text-teal mt-4 sm:mt-0 ">About</a>
        </div>
        <div>
          <a href="#work" id="navBar2" class=" link-underline inline-block text-sm px-4 py-2 leading-none text-gray-500 hover:text-white hover:text-teal mt-4 sm:mt-0 ">Work</a>
        </div>
        <div>
          <a href="#projects" id="navBar3" class="link-underline  inline-block text-sm px-4 py-2 leading-none text-gray-500 hover:text-white  hover:text-teal mt-4 sm:mt-0 ">Projects</a>
        </div>
        <div>
          <a href="#contact" id="navBar4" class="link-underline inline-block text-sm px-4 py-2 leading-none text-gray-500 hover:text-white hover:text-teal mt-4 sm:mt-0 ">Contact</a>
        </div>

        <div>

        </div>
        <div class="relative group md:ml-5" id="navBar5G" >
          <div class="invisible md:visible absolute -inset-1 bg-gradient-to-r from-[#0096c9] to-[#a21faf] rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <a id="navBar5" href="/resume.pdf" class="bg-[#001727] inline-block text-sm px-4 py-2 leading-none border rounded text-white border-[#ed52f9]  mt-4 sm:mt-0 text-[#ed52f9]  ">
          RESUME</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script >

import {defineComponent, onMounted, ref} from 'vue'

export default defineComponent({
  setup(){
    let open = ref(false)

    function toggle () {
      open.value = !open.value
      console.log('toggle was clicked')
      console.log(open)
    }

    return{
      toggle,open
    }
  }
})
</script>


<style scoped>
.link-underline {
  border-bottom-width: 0;
  background-image: linear-gradient(transparent, transparent), linear-gradient(#ffffff, #ffffff);
  background-size: 0 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size .5s ease-in-out;
}

.link-underline-black {
  background-image: linear-gradient(transparent, transparent), linear-gradient(#ed52f9, #ed52f9);
}

.link-underline:hover {
  background-size: 100% 1px;
  background-position: 0 100%;
}

#navBar1 {
  position: relative;
  animation: heading;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
#navBar2 {
  position: relative;
  animation: heading;
  animation-duration: 1.2s;
  animation-fill-mode: forwards;
}
#navBar3 {
  position: relative;
  animation: heading;
  animation-duration: 1.3s;
  animation-fill-mode: forwards;
}
#navBar4 {
  position: relative;
  animation: heading;
  animation-duration: 1.4s;
  animation-fill-mode: forwards;
}
#navBar5  {
  position: relative;
  animation: heading-straight;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
}

#navBar5G {
  position: relative;
  animation: fadeIn;
  animation-duration: 5s;
  animation-fill-mode: forwards;
}
@keyframes fadeIn {
  0% {opacity: 0%; z-index: 0}
  100% {opacity: 100%; z-index: 0}
}
@keyframes heading {
  0% {top:-50px; right: -30px}
  100% {top: 0px; right: 0px}
}
@keyframes heading-straight {
  0% {top:-50px}
  100% {top: 0px}
}
</style>