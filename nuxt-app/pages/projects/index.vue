<template>
  <div class="p-10" id="projects">
    <div class="flex justify-center ">
      <p class="text-white md:text-5xl text-3xl">
        My projects
      </p>
      <h2 class="text-[#FC01B0] ">
        ARCHIVE
      </h2>
    </div>
    <ul role="list"
        class="grid gap-20  grid-cols-1 gap-x-10 lg:grid-cols-3 xl:gap-x-8 mt-20 md:container w-80 mx-auto md:grid-cols-2 ">

      <li v-for="p in projects" :key="p.src" class=" w-80 ">
        <ProjectPreview :project="p"/>
      </li>
    </ul>


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
