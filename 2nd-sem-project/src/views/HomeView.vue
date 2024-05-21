<script setup>
import Portals from '../assets/components/Portals.vue';
</script>

<template>
    <div class="home">
        <Portals />
        <nav>
            <RouterLink to="/day">Day</RouterLink>
            <RouterLink to="/evening">Evening</RouterLink>
            <!-- divs of the portals  -->
        </nav>
    </div>

    <body>

        <div class="portals-background-container">
            <h2>CHOOSE YOUR ADVENTURE</h2>
            <div class="portals-container">
                <div class="day-portal-container">
                    <RouterLink to="/day">
                        <div class="portal-box"></div>
                    </RouterLink>
                    <a href="https://www.universe.com/events/family-quest-dagquest-tickets-C6PYX3" target="_blank"><button class="primary-button">BUY
                            TICKET</button></a>
                </div>
                <img src="../assets/img/gold-sword-svg.svg" alt="">
                <div class="evening-portal-container">
                    <RouterLink to="/evening">
                        <div class="portal-box"></div>
                    </RouterLink>
                    <a href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4" target="_blank"><button class="primary-button">BUY TICKET</button></a>
                </div>
            </div>
        </div>




        <div class="about-background-container">
            <div class="grey-torn-paper-top"></div>
            <div class="about-container">
                <div class="about-box"></div>
                <h2>About</h2>
                <p>Embark on a magical journey at Fantasy Quest Esbjerg, part of the enchanting Fantasy Festival. Choose
                    from two uniquely themed quests—Day Quest for families and Evening Quest for those seeking adventure
                    under the stars. Each quest is infused with challenges and a rich narrative designed to test your
                    bravery and wit. Join us for a day of mythical creatures, epic challenges, and heroic deeds. Whether
                    with family or friends, come craft your story and become the hero Esbjerg needs. Register now and
                    transform your world at Fantasy Quest Esbjerg!</p>
            </div>
        </div>
        <div class="characters-background-container">
            <div class="gold-torn-paper-top"></div>
            <div class="characters-container"><img src="../assets/img/characters-main-page-svg.svg" alt=""></div>
            <!-- <div class="gold-torn-paper-bottom"></div> -->
        </div>
        <div class="discover-background-container">
            <div class="light-torn-paper-top"></div>
            <div class="discover-container">
                <h2>Discover</h2>
                <div class="discover-boxes-container">
                    <div class="discover-box">
                        <div class="discover-box-top"><img src="../assets/img/Lakse_frontpage.jpg" alt=""></div>
                        <h3>Lakserytteren</h3>
                    </div>
                    <div class="discover-box">
                        <div class="discover-box-top"><img src="../assets/img/professional-actors.png" alt=""></div>
                    </div>
                    <div class="discover-box">
                        <div class="discover-box-top"><img src="../assets/img/realtime-music.jpg" alt=""></div>
                    </div>
                    <div class="discover-box">
                        <div class="discover-box-top"><img src="../assets/img/esbjerg-centrum.png" alt=""></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="quests-background-container">
            <div class="black-and-light-torn-paper-top"></div>
            <div class="quests-container">
                <div class="quest-container">
                    <div class="quest-box"><img src="../assets/img/day-quest-main-page.jpg" alt=""></div>
                    <h2>Day Quest</h2>
                    <p>Experience an enchanting family adventure at the Day Quest during Fantasy Quest Esbjerg. Solve
                        puzzles, conquer challenges, and become the heroes of Esbjerg in a fantasy world brought to
                        life. Suitable for all ages, this immersive experience promises a day of magical fun and
                        teamwork amidst the bustling Fantasy Festival.
                    </p>
                    <div class="centered-button"><button class="primary-button">READ MORE</button></div>
                </div>
                <div class="quest-container">
                    <div class="quest-box"><img src="../assets/img/night-quest-main-page.jpg" alt=""></div>
                    <h2>Evening Quest</h2>
                    <p>Step into the shadows and become the hero of a thrilling adventure during the Evening Quest at
                        Fantasy Quest Esbjerg. Confront darkness, solve challenges, and save Esbjerg from evil forces as
                        twilight descends. Join alone or with friends for an unforgettable journey under the stars.</p>
                    <div class="centered-button"><button class="primary-button">READ MORE</button></div>
                </div>
            </div>
            <div class="grey-light-torn-paper-bottom"></div>
        </div>

        <div class="accordion-container">
            <h2>FAQ</h2>
            <div class="accordion">
                <div class="faq">
                    <input type="checkbox" id="section-1" class="accordion-input">
                    <label for="section-1" class="accordion-label">
                        <p>What is Fantasy Quest Esbjerg?</p>
                    </label>
                    <div class="accordion-content">
                        <p>Fantasy Quest Esbjerg is an immersive, magical experience that blends theater, role-playing,
                            and the timeless battle between good and evil. Participants embark on a quest filled with
                            challenges and puzzles, meeting magical creatures and characters along the way.</p>
                    </div>
                </div>
                <div class="faq">
                    <input type="checkbox" id="section-2" class="accordion-input">
                    <label for="section-2" class="accordion-label">
                        <p>Who can participate in Fantasy Quest Esbjerg?</p>
                    </label>
                    <div class="accordion-content">
                        <p>The quest is designed for families and friends. The Family Quest is suitable for participants
                            aged 7 and up, while the Evening Quest is geared towards those who enjoy solving complex
                            puzzles and mysteries.</p>
                    </div>
                </div>
                <div class="faq">
                    <input type="checkbox" id="section-3" class="accordion-input">
                    <label for="section-3" class="accordion-label">
                        <p>What is the story behind Fantasy Quest Esbjerg?</p>
                    </label>
                    <div class="accordion-content">
                        <p>The story revolves around the legend that evil would come from the sea. In 1995, the sorcerer
                            Gygaz the Wise created a magical defense, incorporating four heroes into the statues "Man by
                            the Sea" to guard Esbjerg. When mysterious events start to happen, the statues awaken,
                            calling for heroes to help fight the emerging evil and close the portals to other worlds.
                        </p>
                    </div>
                </div>
                <div class="faq">
                    <input type="checkbox" id="section-4" class="accordion-input">
                    <label for="section-4" class="accordion-label">
                        <p>What should I bring to the quest?</p>
                    </label>
                    <div class="accordion-content">
                        <p>Bring comfortable clothing, suitable for walking around the streets of Esbjerg. If you choose
                            to dress up, ensure your costume is practical for movement and weather conditions.</p>
                    </div>
                </div>
                <div class="faq">
                    <input type="checkbox" id="section-5" class="accordion-input">
                    <label for="section-5" class="accordion-label">
                        <p>What's the difference between the quests? Can I join both?</p>
                    </label>
                    <div class="accordion-content">
                        <p>The Family Quest is designed for families with children aged 7 and up, featuring easier tasks
                            that kids can help solve. The Evening Quest, designed by Dystopia, is more challenging and
                            scary, perfect for those who enjoy a tougher, more thrilling adventure. Yes, you can join
                            both quests, but you will need to purchase separate tickets for each.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="grey-torn-paper-top"></div>
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
                    <p><a href="https://www.universe.com/events/family-quest-dagquest-tickets-C6PYX3"
                            target="_blank">Day Quest</a></p>
                    <p>DKK 159.13</p>
                    <p><a href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4"
                            target="_blank">Evening Quest</a></p>
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
    </body>
