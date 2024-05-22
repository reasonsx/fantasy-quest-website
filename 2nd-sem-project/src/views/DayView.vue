<script setup>
import Footer from '../assets/components/Footer.vue'
import DayHero from '../assets/components/DayQuest/DayHero.vue'
import DaySun from '../assets/components/DayQuest/DaySun.vue'
import DaySchedules from '../assets/components/DayQuest/DaySchedules.vue'
import DayCards from '../assets/components/DayQuest/DayCards.vue'
import DayFigure from '../assets/components/DayQuest/DayFigure.vue'
import DayMap from '../assets/components/DayQuest/DayMap.vue'
</script>

<template>

    <body>
        <DayHero />
        <DaySun />
        <DaySchedules />
        <DayCards />
        <DayFigure />
        <DayMap />
        <Footer />
    </body>

</template>



<style scoped>
/* h2 {
    font-family: 'Exocet', sans-serif;
    font-size: 40px;
    color: #A3883C;
    margin-bottom: 10px;

}
button {
    border-radius: 30px;
    background-color: #A3883C;
    border: none;
    color: #FFF6E9;
    text-align: start;
    font-size: 25px;
    font-family: Darker Grotesque;
    padding: 15px;
    padding-bottom: 17px;
    width: 200px;
    transition: all 0.5s;
    cursor: pointer;
    margin-top: 36px;


    @media screen and (max-width: 768px) {
        width: 170px;
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 30px;
    }
}
button {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
}
button:after {
    content: '»';
    position: absolute;
    opacity: 0;
    top: 14px;
    right: -20px;
    transition: 0.5s;
}
button:hover {
    padding-right: 24px;
    padding-left: 30px;
}
button:hover:after {
    opacity: 1;
    right: 30px;
} */

footer {
    background-color: var(--red-color);
}
</style>