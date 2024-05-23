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

footer {
    background-color: var(--red-color);
}
</style>