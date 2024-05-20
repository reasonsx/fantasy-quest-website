<template>
    <body>
        <div class="hero-container">
            <div class="hero-text">
                <h1>EVENING QUEST</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
            </div>
            <div class="purple-torn-paper-top" style="position: absolute; bottom: 0;"></div>
        </div>
        
        <div class="moon-container">
            <div class="moon-description">
            <div class="moon-svg">
                <svg width="385" height="411" viewBox="0 0 385 411" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M361.118 321.08C320.359 338.057 274.526 338.148 233.701 321.333C192.875 304.517 160.402 272.173 143.425 231.415C126.447 190.656 126.356 144.823 143.171 103.998C159.987 63.1725 192.331 30.6991 233.09 13.7216C238.311 11.2246 245.802 8.50056 251.023 6.00356C210.116 -4.65195 166.8 -1.04891 128.216 16.2186C103.031 26.3246 80.1123 41.3467 60.7973 60.4077C41.4824 79.4686 26.1583 102.187 15.7198 127.235C5.28125 152.284 -0.0624871 179.161 0.000551292 206.297C0.0635897 233.433 5.53214 260.285 16.0869 285.285C26.6417 310.285 42.0712 332.931 61.4745 351.902C80.8778 370.874 103.866 385.789 129.097 395.778C154.328 405.767 181.297 410.629 208.428 410.081C235.559 409.533 262.309 403.585 287.116 392.585C328.811 375.874 363.289 345.013 384.499 305.417C377.344 311.534 369.497 316.791 361.118 321.08Z" fill="#C0C0C0"/>
                </svg>



            </div>
            <div class="moon-text">
                <h1>Lorem ipsum</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <a href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4" target="_blank"><button class="button-silver"><p>Buy Ticket</p></button></a>
            </div>
        </div>
        <div class="grey-torn-paper-top"></div>
        <div class="schedule-container">
            <div class="schedule-content">
                <div class="schedule-text">
                    <h1>Schedules</h1>
                    <p>Where: Torvet Esbjerg
                        <br>
                        When: September 14, 2024
                        <br>
                        Time: 18.00-22.30 (you can buy tickets and start your adventure every 5 minutes starting from 6 p.m. )
                        <br>
                        Duration: 1 hour 15 minutes
                        <br>
                        Price: 243.13 DKK per person
                    </p>
                    <a href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4" target="_blank"><button class="button-silver"><p>Buy Ticket</p></button></a>
                </div>
                <div class="clock">
                    <svg width="414" height="414" viewBox="0 0 414 414" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="207" cy="207" r="207" fill="#C0C0C0"/>
                    </svg>
                    
                </div>
            </div>
            
        </div>
        
        <div class="card-container">
            <div class="grey-torn-paper-bottom"></div>
            <div class="card-content">
                <h1>Get to know our characters</h1>
                <div class="card-grid">
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                </div>
            </div>
        </div>
        <div class="grey-torn-paper-top" style="background-color: var(--silver-color);"</div> 

        <!-- <div class="gold-torn-paper-bottom" style="background-color: var(--black-color);">we need a silver one here</div> -->
        <div class="figure-container">
            <div class="figure-content"> 
                <div class="nothing-here"></div>
                <div class="question-part">
                    <p>Brave enough to confront the night's horrors? <br>
                        Embark on the Evening Quest.</p>
                </div>
                <div class="figure-part">
                    <div class="figure-svg">
                        <svg width="222" height="351" viewBox="0 0 222 351" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="111.086" cy="175.134" rx="102" ry="180" transform="rotate(16.5951 111.086 175.134)" fill="#808080"/>
                        </svg>

                    </div>
                    <RouterLink to="/day"><button class="button-purple"><p>Take me there!</p></button></RouterLink>
                </div>
            </div>
            <RouterLink to="/"><button class="button-purple"><p>Go back to home page</p></button></RouterLink>
            <div class="purple-torn-paper-top"></div>
            different footer here
        </div>
    </div>
        
    </body>
</template>

<script setup>

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
        color: var(--light-papirus);
        position: relative;
    }
    h1{
        font-family: var(--primary-font);
        font-size: 100px;
    }
    p{
        font-family: var(--secondary-font);
        font-size: 20px;
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
    .moon-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #5F2945;
        color: var(--light-papirus);
    }
    .moon-description{
        width: 80%;
        display: flex;
        flex-direction: row;
        margin: 50px 0;
    }
    .moon-text{
        margin-left: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
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
    .schedule-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: var(--black-color);
        color: var(--light-papirus);
    }
    .schedule-content{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin: 50px 0;
    }
    .schedule-text{
        margin-right: 50px;
    }
    .card-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: var(--silver-color);
        h1{
            color: var(--black-color);
            margin-bottom: 50px;
        }
    }
    .card-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin: 50px 0;
    }
    .card-grid{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 50px;
        width: 100%;
    }
    .card{
        width: 100%;
        height: 500px;
        background-color: #5F2945;
    }
    .figure-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        background-color: var(--black-color);
        color: var(--light-papirus);
    }
    .figure-content{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin: 50px 0;
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
    .nothing-here{
        width: 40%;
    }
    .question-part{
        width: 30%;
        display: flex;
        background-color: #5F2945;
        border-radius: 30px;
        padding: 20px;
        margin-right: 40px;
        margin-bottom: 200px;

    }

</style>