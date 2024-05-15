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

    <div class="portals-container">
      <div class="day-portal-container">
        <div class="portal-box"></div>
        <button class="primary-button">
          <p>Buy Ticket</p>
        </button>
      </div>

      <div class="portal-box"></div>
    </div>


    <div class="about-background-container">
      <div class="gold-torn-paper-top"></div>
      <div class="about-container"></div>
      <div class="gold-torn-paper-bottom"></div>
    </div>

    <div class="discover-container">
      <div class="discover-boxes-container">
        <div class="discover-box"><div class="discover-box-top"></div></div>
        <div class="discover-box"><div class="discover-box-top"></div></div>
        <div class="discover-box"><div class="discover-box-top"></div></div>
        <div class="discover-box"><div class="discover-box-top"></div></div>
      </div>
    </div>



    <div class="quests-background-container">
      <div class="grey-torn-paper-top"></div>
      <div class="quests-container"></div>
      <div class="grey-torn-paper-bottom"></div>
    </div>
  </body>



  <footer></footer>
</template>

<style>
body {
  /* background-image: url('../src/assets/img/background-svg.svg'); */
  background-color: #FFF6E9;
  display: flex;
  flex-direction: column;
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

.logo {
  background-color: #7a7a7a;
  width: 30px;
  height: 30px;
}

.portals-container {
  width: 1120px;
  display: flex;
  justify-content: space-between;
  margin: 10px;

}

.day-portal-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.portal-box {
  position: relative;
  width: 352px;
  height: 560px;
  background-color: #ffffff;
  border-radius: 176px 176px 0 0;
  border: 12px solid var(--gold-color);
  box-sizing: border-box;
  overflow: hidden;

}


.primary-button {
  background-color: var(--gold-color);
  width: 180px;
  height: 48px;
  border-radius: 64px;
  border: none;
  margin-top: 24px;

  p {
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;

  }
}

.button-text {
  font-family: 'Dark Grotesque', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

.about-background-container {
  width: 100%;
  height: auto;
  background-color: #FFF6E9;
  display: flex;
  flex-direction: column;
}

.about-container {
  width: 100%;
  height: 560px;
  background-color: var(--gold-color);
  box-sizing: border-box;
  overflow: hidden;
}
.discover-container {
  width: 100%;
  height: auto;
  /* background-color: var(--grey-color); */
  box-sizing: border-box;
  overflow: hidden;
}
.discover-boxes-container {
  display: flex;
  justify-content: space-evenly;
  height: auto;
  margin: 128px 0;
}
.discover-box {
  width: 256px;
  height: 384px;
  background-color: #FFF6E9;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0px 4px 32px -8px #3b3526;
}
.discover-box-top {
  width: 256px;
  height: 256px;
  background-color: var(--grey-color);

}
.quests-container {
  width: 100%;
  height: 560px;
  background-color: var(--grey-color);
  box-sizing: border-box;
  overflow: hidden;
}

footer {
  background-color: #FFF6E9;
  height: 150px;
}
</style>
