
<template>
    <div class="sun-container">
        <div class="sun-description">
            <div class="sun-svg">
                <img src="../../img/sun-svg.svg" alt="Sun">
            </div>
            <div class="sun-text">
                <h1>Fun for everyone</h1>
                <p>Day Quest is a fun and interactive way to explore the city of Esbjerg. You will be given a map and a
                    list of tasks to complete. The tasks will take you to different locations around the city, where you
                    will learn about the history and culture of Esbjerg. You can complete the tasks at your own pace,
                    and there is no time limit. Day Quest is a great way to spend a day in Esbjerg, and is suitable for
                    all ages.
                </p>
                <a href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4"
                    target="_blank"><button class="primary-button">BUY TICKET</button></a>
            </div>
        </div>
    </div>
    <div class="red-torn-paper-bottom"></div>
</template>

<script setup>
</script>

<style scoped>
.primary-button {
    background-color: var(--gold-color);
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
    background-color: var(--gold-hover);
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

.sun-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--red-color);
    color: var(--light-papirus);
}

.sun-description {
    width: 80%;
    display: flex;
    flex-direction: row;
    margin: 50px 0 0 0;
}

.sun-text {
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
}

@media screen and (max-width: 768px) {
    .sun-container {
        flex-direction: column;


    }

    .sun-description {
        flex-direction: column;
        margin: 0 0 50px 0;
        width: 360px;
    }

    .sun-text {
        margin-left: 0;
    }

    .sun-svg {
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
