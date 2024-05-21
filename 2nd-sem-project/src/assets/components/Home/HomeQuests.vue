<template>
       <div class="grey-torn-paper-top"></div>
        <div class="quests-background-container">
            <div class="quests-container">
                <div class="quest-container">
                    <div class="quest-box"><img src="../../img/day-quest-main-page.jpg" alt=""></div>
                    <h2>Day Quest</h2>
                    <p>Experience an enchanting family adventure at the Day Quest during Fantasy Quest Esbjerg. Solve
                        puzzles, conquer challenges, and become the heroes of Esbjerg in a fantasy world brought to
                        life. Suitable for all ages, this immersive experience promises a day of magical fun and
                        teamwork amidst the bustling Fantasy Festival.
                    </p>
                    <div class="centered-button">
                        <RouterLink to="/day"><button class="primary-button">READ MORE</button></RouterLink>
                    </div>
                </div>
                <div class="quest-container">
                    <div class="quest-box"><img src="../../img/night-quest-main-page.jpg" alt=""></div>
                    <h2>Evening Quest</h2>
                    <p>Step into the shadows and become the hero of a thrilling adventure during the Evening Quest at
                        Fantasy Quest Esbjerg. Confront darkness, solve challenges, and save Esbjerg from evil forces as
                        twilight descends. Join alone or with friends for an unforgettable journey under the stars.</p>
                    <div class="centered-button">
                        <RouterLink to="/evening"><button class="primary-button">READ MORE</button></RouterLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="grey-torn-paper-bottom"></div>
</template>
<script setup>
</script>
<style scoped>
.centered-button {
    display: flex;
    justify-content: center;
}


.primary-button {
    background-color: var(--gold-color);
    width: 180px;
    height: 48px;
    border-radius: 64px;
    border: none;
    margin-top: 24px;
    letter-spacing: 2px;
    font-weight: 600;
    color: var(--black-color);
}

.primary-button:hover {
    background-color: var(--gold-hover);
}
.quests-background-container {
    width: 100%;
    height: auto;
    background-color: var(--black-color);
    display: flex;
    flex-direction: column;
    align-items: center;

}

.quests-container {
    width: 1120px;
    height: auto;
    background-color: var(--black-color);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    padding: 64px 0 0 0;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        width: 360px;
    }
}

.quest-container {
    width: 544px;
    height: auto;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin-bottom: 64px;

    @media screen and (max-width: 768px) {
        width: 360px;

    }

}

.quest-container h2 {
    color: var(--light-papirus);
    margin: 24px 0;
    text-align: left;
    /* @media screen and (max-width: 768px){ */
    /* margin: 16px 0; */

    /* } */
}

.quest-container p {
    color: var(--light-papirus);
    font-size: 24px;
    height: 196px;

    @media screen and (max-width: 768px) {
        height: auto;

    }
}

.quest-box {
    width: 544px;
    height: 306px;
    background-color: var(--light-papirus);

    @media screen and (max-width: 768px) {
        width: 360px;
        height: 180px;

    }

}

.quest-box img {
    width: 544px;
    height: 306px;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        width: 360px;
        height: 180px;

    }
}
</style>