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



  <footer>
        <div class="footer-container">
            <div class="footer-box">
                <h3>Opening hours</h3>
                <p>Day Quest</p>
                <p>10.00 - 14.30</p>
                <p>Evening Quest</p>
                <p>18.00 - 22.30</p>
            </div>
            <div class="footer-box">
                <h3>Admission</h3>
                <p>Day Quest</p>
                <p>DKK 159.13</p>
                <p>Evening Quest</p>
                <p>DKK 243.13</p>
            </div>
            <div class="footer-box">
                <h3>Contact</h3>
                <p>Telephone</p>
                <p>+45 76 16 20 00</p>
                <p>E-mail</p>
                <p>fantasyfestival@esbjerg.dk</p>
            </div>
            <div class="footer-box">
                <h3>Sponsors</h3>
                <p><a href="https://www.esbjerg.dk/" target="_blank">Esbjerg Kommune</a></p>
                <p><a href="https://oplev.esbjerg.dk/" target="_blank">Oplev Esbjerg</a></p>
                <p><a href="https://www.esbjergbibliotek.dk/" target="_blank">Esbjerg Kommunes Biblioteker</a></p>
            </div>
        </div>
        <p class="copyright">© 2024 Fantasy Festival</p>
        <div class="bottom-footer">
            <a href="https://www.instagram.com/fantasyfestivalen/" target="_blank"><svg width="24" height="24"
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.96 0H17.04C20.88 0 24 3.12 24 6.96V17.04C24 18.8859 23.2667 20.6562 21.9615 21.9615C20.6562 23.2667 18.8859 24 17.04 24H6.96C3.12 24 0 20.88 0 17.04V6.96C0 5.11409 0.733284 3.34379 2.03854 2.03854C3.34379 0.733284 5.11409 0 6.96 0ZM6.72 2.4C5.57426 2.4 4.47546 2.85514 3.6653 3.6653C2.85514 4.47546 2.4 5.57426 2.4 6.72V17.28C2.4 19.668 4.332 21.6 6.72 21.6H17.28C18.4257 21.6 19.5245 21.1449 20.3347 20.3347C21.1449 19.5245 21.6 18.4257 21.6 17.28V6.72C21.6 4.332 19.668 2.4 17.28 2.4H6.72ZM18.3 4.2C18.6978 4.2 19.0794 4.35804 19.3607 4.63934C19.642 4.92064 19.8 5.30218 19.8 5.7C19.8 6.09782 19.642 6.47936 19.3607 6.76066C19.0794 7.04197 18.6978 7.2 18.3 7.2C17.9022 7.2 17.5206 7.04197 17.2393 6.76066C16.958 6.47936 16.8 6.09782 16.8 5.7C16.8 5.30218 16.958 4.92064 17.2393 4.63934C17.5206 4.35804 17.9022 4.2 18.3 4.2ZM12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6ZM12 8.4C11.0452 8.4 10.1295 8.77928 9.45442 9.45442C8.77928 10.1295 8.4 11.0452 8.4 12C8.4 12.9548 8.77928 13.8705 9.45442 14.5456C10.1295 15.2207 11.0452 15.6 12 15.6C12.9548 15.6 13.8705 15.2207 14.5456 14.5456C15.2207 13.8705 15.6 12.9548 15.6 12C15.6 11.0452 15.2207 10.1295 14.5456 9.45442C13.8705 8.77928 12.9548 8.4 12 8.4Z"
                        fill="#FFF6E9" />
                </svg></a>
            <a href="https://www.facebook.com/fantasyfestivalen/" target="_blank"><svg width="24" height="24"
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 0C5.39999 0 0 5.38799 0 12.024C0 18.024 4.39199 23.004 10.128 23.904V15.504H7.07999V12.024H10.128V9.37199C10.128 6.35999 11.916 4.70399 14.664 4.70399C15.972 4.70399 17.34 4.93199 17.34 4.93199V7.89599H15.828C14.34 7.89599 13.872 8.81999 13.872 9.76799V12.024H17.208L16.668 15.504H13.872V23.904C16.6997 23.4574 19.2746 22.0146 21.1319 19.836C22.9892 17.6575 24.0064 14.8868 24 12.024C24 5.38799 18.6 0 12 0Z"
                        fill="#FFF6E9" />
                </svg></a>
        </div>
    </footer>
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
  background: url('../src/assets/img/up-red-torn-paper.png') no-repeat;
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



.logo {
  background-color: #7a7a7a;
  width: 30px;
  height: 30px;
}
footer {
    width: 100%;
    height: auto;
    background-color: var(--gold-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.bottom-footer {
    width: 1120px;
    /* height: 64px; */
    display: flex;
    justify-content: center;
    gap: 16px;
    align-items: center;
    /* flex-direction: column; */
    margin: 0 0 24px 0;

    @media screen and (max-width: 768px) {
        width: 360px
    }

}
footer p {
    color: var(--light-papirus);
    font-family: var(--secondary-font);
    font-size: 24px;
    font-weight: 400;

}

.footer-container {
    width: 1120px;
    height: auto;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    padding: 0 0 24px 0;
    border-bottom: 1px solid var(--light-papirus);

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: auto;
    }

}

.footer-box {
    width: auto;
    height: auto;
    box-sizing: border-box;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 16px 0;
    }

}

.footer-box h3 {
    color: var(--light-papirus);
    font-family: var(--secondary-font);
    font-size: 32px;
    font-weight: 600;
}

.footer-box:nth-child(4) p {
    text-decoration: underline;
}

.footer-box a {
    color: var(--light-papirus);
    font-family: var(--secondary-font);
    font-size: 24px;
    font-weight: 400;
    text-decoration: none;

}

.copyright {
    color: var(--light-papirus);
    font-family: var(--secondary-font);
    font-size: 20px;
    font-weight: 400;
    margin: 16px 0;

}
</style>
