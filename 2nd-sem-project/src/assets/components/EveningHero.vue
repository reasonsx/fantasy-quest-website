<template>
    <div class="hero-container">
            <div class="hero-text">
                <h1 style="text-align: center;">EVENING QUEST</h1>
                <p style="text-align: center;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
            </div>
            <div class="purple-torn-paper-top" style="position: absolute; bottom: 0;"></div>
        </div>
</template>

<script >
export default {
    name: 'EveningHero'
}
</script>

<style scoped>
.hero-container {
        background-image: url('../assets/img/hero_image-edited2.png');
        background-size: cover;
        background-position: center;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--silver-color);
        position: relative;
    }
    .hero-text{
        padding: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: top;
        align-items: center;
        flex-direction: column;
        width: 80%;
        margin-top: 80px;
    }
</style>