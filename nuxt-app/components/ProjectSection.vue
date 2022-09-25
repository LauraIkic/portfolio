<template>
<!--  <img src="../assets/img/img.png" alt="" class="mt-64">-->
  <div class="mt-64 p-10" id="projects">
    <div class="flex justify-center ">
      <p class="text-white md:text-5xl text-3xl">
        My projects
      </p>
      <h2 class="text-[#ed52f9] ml-2">
        SELECTED
      </h2>
    </div>
    <ul role="list"
        class="grid gap-20  grid-cols-1 gap-x-10 lg:grid-cols-3 xl:gap-x-8 mt-20 md:container w-80 mx-auto md:grid-cols-2 ">

      <li v-for="p in projects" :key="p.src" class="flex justify-center ">
        <ProjectPreview :project="p"/>
      </li>
    </ul>

<!--    <div class="flex justify-center mt-20">
      <a href="projects" class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
        <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
        &lt;!&ndash; Top glass gradient &ndash;&gt;
        <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
        &lt;!&ndash; Bottom gradient &ndash;&gt;
        <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
        &lt;!&ndash; Left gradient &ndash;&gt;
        <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
        &lt;!&ndash; Right gradient &ndash;&gt;
        <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
        <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
        <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
        <span class="relative">
        Read more
      </span>
      </a>
    </div>-->

  </div>

</template>

<script>

import {defineComponent, onMounted} from 'vue'

export default defineComponent({
  setup(){
    const projects = [
      {
        title: 'Tamago',
        image: 'https://user-images.githubusercontent.com/79761992/189744566-8eaacbe5-931b-42c1-a90a-ed50cc37ade6.png',
        icon: '',
        tools: 'Kotlin',
        link: 'https://github.com/LauraIkic/Tamago'
      },
      {
        title: 'Cocktail Recipes',
        image: 'https://user-images.githubusercontent.com/79761992/192140490-adcb74e3-fb4d-4c04-9db9-32fb9108fe33.png',
        icon: '',
        tools: 'Swift',
        link: 'https://github.com/LauraIkic/cocktailRecipes'
      },
      {
        title: 'Ar project',
        image: 'https://user-images.githubusercontent.com/79761992/192140532-ba7aef64-932c-4864-aba4-4c700934da09.png',
        icon: '',
        tools: 'Flutter',
        link: ''
      },
      {
        title: 'Cap.finisher Club',
        image: 'https://user-images.githubusercontent.com/79761992/192140560-b7a10fd6-29b4-4923-8cd7-53b1f08be179.png',
        icon: '',
        tools: 'Vue.js Nuxt',
        link: '' //open src?
      },
      {
        title: 'Makerspace app',
        image: 'https://user-images.githubusercontent.com/79761992/192140549-71c1259d-0139-4e26-9025-714145007ab7.png',
        icon: '',
        tools: 'Swift',
        link: ''
      },
      {
        title: 'Parkify app',
        image: 'https://user-images.githubusercontent.com/79761992/192140553-9f8d4a44-7860-4bf4-b0b8-e4e336b6ce69.png',
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
