

<template>
    <div class="moon-container">
            <div class="moon-description">
                <div class="moon-svg">
                    <img src="../../img/moon.svg" alt="Moon">
                </div>
                <div class="moon-text">
                    <h1>Lorem ipsum</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <a href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4" target="_blank"><button class="primary-button">BUY TICKET</button></a>
                </div>
            </div>
        </div>
</template>

<script setup>
</script>

<style scoped>
.primary-button {
    background-color: var(--light-papirus);
    width: auto;
    height: 48px;
    border-radius: 64px;
    border: none;
    margin-top: 24px;
    letter-spacing: 2px;
    font-weight: 600;
    color: var(--purple-color);
    padding: 0 40px;
}

.primary-button:hover {
    background-color: #e6e6e6;
}
 h1{
        font-family: var(--primary-font);
        font-size: 100px;
    }
    p{
        font-family: var(--secondary-font);
        font-size: 20px;
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
    @media screen and (max-width: 768px){
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
        h1{
            font-size: 48px;
        }
        p{
            font-size: 16px;
        }
    }
</style>