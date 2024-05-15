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
        <button class="primary-button"><p>Buy Ticket</p></button>
      </div>

      <div class="portal-box"></div>
    </div>
    <div class="google-maps-box">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d584.793362608357!2d8.451821990246556!3d55.466236190699924!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b212b329048d3%3A0xdf9c6be4b900162c!2sChristian%20IX%20statue%2C%20Esbjerg!5e1!3m2!1spl!2sdk!4v1715781193207!5m2!1spl!2sdk"
        width="720" height="336" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div class="about-background-container">
    <div class="torn-paper-top"></div>



      <div class="about-container"></div>
      <div class="torn-paper-bottom"></div>
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
.torn-paper-top {
  display: flex;
  height: 120px;
  width: 100%;
  background: url('../src/assets/img/torn-paper-top-svg.svg') no-repeat;
  background-size: cover;
}
.torn-paper-bottom {
  display: flex;
  height: 144px;
  width: 100%;
  background: url('../src/assets/img/torn-paper-bottom-svg.svg') no-repeat;
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

.google-maps-box {
  position: relative;
  width: 736px;
  height: 352px;
  border: 8px solid var(--gold-color);
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
footer {
  background-color: #FFF6E9;
  height: 150px;
}

</style>
