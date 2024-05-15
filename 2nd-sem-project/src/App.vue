<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <ul>
      <li class="logo"></li>
      <li><p>Fantasy Quest Esbjerg</p></li>
    </ul>

  </header>
  <body>
    <RouterView />
  </body>

  

  <footer></footer>
</template>

<style>
body { 
  background-image: url('../src/assets/img/background-svg.svg'); 
}
p {
  font-family: 'Dark Grotesque', sans-serif;
  font-size: 20px;
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
.logo {
  background-color: #7a7a7a;
  width: 30px;
  height: 30px;
  
}
footer {
  background-color: #7a7a7a;
  height: 150px;
  
}
</style>
