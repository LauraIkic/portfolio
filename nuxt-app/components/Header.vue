<template>
  <div class="font-sans antialiased shadow-2xl" id="app">
    <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <div id="navBar5" class="ml-1">
          <a href="/" class="">
            <svg
                id="svg"
                version="1.1"
                width="40"
                height="40"
                viewBox="0 0 217.01498 217.01502"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:svg="http://www.w3.org/2000/svg">
              <defs id="defs141" />
              <g id="svgg" transform="translate(275.45023,-361.38152)">
                <path
                    id="path1"
                    d="m -275.45024,469.88853 v 108.508 l 108.42,-0.088 108.419999,-0.087 0.087,-108.42 0.088,-108.42 h -108.507999 -108.507 v 108.507 m 212.499999,-0.174 v 104.167 h -103.992999 -103.993 v -104.167 -104.167 h 103.993 103.992999 v 104.167 m -137.413999,-1.835 0.087,55.481 36.459,0.09 c 33.968,0.083 36.488,0.049 36.892,-0.501 0.451,-0.613 0.579,-3.525 0.215,-4.884 l -0.209,-0.781 -32.859,-0.006 c -18.072,-0.003 -33.054,-0.129 -33.292,-0.28 -0.342,-0.217 -0.451,-11.216 -0.52,-52.338 l -0.088,-52.064 -3.387,-0.099 -3.386,-0.1 0.088,55.482 m 19.791,-8.148 0.088,47.31 26.657,0.088 26.657,0.089 0.34,-0.892 c 0.405,-1.067 0.441,-4.316 0.054,-4.925 -0.213,-0.336 -5.487,-0.452 -23.692,-0.521 l -23.419,-0.089 -0.088,-44.185 -0.088,-44.184 h -3.299 -3.298 l 0.088,47.309"
                    stroke="none"
                    fill="#ec55fc"
                    fill-rule="evenodd" />
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div class="block sm:hidden">
        <button @click="toggle" class="flex items-center px-3 py-2 text-teal-lighter border-teal-light text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>
      <div :class="open ? 'block' : 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto md:mr-24">
        <div class="text-sm sm:flex-grow"></div>
        <div v-for="(item, index) in navItems" :key="index">
          <a :href="item.href" :id="item.id" class="link-underline inline-block text-sm px-4 py-2 leading-none text-gray-500 hover:text-white hover:text-teal mt-4 sm:mt-0">
            {{ item.label }}
          </a>
        </div>
        <div class="relative group md:ml-5" id="navBar5G">
          <div class="invisible md:visible absolute -inset-1 bg-gradient-to-r from-[#0096c9] to-[#a21faf] rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <a id="navBar5" href="/resume.pdf" class="bg-[#001727] inline-block text-sm px-4 py-2 leading-none border rounded text-white border-[#ed52f9] mt-4 sm:mt-0 text-[#ed52f9]">
            RESUME
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const open = ref(false);

    function toggle() {
      open.value = !open.value;
      console.log(open.value);
    }

    const navItems = [
      { href: '#about', label: 'About', id: 'navBar1' },
      { href: '#work', label: 'Work', id: 'navBar2' },
      { href: '#projects', label: 'Projects', id: 'navBar3' },
      { href: '#contact', label: 'Contact', id: 'navBar4' }
    ];

    return {
      toggle,
      open,
      navItems
    };
  }
};
</script>

<style scoped>
.link-underline {
  border-bottom-width: 0;
  background-image: linear-gradient(transparent, transparent), linear-gradient(#ffffff, #ffffff);
  background-size: 0 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.5s ease-in-out;
}

.link-underline:hover {
  background-size: 100% 1px;
  background-position: 0 100%;
}

#navBar1, #navBar2, #navBar3, #navBar4, #navBar5 {
  position: relative;
  animation: heading 1s forwards;
}

#navBar5G {
  position: relative;
  animation: fadeIn 5s forwards;
}

@keyframes fadeIn {
  0% { opacity: 0%; z-index: 0; }
  100% { opacity: 100%; z-index: 0; }
}

@keyframes heading {
  0% { top: -50px; right: -30px; }
  100% { top: 0; right: 0; }
}
</style>
