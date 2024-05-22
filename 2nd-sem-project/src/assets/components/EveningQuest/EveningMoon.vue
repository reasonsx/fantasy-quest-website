<template>
    <div class="moon-container">
        <div class="moon-description">
            <div class="moon-svg">
                <img src="../../img/moon.svg" alt="Moon">
            </div>
            <div class="moon-text">
                <h1>For mystery lovers</h1>
                <p>When twilight begins to descend over Esbjerg, the level of difficulty in the Evening Quest is turned
                    up.
                    <br>
                    Now you really have to think creatively and solve tasks that require both courage, cooperation
                    and ingenuity in order for you to complete the quest and save Esbjerg.
                    <br>
                    If you love solving puzzles
                    and cracking codes, don't miss out on this ultimate experience. We send you and your friends on your
                    ultimate adventure in Esbjerg's streets and alleys.
                    <br>
                    Here you will have to collaborate and devise new
                    solutions to complete the Evening Quest.
                </p>
                <a href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4"
                    target="_blank"><button class="primary-button">BUY TICKET</button></a>
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

h1 {
    font-family: var(--primary-font);
    font-size: 64px;
    color: var(--light-papirus);
    text-align: left;
    margin: 0 0 24px 0;
}

p {
    font-family: var(--secondary-font);
    font-size: 24px;
    color: var(--light-papirus);
    text-align: left;
}

.moon-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--purple-color);
    color: var(--light-papirus);
}

.moon-description {
    width: 80%;
    display: flex;
    flex-direction: row;
    margin: 50px 0;
}

.moon-text {
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
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

@media screen and (max-width: 768px) {
    .moon-container {
        flex-direction: column;


    }

    .moon-description {
        flex-direction: column;
        margin: 0 0 50px 0;
        width: 360px;
    }

    .moon-text {
        margin-left: 0;
    }

    .moon-svg {
        display: flex;
        justify-content: center;
        margin-bottom: 50px;

        img {
            width: 360px;
        }
    }

    h1 {
        font-size: 48px;
    }
}
</style>