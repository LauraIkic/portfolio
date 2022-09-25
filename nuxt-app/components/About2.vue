<template>
  <div class=" lg:h-screen h-full ">
    <div class=" lg:mt-80 z-10 relative mt-60">
      <div class="flex flex-col justify-evenly
       lg:h-64 h-72 lg:w-1/2 mx-auto w-80 md:w-2/3">
        <p class="lg:text-2xl text-white font-mono text-[#ed52f9] ">
          Hi, my name is
        </p>
        <p class="lg:text-6xl text-white font-mono text-4xl">
          Laura Ikic
        </p>
        <p class="lg:text-xl text-gray-400 font-mono mt-5 ">
          A software developer from Austria with a passion for web development.
        </p>
        <a href="mailto:ikic.laura@gmx.at" class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group w-52">
          <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

          <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-Ftransparent opacity-5 h-1/3"></span>

          <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

          <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

          <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
          <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
          <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
          <span class="relative">
            Contact me
      </span>
        </a>
      </div>
    </div>
    <img class="hidden md:visible  z-0  lg:-mt-96 md:-mt-40 " src="../assets/img/wave1.png " />
    <img class=" xl:hidden  z-0  lg:-mt-96 md:-mt-40 " src="../assets/img/wave1large.png " />
  </div>
</template>

<script>
export default {
  name: "About2"
}
</script>

<style scoped>

</style>