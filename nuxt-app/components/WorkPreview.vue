<template>
  <a :href="workExperience.link" target="_blank" class="w-full md:w-2/3">
    <div class="relative group hover:-translate-y-3 transition duration-200 mb-10">
      <div class="ml-10 absolute -inset-1 group-hover:bg-gradient-to-r from-[#0096c9] to-[#a21faf] rounded blur opacity-25"></div>
      <div class="w-5 h-5 inset-x-1 bg-gradient-to-r from-[#0096c9] to-[#a21faf] absolute -left-0.5 transform -translate-x-2/4 rounded-full z-10 mt-8"></div>
      <div class="w-9 h-1 inset-x-1 bg-gradient-to-r from-[#a21faf] to-[#0096c9] absolute z-0 opacity-50 mt-10"></div>

      <div class="ml-10 relative h-56 ring-1 rounded flex flex-col justify-between bg-[#001727b0] p-4">
        <div>
          <p class="text-sm text-[#5A698C] mb-2">
            {{ workExperience.startDate }} - {{ workExperience.endDate }}
          </p>
          <p class="text-lg text-white group-hover:text-[#0096c9] mb-2">
            {{ workExperience.title }} - {{ workExperience.company }}
          </p>
          <p class="text-[#5A698C] mb-4">
            {{ workExperience.description }}
          </p>
        </div>
        <div class="flex flex-wrap space-x-2">
          <div v-for="tool in workExperience.tools" :key="tool" class="px-2 py-1 bg-gradient-to-r from-[#0096c9] to-[#a21faf] text-white rounded-full">
            {{ tool }}
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'WorkPreview',
  props: {
    workExperience: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* No additional styles needed; Tailwind handles most styling */
</style>