</template>

<style scoped>
.centered-button {
    display: flex;
    justify-content: center;
}

.primary-button {
    background-color: var(--gold-color);
    width: 180px;
    height: 48px;
    border-radius: 64px;
    border: none;
    margin-top: 24px;
    letter-spacing: 2px;
    font-weight: 600;
    color: var(--black-color);

    @media screen and (max-width: 768px) {
        /* width: 120px;
        height: 32px;
        font-size: px;
        margin-top: 16px; */

    }
}

.portals-background-container {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.portals-background-container h2 {
    color: var(--gold-color);
    text-align: center;
}

.portals-container {
    width: 1120px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        /* flex-direction: column; */
        /* align-items: center; */
        width: 360px;

    }
}

.portals-container img {
    width: auto;
    height: 600px;

    @media screen and (max-width: 768px) {
        display: none;

    }

}

.day-portal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.evening-portal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.portal-box {
    position: relative;
    width: 352px;
    height: 600px;
    background-color: var(--gold-color);
    border-radius: 176px 176px 0 0;
    border: 12px solid var(--gold-color);
    box-sizing: border-box;
    overflow: hidden;
    --mask: radial-gradient(32px at 32px 100%, #0000 98%, #000) -32px;
    -webkit-mask: var(--mask);
    mask: var(--mask);

    @media screen and (max-width: 768px) {
        width: 164px;
        height: 280px;
        /* border-radius: 90px 90px 0 0; */
        /* border: 6px solid var(--gold-color); */
        --mask: radial-gradient(16px at 16px 100%, #0000 98%, #000) -16px;
        /* -webkit-mask: var(--mask); */
        /* mask: var(--mask); */
    }

}

.about-background-container {
    width: 100%;
    height: auto;
    background-color: var(--black-color);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.about-container {
    width: 1120px;
    height: auto;
    background-color: var(--black-color);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 0 80px 0;

    @media screen and (max-width: 768px) {
        width: 360px;
    }
}

.about-container h2 {
    color: #FFF6E9;
    margin: 24px 0;
    text-align: left;
    width: 100%;

}

.about-container p {
    color: #FFF6E9;
    font-size: 24px;
    text-align: left;
    width: 1120px;

    @media screen and (max-width: 768px) {
        width: 360px;

    }
}

.about-box {
    width: 1120px;
    height: 560px;
    background-color: var(--light-papirus);
    box-sizing: border-box;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        width: 360px;
        height: 180px;


    }
}

.characters-background-container {
    width: 100%;
    height: auto;
    background-color: var(--black-color);
    display: flex;
    flex-direction: column;
}

.characters-container {
    width: 100%;
    height: 100%;
    background-color: var(--gold-color);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.characters-container img {
    width: auto;
    height: 400px;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        width: 360px;
        height: auto;

    }
}

.discover-background-container {
    width: 100%;
    height: auto;
    /* background-color: var(--black-color); */
    display: flex;
    flex-direction: column;
    align-items: center;
}

.discover-container {
    width: 1120px;
    height: auto;
    /* background-color: var(--grey-color); */
    box-sizing: border-box;
    overflow: hidden;
    margin: 32px 0 0 0;

    @media screen and (max-width: 768px) {
        width: 360px;

    }
}

.discover-container h2 {
    color: var(--gold-color);
    margin: 24px 0;
    text-align: center;
}

.discover-boxes-container {
    display: flex;
    justify-content: space-between;
    height: auto;
    margin: 0 0 128px 0;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 32px;

    }
}

.discover-box {
    width: 256px;
    height: 384px;
    background-color: var(--light-papirus);
    box-sizing: border-box;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.discover-box h3 {
    color: var(--gold-color);
    margin: 24px 0;
    text-align: center;
}

.discover-box-top {
    width: 256px;
    height: 256px;
    background-color: var(--black-color);

}

.discover-box-top img {
    width: 256px;
    height: 256px;
    object-fit: cover;

}

.quests-background-container {
    width: 100%;
    height: auto;
    background-color: var(--black-color);
    display: flex;
    flex-direction: column;
    align-items: center;

}

.quests-container {
    width: 1120px;
    height: auto;
    background-color: var(--black-color);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    padding: 64px 0 0 0;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        width: 360px;
    }
}

.quest-container {
    width: 544px;
    height: auto;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin-bottom: 64px;

    @media screen and (max-width: 768px) {
        width: 360px;

    }

}

.quest-container h2 {
    color: var(--light-papirus);
    margin: 24px 0;
    text-align: left;
    /* @media screen and (max-width: 768px){ */
    /* margin: 16px 0; */

    /* } */
}

.quest-container p {
    color: var(--light-papirus);
    font-size: 24px;
    height: 196px;

    @media screen and (max-width: 768px) {
        height: auto;

    }
}

.quest-box {
    width: 544px;
    height: 306px;
    background-color: var(--light-papirus);

    @media screen and (max-width: 768px) {
        width: 360px;
        height: 180px;

    }

}

.quest-box img {
    width: 544px;
    height: 306px;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        width: 360px;
        height: 180px;

    }
}

