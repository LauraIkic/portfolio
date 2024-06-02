<template>
  <a :href="computedLink">
    <div class="relative group w-80">
      <div class="absolute -inset-1 bg-gradient-to-r from-[#0096c9] to-[#a21faf] rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div class="relative h-56 bg-white ring-1 ring-gray-900/5 rounded-2xl leading-none flex items-top justify-start bg-[#474e55cf]">
        <img v-if="project.name === 'parkify'" src='../assets/webp/parkify.webp' alt=""
             class="absolute  object-cover cursor-pointer pointer-events-none transition duration-500 shadow-md rounded-t-2xl grayscale group-hover:grayscale-0 absolute top-0"
        />
        <img v-if="project.name === 'ar'" src='../assets/webp/ar.webp'   alt=""
             class="absolute  object-cover cursor-pointer pointer-events-none h-[180px] w-[350px] transition duration-500 shadow-md rounded-t-2xl grayscale group-hover:grayscale-0 absolute top-0"
        />
        <img v-if="project.name === 'makerspace'" src='../assets/webp/makerspace.webp'  alt=""
             class="absolute  object-cover cursor-pointer pointer-events-none transition duration-500 shadow-md rounded-t-2xl grayscale group-hover:grayscale-0 absolute top-0"
        />
        <img v-if="project.name === 'lean-man'" src='../assets/webp/limig.webp' alt=""
             class="absolute  object-cover cursor-pointer pointer-events-none transition duration-500 shadow-md rounded-t-2xl grayscale group-hover:grayscale-0 absolute top-0"
        />
        <img v-if="project.name === 'wedding'" src='../assets/webp/weddingProject.webp' alt=""
             class="absolute  object-cover cursor-pointer pointer-events-none transition duration-500 shadow-md rounded-t-2xl grayscale group-hover:grayscale-0 absolute top-0"
        />
        <img v-if="project.name === 'tamago'" src='../assets/webp/tamago.webp'  alt=""
             class="absolute  object-cover cursor-pointer pointer-events-none transition duration-500 shadow-md rounded-t-2xl grayscale group-hover:grayscale-0 absolute top-0"
        />
        <img v-if="project.name === 'cocktail'" :src='project.image'  alt=""
             class="absolute  object-cover cursor-pointer pointer-events-none transition duration-500 shadow-md rounded-t-2xl grayscale group-hover:grayscale-0 absolute top-0"
        />
        <p class="text-white flex flex-col justify-end p-4">
          {{project.title}}
        </p>
      </div>
    </div>
  </a>
</template>

<script>
import { defineComponent, onMounted, ref, computed } from "vue";
import { useRoute } from "nuxt/app";

export default defineComponent({
  name: "ProjectPreview",
  props: ['project'],
  setup(props) {
    const route = useRoute();
    const src = '../assets/webp/makerspace.webp';

    const computedLink = computed(() => {
      if (props.project.internal) {
        return { name: 'internal-route-name', params: { additionalParam: 'value', ...route.params } };
      } else {
        return props.project.link;
      }
    });

    onMounted(() => {
      com
      console.log(route.params);
    });

    return {
      route,
      src,
      computedLink
    };
  }
});
</script>
