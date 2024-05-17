<template>
    <body>
        <div class="hero-container">
            <div class="hero-text">
                <h1>EVENING QUEST</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
            </div>
            
        </div>
        <div class="purple-torn-paper-top"></div>
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
                <button class="button-silver"><p>Buy Ticket</p></button>
            </div>
        </div>
        <div class="grey-torn-paper-top"></div>
        <div class="schedule-container">
            <div class="schedule-content">
                <div class="schedule-text">
                    <h1>Schedules</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
        </div>
        
    </body>
</template>

<script setup>

</script>

<style scoped>
    .hero-container {
        background-image: url('../assets/img/hero-evening.jpg');
        background-size: cover;
        background-position: center;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--light-papirus);
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
        width: 180px;
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

</style>