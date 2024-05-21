<script setup>
import Footer from '../assets/components/Footer.vue'
import EveningHero from '../assets/components/EveningHero.vue'
import EveningMoon from '../assets/components/EveningMoon.vue'
import EveningSchedules from '../assets/components/EveningSchedules.vue'
import EveningCards from '../assets/components/EveningCards.vue'
import EveningFigure from '../assets/components/EveningFigure.vue'
import EveningMap from '../assets/components/EveningMap.vue'
</script>

<template>
    <body>
        
        <EveningHero />
        <EveningMoon />
        <EveningSchedules/>
        <EveningCards/>
        <EveningFigure/>
        <EveningMap />        
        <Footer />   
    
    </body>
</template>

<style scoped>
    /* h1{
        font-family: var(--primary-font);
        font-size: 100px;
    }
    p{
        font-family: var(--secondary-font);
        font-size: 20px;
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