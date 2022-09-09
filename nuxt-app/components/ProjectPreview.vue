<template>
  <div class="relative group">
    <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
    <div class="relative h-52 bg-white ring-1 ring-gray-900/5 rounded-2xl leading-none flex items-top justify-start bg-[#474e55cf]">
      <img :src="project.image" width="350px" height="200px" alt=""
           class="absolute -mt-5 object-cover cursor-pointer pointer-events-none transition duration-500 shadow-md rounded-t-2xl grayscale group-hover:grayscale-0 absolute top-0"
      />
      <p class="text-white flex flex-col justify-end p-4">
        {{project.title}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectPreview",
  props: ['project']
}
</script>
