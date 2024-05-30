<template>
  <div class="h-screen">
    <div class="w-10/12 md:w-7/12 mx-auto relative  ml-70 " id="work">
      <div class="flex justify-center">
        <h3 class="text-white md:text-5xl text-4xl mb-10">Work</h3>
        <h2 class="text-[#ed52f9] ml-2">IT</h2>
      </div>
      <div class="relative md:timeline">
        <div v-for="w in workExperiences" :key="w.id" class="flex justify-center">
          <WorkPreview :workExperience="w" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import WorkPreview from './WorkPreview.vue';

export default defineComponent({
  components: {
    WorkPreview,
  },
  setup() {
    const workExperiences = ref([
      {
        id: '1',
        startDate: 'JUL 2019',
        endDate: 'MAR 2022',
        title: 'Frontend Developer',
        company: 'Grand Garage',
        tools: ['Vue.js', 'Nuxt.js', 'JavaScript', 'Storyblok'],
        description: '',
        link: 'https://grandgarage.eu/de/',
      },
      {
        id: '2',
        startDate: 'APR 2022',
        endDate: 'AUG 2022',
        title: 'Full Stack Web Development',
        company: 'elements.at new media solution',
        tools: ['PHP', 'Twig', 'Pimcore'],
        description: '',
        link: 'https://www.elements.at/de',
      },
      {
        id: '3',
        startDate: 'NOV 2023',
        endDate: 'Current',
        title: 'Full Stack Web Development',
        company: 'Massive Art',
        tools: ['PHP', 'Symfony', 'React'],
        description: '',
        link: 'https://massiveart.com/',
      },
    ]);

    return {
      workExperiences,
    };
  },
});
</script>

<style>
.timeline::before {
  content: '';
  position: absolute;
  left: 8.5rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #0096c9, #a21faf);
}
.group:hover .group-hover-text-vue {
  color: #0096c9;
}
.group:hover .group-hover-text-nuxt {
  color: #ed52f9;
}
</style>
