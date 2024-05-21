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
                    <div class="location-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d565.441803217115!2d8.451494569653615!3d55.46672475856316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b212b3242d4fb%3A0x75e521797733a745!2sTorvet%2C%206700%20Esbjerg!5e0!3m2!1sro!2sdk!4v1715896013352!5m2!1sro!2sdk" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
                    <RouterLink to="/"><button class="button-purple"><p>Go back to home page</p></button></RouterLink>
                </div>
                <div class="purple-torn-paper-top"></div>
            </div>
        </div>
    
    
    
        <footer>
        <div class="footer-container">
            <div class="footer-box">
                <h3>Opening hours</h3>
                <p>Day Quest</p>
                <p>10.00 - 14.30</p>
                <p>Evening Quest</p>
                <p>18.00 - 22.30</p>
            </div>
            <div class="footer-box">
                <h3>Admission</h3>
                <p>Day Quest</p>
                <p>DKK 159.13</p>
                <p>Evening Quest</p>
                <p>DKK 243.13</p>
            </div>
            <div class="footer-box">
                <h3>Contact</h3>
                <p>Telephone</p>
                <p>+45 76 16 20 00</p>
                <p>E-mail</p>
                <p>fantasyfestival@esbjerg.dk</p>
            </div>
            <div class="footer-box">
                <h3>Sponsors</h3>
                <p><a href="https://www.esbjerg.dk/" target="_blank">Esbjerg Kommune</a></p>
                <p><a href="https://oplev.esbjerg.dk/" target="_blank">Oplev Esbjerg</a></p>
                <p><a href="https://www.esbjergbibliotek.dk/" target="_blank">Esbjerg Kommunes Biblioteker</a></p>
            </div>
        </div>
        <p class="copyright">© 2024 Fantasy Festival</p>
        <div class="bottom-footer">
            <a href="https://www.instagram.com/fantasyfestivalen/" target="_blank"><svg width="24" height="24"
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.96 0H17.04C20.88 0 24 3.12 24 6.96V17.04C24 18.8859 23.2667 20.6562 21.9615 21.9615C20.6562 23.2667 18.8859 24 17.04 24H6.96C3.12 24 0 20.88 0 17.04V6.96C0 5.11409 0.733284 3.34379 2.03854 2.03854C3.34379 0.733284 5.11409 0 6.96 0ZM6.72 2.4C5.57426 2.4 4.47546 2.85514 3.6653 3.6653C2.85514 4.47546 2.4 5.57426 2.4 6.72V17.28C2.4 19.668 4.332 21.6 6.72 21.6H17.28C18.4257 21.6 19.5245 21.1449 20.3347 20.3347C21.1449 19.5245 21.6 18.4257 21.6 17.28V6.72C21.6 4.332 19.668 2.4 17.28 2.4H6.72ZM18.3 4.2C18.6978 4.2 19.0794 4.35804 19.3607 4.63934C19.642 4.92064 19.8 5.30218 19.8 5.7C19.8 6.09782 19.642 6.47936 19.3607 6.76066C19.0794 7.04197 18.6978 7.2 18.3 7.2C17.9022 7.2 17.5206 7.04197 17.2393 6.76066C16.958 6.47936 16.8 6.09782 16.8 5.7C16.8 5.30218 16.958 4.92064 17.2393 4.63934C17.5206 4.35804 17.9022 4.2 18.3 4.2ZM12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6ZM12 8.4C11.0452 8.4 10.1295 8.77928 9.45442 9.45442C8.77928 10.1295 8.4 11.0452 8.4 12C8.4 12.9548 8.77928 13.8705 9.45442 14.5456C10.1295 15.2207 11.0452 15.6 12 15.6C12.9548 15.6 13.8705 15.2207 14.5456 14.5456C15.2207 13.8705 15.6 12.9548 15.6 12C15.6 11.0452 15.2207 10.1295 14.5456 9.45442C13.8705 8.77928 12.9548 8.4 12 8.4Z"
                        fill="#FFF6E9" />
                </svg></a>
            <a href="https://www.facebook.com/fantasyfestivalen/" target="_blank"><svg width="24" height="24"
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 0C5.39999 0 0 5.38799 0 12.024C0 18.024 4.39199 23.004 10.128 23.904V15.504H7.07999V12.024H10.128V9.37199C10.128 6.35999 11.916 4.70399 14.664 4.70399C15.972 4.70399 17.34 4.93199 17.34 4.93199V7.89599H15.828C14.34 7.89599 13.872 8.81999 13.872 9.76799V12.024H17.208L16.668 15.504H13.872V23.904C16.6997 23.4574 19.2746 22.0146 21.1319 19.836C22.9892 17.6575 24.0064 14.8868 24 12.024C24 5.38799 18.6 0 12 0Z"
                        fill="#FFF6E9" />
                </svg></a>
        </div>
    </footer>
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
        color: var(--silver-color);
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
        .moon-container{
            flex-direction: column;

            
        }
        .moon-description{
            flex-direction: column;
            margin: 0 0 50px 0;
            width: 360px;
        }
        .moon-text{
            margin-left: 0;
        }
        .moon-svg{
            display: flex;
            justify-content: center;
            margin-bottom: 50px;
            img{
                width: 360px;
            }
        }
        .schedule-container{
            flex-direction: column;
        }
        .schedule-content{
            flex-direction: column;
            margin: 0 ;
            width: 360px;
        }
        .schedule-text{
            margin-right: 0;
        }
        .clock{
            svg{
                width: 360px;
            }
        }
        .card-container{
            flex-direction: column;
        }
        .card-content{
            flex-direction: column;
            margin:  60px 0;
            width: 360px;
        }
        .card{
            height: 250px;
        }
        .card-grid{
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
        }
        .nothing-here{
            display: none;
        }
        .figure-content{
            margin: 0 0 60px 0;
            width: 360px;
        }
        .figure-svg{
            svg{
                width: 180PX;
            
            }
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
    footer {
    width: 100%;
    height: auto;
    background-color: var(--purple-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.bottom-footer {
    width: 1120px;
    /* height: 64px; */
    display: flex;
    justify-content: center;
    gap: 16px;
    align-items: center;
    /* flex-direction: column; */
    margin: 0 0 24px 0;

    @media screen and (max-width: 768px) {
        width: 360px
    }

}
footer p {
    color: var(--light-papirus);
    font-family: var(--secondary-font);
    font-size: 24px;
    font-weight: 400;

}

.footer-container {
    width: 1120px;
    height: auto;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    padding: 0 0 24px 0;
    border-bottom: 1px solid var(--light-papirus);

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: auto;
    }

}

.footer-box {
    width: auto;
    height: auto;
    box-sizing: border-box;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 16px 0;
    }

}

.footer-box h3 {
    color: var(--light-papirus);
    font-family: var(--secondary-font);
    font-size: 32px;
    font-weight: 600;
}

.footer-box:nth-child(4) p {
    text-decoration: underline;
}

.footer-box a {
    color: var(--light-papirus);
    font-family: var(--secondary-font);
    font-size: 24px;
    font-weight: 400;
    text-decoration: none;

}

.copyright {
    color: var(--light-papirus);
    font-family: var(--secondary-font);
    font-size: 20px;
    font-weight: 400;
    margin: 16px 0;

}
</style>