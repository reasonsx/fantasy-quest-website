<template>
    <div class="grey-torn-paper-top" style="background-color: var(--silver-color);" </div>
        <div class="figure-container">
            
            <div class="figure-content">
                <!-- <img class="arrow" src="../../img/silver-arrow.svg" alt=""> -->
                <!-- <div class="question-part">
                    <p>Brave enough to confront the night's horrors? <br>
                        Embark on the Evening Quest.</p>
                </div> -->
                <div class="figure-part">
                    <div class="question-part">
                    <p>Maybe the night's horrorsa are not for you? <br>
                        Embark on the Day Quest.</p>
                </div>
                    <div class="figure-svg"><img src="../../img/figure-evening.svg" alt="">
                    </div>
                    <div class="centered-button"><a href="/day"><button class="primary-button">TAKE ME THERE</button></a></div>
                </div>
            </div>
        </div>
</template>

<script setup>

</script>

<style scoped>
.centered-button {
    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        width: auto;
    }
}

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

h1 {
    font-family: var(--primary-font);
    font-size: 64px;
}

p {
    font-family: var(--secondary-font);
    font-size: 24px;
}

.question-part {
    /* width: 30%; */
    display: flex;
    background-color: #5F2945;
    border-radius: 30px;
    padding: 20px;
    /* margin-right: 40px; */
    margin-bottom: 24px;
    @media screen and (max-width: 768px){
        width: 360px;
        margin: 0 0 32px 0;
        
    }

}
.figure-part {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}
.figure-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-color: var(--black-color);
    color: var(--light-papirus);
}
.arrow {
    @media screen and (max-width: 768px){
        display: none;
        
    }
}
.figure-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        
    }
}

.nothing-here {
    width: 40%;
}

@media screen and (max-width: 768px) {
    h1 {
        font-size: 48px;
    }

    .nothing-here {
        display: none;
    }

    .figure-content {
        margin: 0 0 60px 0;
        width: 360px;
    }

    .figure-svg {
        svg {
            width: 180PX;

        }
    }


    .figure-part {
        width: 50%;
    }
}
</style>