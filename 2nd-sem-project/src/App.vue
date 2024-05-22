<script setup>
import { RouterLink, RouterView } from 'vue-router'
import DayView from './views/DayView.vue'
</script>

<template>
  <!-- <div class="home-svg-background">
    <div class="home-svg">
      <RouterLink to="/"><svg id="Group_203" data-name="Group 203" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="81.875" viewBox="0 0 80 81.875">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_2007" data-name="Rectangle 2007" width="80" height="81.875" fill="none"/>
    </clipPath>
  </defs>
  <g id="Group_200" data-name="Group 200">
    <g id="Group_199" data-name="Group 199" clip-path="url(#clip-path)">
      <circle id="Ellipse_13" data-name="Ellipse 13" cx="28.956" cy="28.956" r="28.956" transform="translate(11.586 11.964)" fill="none" stroke="#fff6e9" stroke-miterlimit="10" stroke-width="0.5" stroke-dasharray="11.368 11.368"/>
      <circle id="Ellipse_14" data-name="Ellipse 14" cx="22.062" cy="22.062" r="22.062" transform="translate(18.479 18.858)" fill="none" stroke="#fff6e9" stroke-miterlimit="10" stroke-width="0.5" stroke-dasharray="12 12"/>
      <rect id="Rectangle_2003" data-name="Rectangle 2003" width="10.323" height="2.55" transform="translate(45.563 53.45) rotate(-45)" fill="none" stroke="#fff6e9" stroke-miterlimit="10" stroke-width="1"/>
      <path id="Path_179" data-name="Path 179" d="M36.368,34.747l1.1,1.1a6.088,6.088,0,0,0-2.147,2.147l-1.08-1.081-5.283-5.28-4.425-6.576,6.572,4.43Z" fill="none" stroke="#fff6e9" stroke-miterlimit="10" stroke-width="1"/>
      <path id="Path_180" data-name="Path 180" d="M50.289,48.661l-1.075,1.076-1.072,1.071-3.417-3.417-1.052-1.05a6.066,6.066,0,0,0,2.147-2.147l1.071,1.071Z" fill="none" stroke="#fff6e9" stroke-miterlimit="10" stroke-width="1"/>
      <rect id="Rectangle_2004" data-name="Rectangle 2004" width="2.425" height="6.477" transform="translate(50.257 52.551) rotate(-45)" fill="none" stroke="#fff6e9" stroke-miterlimit="10" stroke-width="1"/>
      <rect id="Rectangle_2005" data-name="Rectangle 2005" width="2.55" height="10.323" transform="translate(26.418 47.953) rotate(-45)" fill="none" stroke="#fff6e9" stroke-miterlimit="10" stroke-width="1"/>
      <path id="Path_181" data-name="Path 181" d="M36.232,45.376a6.131,6.131,0,0,0,1.2.944l-1.073,1.071-3.417,3.417L31.87,49.737,30.8,48.661l3.4-3.4,1.107-1.1A6.1,6.1,0,0,0,36.232,45.376Z" fill="none" stroke="#fff6e9" stroke-miterlimit="10" stroke-width="1"/>
      <path id="Path_182" data-name="Path 182" d="M56.553,25.055l-4.427,6.576-5.282,5.281L45.8,37.956a6.121,6.121,0,0,0-.947-1.2,6.043,6.043,0,0,0-1.214-.931l1.076-1.075,5.266-5.264Z" fill="none" stroke="#fff6e9" stroke-miterlimit="10" stroke-width="1"/>
      <rect id="Rectangle_2006" data-name="Rectangle 2006" width="6.477" height="2.425" transform="translate(24.532 55.416) rotate(-45)" fill="none" stroke="#fff6e9" stroke-miterlimit="10" stroke-width="1"/>
      <path id="Path_183" data-name="Path 183" d="M44.882,45.4a6.1,6.1,0,0,1-7.451.915,6.1,6.1,0,0,1-1.172-9.539,6.09,6.09,0,0,1,8.594-.026,6.095,6.095,0,0,1,.029,8.65ZM36.368,34.747l4.174-21.664,4.174,21.666m2.128,2.163,21.708,4.181L46.891,45.265M36.358,47.391,40.542,69.1l4.183-21.712M34.192,45.265l-21.66-4.172L34.24,36.912" fill="none" stroke="#fff6e9" stroke-miterlimit="10" stroke-width="1"/>
      <text id="s" transform="translate(37.746 79.724)" fill="#fff6e9" font-size="9.194" font-family="ExocetOTCECY-Medium, Exocet OTCECY" font-weight="500"><tspan x="0" y="0">s</tspan></text>
    </g>
  </g>
  <text id="E" transform="translate(72.227 42.963)" fill="#fff6e9" font-size="9.194" font-family="ExocetOTCECY-Medium, Exocet OTCECY" font-weight="500"><tspan x="0" y="0">E</tspan></text>
  <g id="Group_202" data-name="Group 202">
    <g id="Group_201" data-name="Group 201" clip-path="url(#clip-path)">
      <text id="w" transform="translate(0.001 42.794)" fill="#fff6e9" font-size="9.194" font-family="ExocetOTCECY-Medium, Exocet OTCECY" font-weight="500"><tspan x="0" y="0">w</tspan></text>
      <text id="N" transform="translate(36.732 7.516)" fill="#fff6e9" font-size="9.194" font-family="ExocetOTCECY-Medium, Exocet OTCECY" font-weight="500"><tspan x="0" y="0">N</tspan></text>
    </g>
  </g>