.accordion-container {
    width: 100%;
    height: auto;
    background-color: var(--light-papirus);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 64px 0;
}

.accordion-container h2 {
    color: var(--gold-color);
    margin: 64px 0 16px 0;
    text-align: center;
}

.accordion {
    /* margin: 128px 0; */
    width: 1120px;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
    overflow: hidden;

    /* border: 4px solid var(--light-papirus); */
    @media screen and (max-width: 768px) {
        width: 360px;

    }
}

.accordion-label,
.accordion-content {
    padding: 14px 20px;
}

.accordion-label {
    height: 64px;
    display: block;
    color: var(--light-papirus);
    background-color: var(--gold-color);
    /* border: 4px solid var(--gold-color); */
    font-weight: bold;
    cursor: pointer;
    position: relative;
    transition: background-color 0.1s;
    margin-top: 16px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media screen and (max-width: 768px) {
        height: auto;

    }

}


.accordion-label .accordion-label:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

label:hover {
    cursor: pointer;
}

.accordion-content {
    background-color: var(--gold-color);
    color: var(--light-papirus);
    line-height: 1.6;
    font-size: 0.85em;
    display: none;
}

.accordion-input {
    display: none;
}

.accordion-input:checked~.accordion-content {
    display: block;
}

footer {
    width: 100%;
    height: auto;
    background-color: var(--black-color);
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

.footer-box:nth-child(4) a {
    text-decoration: underline;
}

.footer-box:nth-child(2) a {
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