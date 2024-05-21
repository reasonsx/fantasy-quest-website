<script setup>
import Footer from '../assets/components/Footer.vue'
import Portals from '../assets/components/Portals.vue';
</script>

<template>
    <div class="home">
        <Portals />
        <!-- <nav>
            <RouterLink to="/day">Day</RouterLink>
            <RouterLink to="/evening">Evening</RouterLink>
        </nav> -->
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



        <div class="grey-torn-paper-top"></div>
        <div class="about-background-container">
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
            <div class="characters-container"><p>In Esbjerg, a legend foretold that evil would come from the sea. To guard against this, the people built defenses and kept watch. In 1995, the sorcerer Gygaz the Wise enhanced this protection by merging four valiant warriors with the "Man by the Sea" sculptures, turning them into eternal guardians.<br><br>

Years of peace were shattered when dark clouds and a winged creature appeared over the sea. The statues awakened, calling for heroes to save Esbjerg. "We need heroes!" they cried.
</p> <img src="../assets/img/characters-main-page-svg.svg" alt=""></div>
            
        </div>
        <div class="gold-torn-paper-bottom"></div>
        <div class="discover-background-container">
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
                        <div class="discover-box-top"><img src="../assets/img/family-picture.jpg" alt=""></div>
                    </div>
                    <div class="discover-box">
                        <div class="discover-box-top"><img src="../assets/img/esbjerg-centrum.png" alt=""></div>
                    </div>
                </div>
            </div>
        </div>
            
            
<div class="grey-torn-paper-top"></div>
        <div class="quests-background-container">
            <div class="quests-container">
                <div class="quest-container">
                    <div class="quest-box"><img src="../assets/img/day-quest-main-page.jpg" alt=""></div>
                    <h2>Day Quest</h2>
                    <p>Experience an enchanting family adventure at the Day Quest during Fantasy Quest Esbjerg. Solve
                        puzzles, conquer challenges, and become the heroes of Esbjerg in a fantasy world brought to
                        life. Suitable for all ages, this immersive experience promises a day of magical fun and
                        teamwork amidst the bustling Fantasy Festival.
                    </p>
                    <div class="centered-button"><RouterLink to="/day"><button class="primary-button">READ MORE</button></RouterLink></div>
                </div>
                <div class="quest-container">
                    <div class="quest-box"><img src="../assets/img/night-quest-main-page.jpg" alt=""></div>
                    <h2>Evening Quest</h2>
                    <p>Step into the shadows and become the hero of a thrilling adventure during the Evening Quest at
                        Fantasy Quest Esbjerg. Confront darkness, solve challenges, and save Esbjerg from evil forces as
                        twilight descends. Join alone or with friends for an unforgettable journey under the stars.</p>
                    <div class="centered-button"><RouterLink to="/evening"><button class="primary-button">READ MORE</button></RouterLink></div>
                </div>
            </div>
        </div>
        <div class="grey-torn-paper-bottom"></div>

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
                        <p>Who can participate?</p>
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
        <Footer />
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
}
.primary-button:hover {
    background-color: var(--gold-hover);
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
    /* --mask: radial-gradient(32px at 32px 100%, #0000 98%, #000) -32px; */
    /* -webkit-mask: var(--mask); */
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
    background-color: var(--gold-color);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.characters-container {
    width: 1120px;
    height: 100%;
    background-color: var(--gold-color);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.characters-container p {
    color: var(--black-color);
    font-size: 24px;
    text-align: left;
    width: 1120px;
    font-weight: 600;

    @media screen and (max-width: 768px) {
        width: 360px;

    }
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
    width: 1130px;
    height: auto;
    /* background-color: var(--grey-color); */
    box-sizing: border-box;
    overflow: hidden;
    margin: 32px 0 0 0;
    padding: 0 5px;

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
    width: 1120px;
    overflow: hidden;
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


.accordion-label:hover {
    background-color: var(--gold-hover);
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
    background-color: var(--black-color);
}

</style>