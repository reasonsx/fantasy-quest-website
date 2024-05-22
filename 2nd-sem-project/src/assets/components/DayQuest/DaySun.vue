<template>
    <div class="first-container">
            <img src="../../img/sun-svg.svg" class="sun-section" alt="Sun">
            <div class="text-section">
                <h2>Day Quest</h2>
                <p>Day Quest is a fun and interactive way to explore the city of Esbjerg. You will be given a map and a
                    list of tasks to complete. The tasks will take you to different locations around the city, where you
                    will learn about the history and culture of Esbjerg. You can complete the tasks at your own pace,
                    and there is no time limit. Day Quest is a great way to spend a day in Esbjerg, and is suitable for
                    all ages.</p>
                <button class="btn">Buy Ticket</button>
            </div>
        </div>
</template>

<script setup>

</script>

<style scoped>
h2 {
    font-family: 'Exocet', sans-serif;
    font-size: 40px;
    color: #A3883C;
    margin-bottom: 10px;

}



button {
    border-radius: 30px;
    background-color: #A3883C;
    border: none;
    color: #FFF6E9;
    text-align: start;
    font-size: 25px;
    font-family: Darker Grotesque;
    padding: 15px;
    padding-bottom: 17px;
    width: 200px;
    transition: all 0.5s;
    cursor: pointer;
    margin-top: 36px;


    @media screen and (max-width: 768px) {
        width: 170px;
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 30px;
    }
}

button {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
}

button:after {
    content: '»';
    position: absolute;
    opacity: 0;
    top: 14px;
    right: -20px;
    transition: 0.5s;
}

button:hover {
    padding-right: 24px;
    padding-left: 30px;
}

button:hover:after {
    opacity: 1;
    right: 30px;
}
    .first-container h2 {
    font-family: 'Exocet', sans-serif;
    font-size: 70px;
    text-align: center;
    margin-top: 30px;
    color: #FFF6E9;

    @media (max-width: 768px) {
        font-size: 40px;
        text-align: start;
    }
}
.first-container {
    background-color: #8F270D;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        margin-top: -40px;
        margin-bottom: 0px;
        z-index: 1;
    }
}

.sun-section {
    width: 400px;
    height: 400px;
    margin-right: 150px;
    margin-left: 0px;

    @media screen and (max-width: 768px) {
        width: 50%;
        margin-right: 0;
        margin-left: 0;
        height: auto;
    }
}

.text-section {
    color: #FFF6E9;
    width: 500px;
    height: 400px;
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    flex-direction: column;
    justify-content: center;
    margin-right: 0px;
    margin-left: 150px;
    font-size: 50px;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-right: 10px;
        margin-left: 10px;
        height: auto;
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }
}
.first-container p {
    font-family: Darker Grotesque;
    font-size: 22px;
    color: var(--light-papirus);
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: auto;
        font-size: 15px;
        padding-left: 10px;
        padding-right: 10px;
    }

}
</style>