</svg>

</RouterLink>
    </div>
  </div>
  <header>

    <nav>
      <ul>
        <li>
          <RouterLink to="/day">
            <p>DAY QUEST</p>
          </RouterLink>
        </li>


        <li>
          <RouterLink to="/evening">
            <p>EVENING QUEST</p>
          </RouterLink>
        </li>
      </ul>
    </nav>

  </header> -->


  <body>
    <RouterView />

  </body>




</template>

<style>
body {
  background-color: #FFF6E9;
  display: flex;
  flex-direction: column;
}
h3 {
  font-family: var(--primary-font);
  font-size: 24px;
  color: var(--gold-color);
}

p {
  font-family: var(--secondary-font);
  font-size: 24px;
}
/* .home-svg-background {
  display: flex;
  justify-content: center;
  z-index: 200;
}

.home-svg {
  display: flex;
  width: 104px;
  height: 104px;
  justify-content: center;
  align-items: center;
  background-color: var(--black-color);
  position: absolute;
  z-index: 200;
  border-radius: 128px;
}

header {
  display: flex;
  justify-content: center;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1120px;
  height: 64px;
  background: var(--black-color);
  position: absolute;
  top: 0;
  z-index: 100;
  padding: 8px 0;
  mask: var(--mask);
  @media screen and (max-width: 768px) {
    width: 75%;
    height: 180px;

  }
}

nav svg {
  width: auto;
  height: 96px;

}

ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 84px;
  }
}

li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav a {
  text-decoration: none;
}

nav ul li p {
  color: var(--light-papirus);
  font-family: var(--secondary-font);
  font-size: 32px;
  font-weight: 600;
}

nav ul li p:hover {
  cursor: pointer;
  filter: brightness(90%);
  border-bottom: 2px solid var(--light-papirus);
} */

button:hover {
  cursor: pointer;
  filter: brightness(90%);
}

.gold-torn-paper-top {
  display: flex;
  height: 120px;
  width: 100%;
  background: url('../src/assets/img/gold-torn-paper-top-svg.svg') no-repeat;
  background-size: cover;
}

.gold-torn-paper-bottom {
  display: flex;
  height: 144px;
  width: 100%;
  background: url('../src/assets/img/gold-torn-paper-bottom-svg.svg') no-repeat;
  background-size: cover;
}


.beige-torn-paper-top {
  display: flex;
  height: 120px;
  width: 100%;
  background: url('../src/assets/img/beige-up.svg') no-repeat;
  background-size: cover;
}

.beige-torn-paper-bottom {
  display: flex;
  height: 144px;
  width: 100%;
  background: url('../src/assets/img/beige-bottom.svg') no-repeat;
  background-size: cover;
}

.grey-torn-paper-top {
  display: flex;
  height: 120px;
  width: 100%;
  background: url('../src/assets/img/grey-torn-paper-top-svg.svg') no-repeat;
  background-size: cover;
}

.grey-torn-paper-bottom {
  display: flex;
  height: 144px;
  width: 100%;
  background: url('../src/assets/img/grey-torn-paper-bottom-svg.svg') no-repeat;
  background-size: cover;
}

.light-torn-paper-top {
  display: flex;
  height: 120px;
  width: 100%;
  background: url('../src/assets/img/light-torn-paper-top-svg.svg') no-repeat;
  background-size: cover;
}

.purple-torn-paper-top {
  display: flex;
  height: 120px;
  width: 100%;
  background: url('../src/assets/img/purple-torn-paper-top-svg.svg') no-repeat;
  background-size: cover;
}

.purple-torn-paper-bottom {
  display: flex;
  height: 120px;
  width: 100%;
  background: url('../src/assets/img/purple-torn-paper-bottom-svg.svg') no-repeat;
  background-size: cover;
}

.red-torn-paper-top {
  display: flex;
  height: 80px;
  width: 100%;
  background: url('../src/assets/img/up-red-torn-paper.svg') no-repeat;
  background-size: cover;
}

.red-torn-paper-bottom {
  display: flex;
  height: 140px;
  width: 100%;
  background: url('../src/assets/img/bottom-red-torn-paper.svg') no-repeat;
  background-size: cover;
}


.silver-torn-paper-top {
  display: flex;
  height: 120px;
  width: 100%;
  background: url('../src/assets/img/silver-torn-paper-top.svg') no-repeat;
  background-size: cover;
}

.silver-torn-paper-bottom {
  display: flex;
  height: 120px;
  width: 100%;
  background: url('../src/assets/img/silver-torn-paper-bottom.svg') no-repeat;
  background-size: cover;
}




.logo {
  background-color: #7a7a7a;
  width: 30px;
  height: 30px;
}
</style>
