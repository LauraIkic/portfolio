<template>
  <div class="loading-spinner">
    <svg
        id="svg"
        version="1.1"
        width="217.01498"
        height="217.01501"
        viewBox="0 0 217.01498 217.01502"
        xmlns="http://www.w3.org/2000/svg">
      <g
          id="svgg"
          transform="translate(275.45023,-361.38152)">
        <path
            id="path"
            d="m -275.45024,469.88853 v 108.508 l 108.42,-0.088 108.419999,-0.087 0.087,-108.42 0.088,-108.42 h -108.507999 -108.507 v 108.507 m 212.499999,-0.174 v 104.167 h -103.992999 -103.993 v -104.167 -104.167 h 103.993 103.992999 v 104.167 m -137.413999,-1.835 0.087,55.481 36.459,0.09 c 33.968,0.083 36.488,0.049 36.892,-0.501 0.451,-0.613 0.579,-3.525 0.215,-4.884 l -0.209,-0.781 -32.859,-0.006 c -18.072,-0.003 -33.054,-0.129 -33.292,-0.28 -0.342,-0.217 -0.451,-11.216 -0.52,-52.338 l -0.088,-52.064 -3.387,-0.099 -3.386,-0.1 0.088,55.482 m 19.791,-8.148 0.088,47.31 26.657,0.088 26.657,0.089 0.34,-0.892 c 0.405,-1.067 0.441,-4.316 0.054,-4.925 -0.213,-0.336 -5.487,-0.452 -23.692,-0.521 l -23.419,-0.089 -0.088,-44.185 -0.088,-44.184 h -3.299 -3.298 l 0.088,47.309"
            stroke="none"
            fill="#ec55fc"
            fill-rule="evenodd" />
      </g>
    </svg>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import anime from '../node_modules/animejs';

export default {
  name: 'LoadingSpinner',
  setup() {
    onMounted(() => {
      anime({
        targets: '#path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2000,
        direction: 'alternate',
        loop: true
      });
    });
  }
};
</script>

<style scoped>
.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#svg {
  width: 100px;
  height: 100px;
}

#path {
  stroke: #ffffff;
  stroke-width: 2;
  fill: none;
}
</style>
