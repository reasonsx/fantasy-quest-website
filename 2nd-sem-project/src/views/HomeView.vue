<script setup>
import Footer from '../assets/components/Footer.vue'
import HomeHero from '../assets/components/Home/HomeHero.vue';
import HomeAbout from '../assets/components/Home/HomeAbout.vue';
import HomeCharacters from '../assets/components/Home/HomeCharacters.vue';
import HomeDiscover from '../assets/components/Home/HomeDiscover.vue';
import HomeQuests from '../assets/components/Home/HomeQuests.vue';
import HomeFaq from '../assets/components/Home/HomeFaq.vue';
</script>

<template>

    <body>
        <HomeHero />
        <HomeAbout />
        <HomeCharacters />
        <HomeDiscover />
        <HomeQuests />
        <HomeFaq />
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

/* 

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
    mask: var(--mask);

    @media screen and (max-width: 768px) {
        width: 164px;
        height: 280px;
        --mask: radial-gradient(16px at 16px 100%, #0000 98%, #000) -16px;
    }

} */

/* .about-background-container {
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
} */

/* .characters-background-container {
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

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        width: 360px;
    }
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
} */
/* 
.discover-background-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.discover-container {
    width: 1130px;
    height: auto;
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

} */
/* 
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
} */

/* .accordion-container {
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
} */

footer {
    background-color: var(--black-color);
}
</style>