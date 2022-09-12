<template>
  <div class="relative h-screen">
    <div class="flex flex-col justify-center w-full h-full text-center">
      <h2 class="text-[#CC3883]">
        CONTACT
      </h2>
      <h3 class="md:text-5xl leading-normal font-semibold text-white ease-in transition duration-300 sm:text-4xl">
        Get in touch! <br>
      </h3>
      <br>
      <div class="flex justify-center pb-10 mt-10">
        <a href="mailto:ikic.laura@gmx.at" class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
          <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
          <!-- Top glass gradient -->
          <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
          <!-- Bottom gradient -->
          <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
          <!-- Left gradient -->
          <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
          <!-- Right gradient -->
          <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
          <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
          <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
          <span class="relative">
            Send Message
      </span>
        </a>
      </div>

      <div class="" id="#bottom">
        <div class="absolute inset-x-1 bottom-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-100 h-5 ">
        </div>
        <div class=" absolute inset-x-1 bottom-0 p-5   flex justify-center space-x-2  ">
          <a href="https://github.com/LauraIkic/portfolio">
            <p class="text-white opacity-50 hover:opacity-100 hover:-translate-y-2 transition duration-200 p-2 ">
              Designed & Built by Laura Ikic
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
