
<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" id="contact">
  <div class="relative h-screen">
    <div class="flex flex-col justify-center w-full h-full text-center">
      <h2 class="text-[#ed52f9]">
        CONTACT
      </h2>
      <h3 class="leading-normal font-semibold text-white ease-in transition duration-300 text-4xl md:text-5xl">
        Get in touch! <br>
      </h3>
<!--      <div class="flex justify-center pb-10 mt-10">
        <a href="mailto:ikic.laura@gmx.at" class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
          <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
          &lt;!&ndash; Top glass gradient &ndash;&gt;
          <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-Ftransparent opacity-5 h-1/3"></span>
          &lt;!&ndash; Bottom gradient &ndash;&gt;
          <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
          &lt;!&ndash; Left gradient &ndash;&gt;
          <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
          &lt;!&ndash; Right gradient &ndash;&gt;
          <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
          <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
          <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
          <span class="relative">
            Send Message
      </span>
        </a>
      </div>-->


      <ul role="list"
          class="grid gap-20  grid-cols-2 gap-x-10  xl:gap-x-8 mt-20 md:w-96 w-80 mx-auto md:grid-cols-4 w-52">
        <li  class="social-links ">
          <a href="https://www.instagram.com/laura__ikic/"  target="_blank"><i class="fa fa-instagram z-10" style="font-size: 22px"></i></a>
        </li>
        <li  class="social-links">
          <a href="https://github.com/LauraIkic"  target="_blank"><i class="fa fa-github z-10" style="font-size: 22px"></i></a>
        </li>
        <li  class="social-links">
          <a href="https://www.linkedin.com/in/laura-i-aa62b021a/"  target="_blank"><i class="fa fa-linkedin-square z-10" style="font-size: 22px" ></i></a>
        </li>
        <li  class="social-links">
        <a href="mailto:ikic.laura@gmx.at"  ><i class="fa fa-envelope z-10" style="font-size: 22px" ></i></a>
        </li>



        <!--        <a href="https://www.instagram.com/laura__ikic/"><i class="fa fa-instagram z-10" style="font-size: 22px"></i></a>
                <a href="https://github.com/LauraIkic"><i class="fa fa-github z-10" style="font-size: 22px"></i></a>
                <a href="https://www.linkedin.com/in/laura-i-aa62b021a/"><i class="fa fa-linkedin-square z-10" style="font-size: 22px" ></i></a>
                <a href="mailto:ikic.laura@gmx.at" ><i class="fa fa-envelope z-10" style="font-size: 22px" ></i></a>-->
<!--        <li v-for="p in projects" :key="p.src" class="flex justify-center ">

        </li>-->
      </ul>


      <div class="" id="#bottom">
        <div class="absolute inset-x-1 bottom-0 bg-gradient-to-r from-[#0096c9] to-[#a21faf] rounded-2xl blur-2xl opacity-100 h-5 ">
        </div>

        <div class=" absolute inset-x-1 bottom-0 p-5   flex justify-center space-x-2  ">
<!--          <div class="hero">
            <div class="social-links">
              <a href=""><i class="fa fa-facebook-f " style="font-size: 22px"></i></a>
              <a href=""><i class="fa fa-instagram" style="font-size: 22px"></i></a>
              <a href=""><i class="fa fa-twitter" style="font-size: 22px"></i></a>
              <a href=""><i class="fa fa-github" style="font-size: 22px"></i></a>
              <a href=""><i class="fa fa-linkedin-square" style="font-size: 22px" ></i></a>
            </div>
          </div>-->
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
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}
a{
  display: flex;
  justify-content: center;
  flex-flow: column;
}
.hero {
  margin-top: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

h1 {
  font-size: 40px;
  margin-bottom: 100px;
  margin-top: -100px;
}

.social-links {
  display: flex;
}

.social-links a {
  width: 60px;
  height: 60px;
  text-align: center;
  text-decoration: none;
  color: white;
  box-shadow:0 0 10px 5px rgba(255, 255, 255, 0.46);
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  transition: transform 0.5s;
}

.social-links a .fab {
  font-size: 30px;
  line-height: 80px;
  position: relative;
  z-index: 10;
  transition: color 0.5s;
}

.social-links a::after {
  content: '';
  width: 100%;
  height: 100%;
  top: -90px;
  left: 0;
  background: linear-gradient(-45deg, #ed52f9,#ffec1700);
  position: absolute;
  transition: 0.5s;
}

.social-links a:hover::after {
  top: 0;
}

.social-links a:hover .fab {
  color: #fff;
  z-index: 100;
}

.social-links a:hover {
  transform: translateY(-10px);
}

</style>