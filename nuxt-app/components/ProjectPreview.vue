<template>
  <nuxt-link :to="project.link">
    <div class="relative group w-80">
      <div class="absolute -inset-1 bg-gradient-to-r from-[#0096c9] to-[#a21faf] rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div class="relative h-56 bg-white ring-1 ring-gray-900/5 rounded-2xl leading-none flex items-top justify-start bg-[#474e55cf]">
        <img v-if="project.name == 'parkify'" src='../assets/webp/parkify.webp' width="350px" height="150px" alt=""
             class="absolute  object-cover cursor-pointer pointer-events-none transition duration-500 shadow-md rounded-t-2xl grayscale group-hover:grayscale-0 absolute top-0"
        />
        <img v-if="project.name == 'ar'" src='../assets/webp/arProject.webp' width="350px" height="150px" alt=""
             class="absolute  object-cover cursor-pointer pointer-events-none transition duration-500 shadow-md rounded-t-2xl grayscale group-hover:grayscale-0 absolute top-0"
        />
        <img v-if="project.name == 'makerspace'" src='../assets/webp/makerspace.webp' width="350px" height="150px" alt=""
             class="absolute  object-cover cursor-pointer pointer-events-none transition duration-500 shadow-md rounded-t-2xl grayscale group-hover:grayscale-0 absolute top-0"
        />
        <img v-if="project.name == 'lean-man'" src='../assets/webp/limig.webp' width="350px" height="150px" alt=""
             class="absolute  object-cover cursor-pointer pointer-events-none transition duration-500 shadow-md rounded-t-2xl grayscale group-hover:grayscale-0 absolute top-0"
        />
        <img v-if="project.name == 'wedding'" src='../assets/webp/weddingProject.webp' width="350px" height="150px" alt=""
             class="absolute  object-cover cursor-pointer pointer-events-none transition duration-500 shadow-md rounded-t-2xl grayscale group-hover:grayscale-0 absolute top-0"
        />
        <img v-if="project.name == 'tamago'" src='../assets/webp/tamago.webp' width="350px" height="150px" alt=""
             class="absolute  object-cover cursor-pointer pointer-events-none transition duration-500 shadow-md rounded-t-2xl grayscale group-hover:grayscale-0 absolute top-0"
        />
        <img v-if="project.name == 'cocktail'" :src='project.image' width="350px" height="150px" alt=""
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
export default {
  name: "ProjectPreview",
  props: ['project']
}
</script>
