<template>
  <header>
    <nav
        class="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-10
          text-lg text-white
          bg-[#0b1229]
          shadow-2xl
          absolut
        "
    >
      <div>
        <a href="/">
          L
        </a>
      </div>

      <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          class="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
      >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div class="hidden w-full md:flex md:items-center md:w-auto mr-10 mt-1 py-3" id="menu">
        <ul
            class="
              pt-4
              text-base text-gray-500
              md:flex
              md:justify-between
              md:pt-0
              mt-3"
        >
          <li>
            <a class="md:p-2 mr-4 py-2 block link-underline transition duration-700 hover:text-white"  href="#about"
            >About</a
            >
          </li>
          <li>
            <a class="md:p-2 mr-4 py-2 block link-underline transition duration-700 hover:text-white" href="#work"
            >Work</a
            >
          </li>
          <li>
            <a class="md:p-2 mr-4 py-2 block link-underline transition duration-700 hover:text-white" href="#projects"
            >Projects</a
            >
          </li>
          <li>
            <a class="md:p-2 mr-4 py-2 block link-underline transition duration-700 hover:text-white" href="#contact"
            >Contact</a
            >
          </li>
          <li>
            <a
                class="md:p-2 mr-4 py-2 block  text-[#CC3883] link-underline link-underline-black"
                href="/resume.pdf" target="_blank"
            >RESUME</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>

</template>

<script>
/*
const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});*/

</script>

<style scoped>
.link-underline {
  border-bottom-width: 0;
  background-image: linear-gradient(transparent, transparent), linear-gradient(#ffffff, #ffffff);
  background-size: 0 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size .5s ease-in-out;
}

.link-underline-black {
  background-image: linear-gradient(transparent, transparent), linear-gradient(#F2C, #F2C);
}

.link-underline:hover {
  background-size: 100% 1px;
  background-position: 0 100%;
}

#navBar1 {
  position: relative;
  animation: heading;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
#navBar2 {
  position: relative;
  animation: heading;
  animation-duration: 1.2s;
  animation-fill-mode: forwards;
}
#navBar3 {
  position: relative;
  animation: heading;
  animation-duration: 1.3s;
  animation-fill-mode: forwards;
}
#navBar4 {
  position: relative;
  animation: heading;
  animation-duration: 1.4s;
  animation-fill-mode: forwards;
}
#navBar5  {
  position: relative;
  animation: heading-straight;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
}
@keyframes heading {
  0% {top:-50px; right: -30px}
  100% {top: 0px; right: 0px}
}
@keyframes heading-straight {
  0% {top:-50px}
  100% {top: 0px}
}
</style>