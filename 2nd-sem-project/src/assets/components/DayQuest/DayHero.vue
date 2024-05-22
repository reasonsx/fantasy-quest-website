<template>
    <div class="hero-container">
            <div class="hero-text">
                <h1 style="text-align: center;">DAY QUEST</h1>
        
            </div>
            <div class="red-torn-paper-top" style="position: absolute; bottom: 0;"></div>
        </div>
</template>

<script setup>
</script>

<style scoped>
 h1{
        font-family: var(--primary-font);
        font-size: 80px;
    }
    p{
        font-family: var(--secondary-font);
        font-size: 20px;
    }
    @media screen and (max-width: 768px){
        h1{
            font-size: 48px;
        }
        p{
            font-size: 16px;
        }
    }
.hero-container {
        background-image: url('../../img/Fantasy1.jpg');
        background-size: cover;
        background-position: center;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--light-papirus);
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