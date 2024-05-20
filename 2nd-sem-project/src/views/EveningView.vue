<template>
    <body>
        <div class="hero-container">
            <div class="hero-text">
                <h1 style="text-align: center;">EVENING QUEST</h1>
                <p style="text-align: center;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
            </div>
            <div class="purple-torn-paper-top" style="position: absolute; bottom: 0;"></div>
        </div>
        
        <div class="moon-container">
            <div class="moon-description">
                <div class="moon-svg">
                    <img src="../assets/img/moon.svg" alt="Moon">
                </div>
                <div class="moon-text">
                    <h1>Lorem ipsum</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <a href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4" target="_blank"><button class="button-silver"><p>Buy Ticket</p></button></a>
                </div>
            </div>
        </div>
        <div class="grey-torn-paper-top" style="background-color: var(--purple-color);"></div>
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
            
            <div class="silver-torn-paper-top"></div>
            <div class="map-container">
                <div class="map-content">
                    <h1>Starting point</h1>
                    <div class="map-section">
                        
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d565.441803217115!2d8.451494569653615!3d55.46672475856316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b212b3242d4fb%3A0x75e521797733a745!2sTorvet%2C%206700%20Esbjerg!5e0!3m2!1sro!2sdk!4v1715896013352!5m2!1sro!2sdk"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <img src="../assets/img/Malice.png" class="figure" alt="Figure">
                    </div>
                    <RouterLink to="/"><button class="button-purple"><p>Go back to home page</p></button></RouterLink>
                </div>
                <div class="purple-torn-paper-top"></div>
                purple footer here
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
        background-color: var(--purple-color);
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
        grid-template-columns: repeat(5, 1fr);
        gap: 50px;
        width: 100%;
    }
    .card{
        width: 100%;
        height: 400px;
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
    .map-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: var(--silver-color);
        color: var(--light-papirus);
    }
    .map-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
    }
    .map-section{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    iframe{
        width: 60%;
        height: 500px;
        margin-right: 50px;
        border: 10px solid var(--purple-color);
    }
    @media (max-width: 700px){
        h1{
            font-size: 48px;
        }
        p{
            font-size: 16px;
        }
        .moon-container{
            flex-direction: column;
            
        }
        .moon-description{
            flex-direction: column;
            margin: 0 0 50px 0;
        }
        .moon-svg{
            display: flex;
            justify-content: center;
            margin-bottom: 50px;
        }
        .schedule-container{
            flex-direction: column;
        }
        .schedule-content{
            flex-direction: column;
            margin: 0 ;
        }
        .schedule-text{
            margin-right: 0;
        }
        .card-container{
            flex-direction: column;
        }
        .card-content{
            flex-direction: column;
            margin:  60px 0;
        }
        .card-grid{
            grid-template-columns: repeat(2, 1fr);
        }
        .nothing-here{
            display: none;
        }
        .figure-content{
            margin: 0 0 60px 0;
        }
        .question-part{
            width: 50%;
        }
        .figure-part{
            width: 50%;
        }
        .map-container{
            flex-direction: column;
            
        }
        .map-content{
            margin-bottom: 60px;
        }
        .map-section{
            flex-direction: column;
            
        }
        iframe{
            width: 100%;
            margin-right: 0;
        }


    }

</style>