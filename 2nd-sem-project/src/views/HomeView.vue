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

footer {
    background-color: var(--black-color);
}
</style>