<template>
    <div class="hero-container">
            <div class="hero-text">
                <h1 style="text-align: center;">EVENING QUEST</h1>
                <!-- <p style="text-align: center;">When twilight begins to descend over Esbjerg, the level of difficulty in the Evening Quest is turned up. Now you really have to think creatively and solve tasks that require both courage, cooperation and ingenuity in order for you to complete the quest and save Esbjerg. If you love solving puzzles and cracking codes, don't miss out on this ultimate experience. We send you and your friends on your ultimate adventure in Esbjerg's streets and alleys. Here you will have to collaborate and devise new solutions to complete the AftenQuest.</p> -->
        
            </div>
            <div class="purple-torn-paper-top" style="position: absolute; bottom: 0;"></div>
        </div>
</template>

<script setup>
</script>

<style scoped>
 h1{
        font-family: var(--primary-font);
        font-size: 80px;
        color: var(--light-papirus);
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
        background-image: url('../../img/hero_image-edited2.png');
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