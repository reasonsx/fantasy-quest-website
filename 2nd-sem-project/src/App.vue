<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import DayView from './views/DayView.vue'
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
h3 {
    font-family: var(--primary-font);
    font-size: 24px;
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

.red-torn-paper-top{
  display: flex;
  height: 80px;
  width: 100%;
  background: url('../src/assets/img/up-red-torn-paper.svg') no-repeat;
  background-size: cover;
}

.red-torn-paper-bottom{
  display: flex;
  height: 120px;
  width: 100%;
  background: url('../src/assets/img/bottom-red-torn-paper.svg') no-repeat;
  background-size: cover;
}
.black-and-light-torn-paper-top{
  display: flex;
  height: 120px;
  width: 100%;
  background: url('../src/assets/img/grey-light-torn-paper-top-svg.svg') no-repeat;
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
.grey-light-torn-paper-bottom {
  display: flex;
  height: 140px;
  width: 100%;
  background: url('../src/assets/img/grey-light-torn-paper-bottom-svg.svg') no-repeat;
  background-size: cover;
  @media screen and (max-width: 768px) {
    height: 64px;
    
  }

}



.logo {
  background-color: #7a7a7a;
  width: 30px;
  height: 30px;
}

</style>
