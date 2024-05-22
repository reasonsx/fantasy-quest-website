<template>
    <div class="silver-torn-paper-top" style="background-color: var(--black-color);"></div>
    <div class="map-container">
            <div class="map-content">
                <h1>Starting point</h1>
                <div class="location-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d565.441803217115!2d8.451494569653615!3d55.46672475856316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b212b3242d4fb%3A0x75e521797733a745!2sTorvet%2C%206700%20Esbjerg!5e0!3m2!1sro!2sdk!4v1715896013352!5m2!1sro!2sdk" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <RouterLink to="/"><button class="button-purple"><p>Go back to home page</p></button></RouterLink>
            </div>
            <div class="purple-torn-paper-top"></div>
        </div>
</template>

<script setup>

</script>

<style scoped>
h1{
        font-family: var(--primary-font);
        font-size: 100px;
    }
    p{
        font-family: var(--secondary-font);
        font-size: 20px;
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
    .map-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: var(--silver-color);
        color: var(--purple-color);
    }
    .map-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
    }
    .location-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;

        @media screen and (max-width: 768px){
            flex-direction: column; /* Stack elements vertically in a single column */
            margin-top: 20px;
            margin-bottom: 20px;
        }
    }
    iframe{
        width: 1120px;
        height: 560px;
        margin-right: 0px;

        @media screen and (max-width: 768px){
            width: 360px;
            height: 360px;
        }
    }
    @media screen and (max-width: 768px){
        h1{
            font-size: 48px;
        }
        p{
            font-size: 16px;
        }
        .map-container{
            flex-direction: column;
            
        }
        .map-content{
            width: 360px;
            margin-bottom: 60px;
            h1{
                margin-bottom: 30px;
            
            }
        }
        .map-section{
            flex-direction: column;
            
        }
    }
</style>