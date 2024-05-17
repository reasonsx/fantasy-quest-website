<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <ul>
      <li class="logo"></li>
      <li>
        <p>Fantasy Quest Esbjerg</p>
      </li>
    </ul>

  </header>

  <body>
    <RouterView />

   
  </body>



  <footer></footer>
</template>

<style>
body {
  background-color: #FFF6E9;
  display: flex;
  flex-direction: column;
}
h2 {
    font-family: var(--primary-font);
    font-size: 48px;
    color: var(--gold-color);
}
p {
  font-family: var(--secondary-font);
  font-size: 24px;
}

ul {
  display: flex;
  margin: 10px;
  align-items: center;
}

li {
  list-style-type: none;
  margin: 10px;

}
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

.logo {
  background-color: #7a7a7a;
  width: 30px;
  height: 30px;
}
footer {
  background-color: var(--gold-color);
  height: 96px;
}
</style>
