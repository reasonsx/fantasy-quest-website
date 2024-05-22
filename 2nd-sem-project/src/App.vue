<script setup>
import { RouterLink, RouterView } from 'vue-router'
import DayView from './views/DayView.vue'
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><RouterLink to="/day"><p>DAY QUEST</p></RouterLink></li>
        <li><RouterLink to="/evening"><p>EVENING QUEST</p></RouterLink></li>
      </ul>
    </nav>
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

h3 {
    font-family: var(--primary-font);
    font-size: 24px;
    color: var(--gold-color);
}
p {
  font-family: var(--secondary-font);
  font-size: 24px;
}
header {
  display: flex;
  justify-content: center;
  /* height: 96px; */
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 64px;
  /* background: var(--black-color); */
  background: rgba(40, 42, 46, 0.75);
  mask: var(--mask);
  position: fixed;
  top: 0;
  z-index: 100;
@media screen and (max-width: 768px){
  width: 100%;
  mask: none;
  height: 96px;
  
}
}
ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 768px){
    flex-direction: column;
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
