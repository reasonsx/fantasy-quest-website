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
        <h2>CHOOSE YOUR SIDE</h2>
        <div class="portals-container">
            <div class="day-portal-container">
                <div class="portal-box"></div>
                    <button class="primary-button"><p>Buy Ticket</p></button>
            </div>
                    <img src="../assets/img/gold-sword-svg.svg" alt="">
                    <div class="evening-portal-container">
                        <div class="portal-box"></div>
                    </div>
        </div>
    </div>
        

<div class="about-background-container">
    <div class="grey-torn-paper-top"></div>
    <div class="about-container">
        <div class="about-box"></div>
        <h2>About</h2>
        <p>Embark on a magical journey at Fantasy Quest Esbjerg, part of the enchanting Fantasy Festival. Choose from two uniquely themed quests—Day Quest for families and Evening Quest for those seeking adventure under the stars. Each quest is infused with challenges and a rich narrative designed to test your bravery and wit. Join us for a day of mythical creatures, epic challenges, and heroic deeds. Whether with family or friends, come craft your story and become the hero Esbjerg needs. Register now and transform your world at Fantasy Quest Esbjerg!</p>
    </div>
</div>
        <div class="characters-background-container">
            <div class="gold-torn-paper-top"></div>
            <div class="characters-container"></div>
            <!-- <div class="gold-torn-paper-bottom"></div> -->
        </div>
<div class="discover-background-container">
    <div class="light-torn-paper-top"></div>
        <div class="discover-container">
            <h2>Discover</h2>
            <div class="discover-boxes-container">
                <div class="discover-box">
                    <div class="discover-box-top"></div>
                </div>
                <div class="discover-box">
                    <div class="discover-box-top"></div>
                </div>
                <div class="discover-box">
                    <div class="discover-box-top"></div>
                </div>
                <div class="discover-box">
                    <div class="discover-box-top"></div>
                </div>
            </div>
        </div>
    </div>



        <div class="quests-background-container">
            <div class="grey-torn-paper-top"></div>
            <div class="quests-container">
                <div class="quest-container"><div class="quest-box"></div><h2>Day Quest</h2><p>Experience an enchanting family adventure at the Day Quest during Fantasy Quest Esbjerg. Solve puzzles, conquer challenges, and become the heroes of Esbjerg in a fantasy world brought to life. Suitable for all ages, this immersive experience promises a day of magical fun and teamwork amidst the bustling Fantasy Festival.
            </p>
        </div>
                <div class="quest-container"><div class="quest-box"></div><h2>Evening Quest</h2><p>Step into the shadows and become the hero of a thrilling adventure during the Evening Quest at Fantasy Quest Esbjerg. Confront darkness, solve challenges, and save Esbjerg from evil forces as twilight descends. Join alone or with friends for an unforgettable journey under the stars.</p></div>
            </div>
            <div class="grey-torn-paper-bottom"></div>
        </div>
    </body>

</template>

<style>
.portals-background-container {
    height: auto;
    display: flex;
    flex-direction: column;
}
.portals-background-container h2 {
    color: var(--gold-color);
    text-align: center;
}
.portals-container {
    width: auto;
    display: flex;
    justify-content: space-evenly;
    padding: 0 10%;
}
.portals-container img {
    width: auto;
    height: 600px;

}

.day-portal-container {
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
  --mask: radial-gradient(32px at 32px 100%,#0000 98%,#000) -32px;
  -webkit-mask: var(--mask);
          mask: var(--mask);
          
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
    height: auto;
    background-color: var(--grey-color);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 64px 0;
}
.about-container h2 {
    color: #FFF6E9;
    margin: 24px 0;
    text-align: left;
    width: 1120px;
}
.about-container p {
    color: #FFF6E9;
    font-size: 24px;
    text-align: left;
    width: 1120px;
}
.about-box {
    width: 1120px;
    height: 560px;
    background-color: #FFF6E9;
    box-sizing: border-box;
    overflow: hidden;
}
.characters-background-container {
    width: 100%;
    height: auto;
    background-color: var(--grey-color);
    display: flex;
    flex-direction: column;
}

.characters-container {
    width: 100%;
    height: 256px;
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
    padding: 0 10%;
    margin: 32px 0 0 0;
}
.discover-container h2 {
    color: var(--gold-color);
    margin: 24px 0;
    text-align: center;
    margin: 32px 0 64px 0;
}

.discover-boxes-container {
    display: flex;
    justify-content: space-evenly;
    height: auto;
    margin: 0 0 128px 0;
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
    height: auto;
    background-color: var(--grey-color);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    justify-content: space-evenly;
    padding: 0 10%;
    @media screen and (max-width: 768px){
        flex-direction: column;
        
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
}
.quest-container h2 {
    color: #FFF6E9;
    margin: 24px 0;
    text-align: left;
}
.quest-container p {
    color: #FFF6E9;
    font-size: 24px;
    /* text-align: center; */
}
.quest-box {
    width: 544px;
    height: 306px;
    background-color: #FFF6E9;
}
</style>