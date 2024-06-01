<template>
  <div class="mt-14 pt-36 p-10" id="projects">
    <div class="flex justify-center ">
      <p class="text-white md:text-5xl text-3xl">
        My projects
      </p>
      <h2 class="text-[#ed52f9] ml-2">
        ARCHIVE
      </h2>
    </div>
    <ul role="list"
        class="grid gap-20  grid-cols-1 gap-x-10 lg:grid-cols-3 xl:gap-x-8 mt-20 md:container w-80 mx-auto md:grid-cols-2 ">

      <li v-for="p in projects" :key="p.src" class="flex justify-center ">
        <ProjectPreview :project="p"/>
      </li>

    </ul>


  </div>

</template>


<script>

import {defineComponent, onMounted} from 'vue'
import projects from './project-archive.json'

export default defineComponent({
  setup(){
    return{
      projects
    }
  }
})
</script>
