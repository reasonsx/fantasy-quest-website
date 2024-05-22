<template>
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
                    <a href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4" target="_blank"><button class="primary-button">BUY TICKET</button></a>
                </div>
                <div class="clock">
                    <svg width="414" height="414" viewBox="0 0 414 414" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="207" cy="207" r="207" fill="#C0C0C0"/>
                    </svg>
                    
                </div>
            </div>
            
        </div>
</template>

<script setup>

</script>

<style scoped>
.primary-button {
    background-color: var(--purple-color);
    width: auto;
    height: 48px;
    border-radius: 64px;
    border: none;
    margin-top: 24px;
    letter-spacing: 2px;
    font-weight: 600;
    color: var(--light-papirus);
    padding: 0 40px;
}

.primary-button:hover {
    background-color: #853960;
}
    h1{
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
        justify-content: space-between;
        align-items: center;
        width: 80%;
        margin: 50px 0;
    }
    .schedule-text{
        margin-right: 50px;
    }
    @media screen and (max-width: 768px){
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
        h1{
            font-size: 48px;
        }
        p{
            font-size: 16px;
        }
    }
</style>