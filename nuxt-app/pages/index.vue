<template>
  <div class="relative flex flex-col w-full transition duration-500 ease-in-out">
    <About/>
    <Contact/>
  </div>
</template>

<script>
import { defineComponent} from "vue"
import Contact from "../components/Contact";
import About from "../components/About";
import ProjectSection from "../components/ProjectSection";
import Work from "../components/Work";

export default defineComponent({
  components: {Contact, About, ProjectSection, Work},

  setup(){

  }
})
</script>

