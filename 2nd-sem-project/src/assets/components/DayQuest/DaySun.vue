
<template>
    <div class="sun-container">
        <div class="sun-description">
            <div class="sun-svg">
                <img src="../../img/sun-svg.svg" alt="Sun">
            </div>
            <div class="sun-text">
                <h1>Fun for everyone</h1>
                <p>The family edition of Fantasy Quest Esbjerg is an experience run for the whole family, with an emphasis on experience. Because it is not a classic race. It's about living into another world, a magical story, where you are on a "quest" together - a mission, a task, a hunt. Here you meet magical creatures who set you some tasks and challenges along the way towards the goal, which you must solve together to complete the Quest. The degree of difficulty has been lowered so that the children can help solve the tasks. But make no mistake, all good strength and cooperation skills are needed if you are to help save Esbjerg. As an added bonus, you can meet the YouTuber Lakserytteren during the Quest around the streets of Esbjerg.
                </p>
                <div class="centered-button"><a href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4"
                    target="_blank"><button class="primary-button">BUY TICKET</button></a></div>
            </div>
        </div>
    </div>
    <div class="red-torn-paper-bottom"></div>
</template>

<script setup>
</script>

<style scoped>
.centered-button {
    @media screen and (max-width: 768px){
    display: flex;
    justify-content: center;
    width: auto;
    }
}
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
