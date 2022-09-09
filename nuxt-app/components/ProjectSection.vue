<template>
<!--  <img src="../assets/img/img.png" alt="" class="mt-64">-->
  <div class="mt-64">
    <div class="flex justify-center ">
      <p class="text-white md:text-5xl text-3xl">
        My projects
      </p>
      <h2 class="text-[#FC01B0]">
        SELECTED
      </h2>
    </div>
    <ul role="list"
        class="grid gap-20  grid-cols-1 gap-x-10 lg:grid-cols-3 xl:gap-x-8 mt-20 md:container w-80 mx-auto md:grid-cols-2 ">

      <li v-for="p in projects" :key="p.src" class=" w-80 ">
        <ProjectPreview :project="p"/>
      </li>
    </ul>

    <div class="flex justify-center mt-20">
      <a href="#_" class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
        <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
        <!-- Top glass gradient -->
        <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
        <!-- Bottom gradient -->
        <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
        <!-- Left gradient -->
        <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
        <!-- Right gradient -->
        <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
        <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
        <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
        <span class="relative">
        Read more
      </span>
      </a>
    </div>

  </div>

</template>

<script>

import {defineComponent, onMounted} from 'vue'

export default defineComponent({
  setup(){
    const projects = [
      {
        title: 'Tamago',
        image: '../assets/img/tamago.png',
        icon: '',
        tools: 'Kotlin',
        link: 'https://github.com/LauraIkic/Tamago'
      },
      {
        title: 'Cocktail Recipes',
        image: '../assets/img/cocktailRecipe.png',
        icon: '',
        tools: 'Swift',
        link: 'https://github.com/LauraIkic/cocktailRecipes'
      },
      {
        title: 'Ar project',
        image: '../assets/img/arProject.png',
        icon: '',
        tools: 'Flutter',
        link: ''
      },
      {
        title: 'Cap.finisher Club',
        image: '../assets/img/cap-finisher.png',
        icon: '',
        tools: 'Vue.js Nuxt',
        link: '' //open src?
      },
      {
        title: 'Makerspace app',
        image: '../assets/img/makerspace.png',
        icon: '',
        tools: 'Swift',
        link: ''
      },
      {
        title: 'Parkify app',
        image: '../assets/img/parkify.png',
        icon: '',
        tools: 'Swift',
        link: ''
      },
    ]
    return{
      projects
    }
  }
})
</script>
