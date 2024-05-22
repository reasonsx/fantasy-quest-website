<template>
    <div class="grey-torn-paper-top" style="background-color: var(--silver-color);"</div> 
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
    .question-part{
        width: 30%;
        display: flex;
        background-color: #5F2945;
        border-radius: 30px;
        padding: 20px;
        margin-right: 40px;
        margin-bottom: 200px;

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
    .nothing-here{
        width: 40%;
    }
    @media screen and (max-width: 768px) {
        h1{
            font-size: 48px;
        }
        p{
            font-size: 16px;
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
    }
</style>