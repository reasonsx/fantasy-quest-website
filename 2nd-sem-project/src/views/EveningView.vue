<script setup>
import Footer from '../assets/components/Footer.vue'
import EveningHero from '../assets/components/EveningQuest/EveningHero.vue'
import EveningMoon from '../assets/components/EveningQuest/EveningMoon.vue'
import EveningSchedules from '../assets/components/EveningQuest/EveningSchedules.vue'
import EveningCards from '../assets/components/EveningQuest/EveningCards.vue'
import EveningFigure from '../assets/components/EveningQuest/EveningFigure.vue'
import EveningMap from '../assets/components/EveningQuest/EveningMap.vue'
</script>

<template>

    <body>

        <EveningHero />
        <EveningMoon />
        <EveningSchedules />
        <EveningCards />
        <EveningFigure />
        <EveningMap />
        <Footer />

    </body>
</template>

<style scoped>
footer {
    background-color: var(--purple-color);
}

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
*/

</style>