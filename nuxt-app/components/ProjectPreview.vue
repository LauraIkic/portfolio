<template>
  <nuxt-link :to="project.link">
    <div class="relative group w-80">
      <div class="absolute -inset-1 bg-gradient-to-r from-[#0096c9] to-[#a21faf] rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div class="relative h-56 bg-white ring-1 ring-gray-900/5 rounded-2xl leading-none flex items-top justify-start bg-[#474e55cf]">
        <img :src='getImgaeSrc(project)' width="350px" height="150px" alt=""
             class="absolute  object-cover cursor-pointer pointer-events-none transition duration-500 shadow-md rounded-t-2xl grayscale group-hover:grayscale-0 absolute top-0"
        />
        <p class="text-white flex flex-col justify-end p-4">
          {{project.title}}
        </p>
      </div>
    </div>
<!--    <img class="  " :src="project.image" />-->
  </nuxt-link>

</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    project: Object
  },
  setup(){
 function getImgaeSrc(project) {
  console.log(project.image)

  return '../assets/webp/' + project.image
 }
    return{
      getImgaeSrc
    }
  }
})

</script>
