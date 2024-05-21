<script setup>
import Footer from '../assets/components/Footer.vue'
import EveningHero from '../assets/components/EveningHero.vue'
import EveningMoon from '../assets/components/EveningMoon.vue'
import EveningSchedules from '../assets/components/EveningSchedules.vue'
import EveningCards from '../assets/components/EveningCards.vue'
import EveningFigure from '../assets/components/EveningFigure.vue'
import EveningMap from '../assets/components/EveningMap.vue'
</script>

<template>
    <body>
        
        <EveningHero />
        <EveningMoon />
        <EveningSchedules/>
        <EveningCards/>
        <EveningFigure/>
        <EveningMap />        
        <Footer />   
    
    </body>
</template>

<style scoped>
    /* h1{
        font-family: var(--primary-font);
        font-size: 100px;
    }
    p{
        font-family: var(--secondary-font);
        font-size: 20px;
    }
    .button-silver {
        background-color: var(--silver-color);
        width: auto;
        padding: 10px 40px;
        height: 48px;
        border-radius: 64px;
        border: none;
        margin-top: 24px;
    }
    .button-purple {
        background-color: #5F2945;
        color: var(--light-papirus);
        width: auto;
        padding: 10px 40px;
        height: 48px;
        border-radius: 64px;
        border: none;
        margin-top: 24px;
    }
    @media screen and (max-width: 768px){
        h1{
            font-size: 48px;
        }
        p{
            font-size: 16px;
        }
    } */
    footer{
        background-color: var(--purple-color);
    }
</style>