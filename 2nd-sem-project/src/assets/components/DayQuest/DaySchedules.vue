<template>
    <div class="light-torn-paper-top"></div>
    <div class="schedule-container">
            <div class="schedule-text-section">
                <h2>Schedule</h2>
                <p>Embark on the Day Quest and explore a fantastical world filled with intrigue and mystery. Begin your
                    adventure at 10:00 AM and overcome thrilling challenges. The quest concludes at 2:30 PM, leaving you
                    with awe-inspiring memories to cherish.
                    <br><strong>Date:</strong> 14 September 2024
                    <br><strong>Location:</strong> Torvet 6700 Esbjerg
                    <br><strong>Time:</strong> 10:00 AM - 2:30 PM
                    <br><strong>Price:</strong> 243.13 DKK
                </p>
                <button class="btn">Buy Ticket</button>
            </div>
            <img src="../../img/Day-clock.png" class="clock" alt="Clock">
        </div>
</template>

<script setup>

</script>

<style  scoped>
    .schedule-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
}

.schedule-text-section {
    width: 500px;
    height: 400px;
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    flex-direction: column;
    justify-content: center;
    margin-right: 150px;
    margin-left: 0px;

}

.schedule-text-section p {
    font-size: 22px;
    color: #A3883C;
    margin-bottom: 10px;

}

.clock {
    width: 400px;
    height: 400px;
    margin-right: 0px;
    margin-left: 150px;
}

@media screen and (max-width: 768px) {
    .schedule-container {
        flex-direction: column-reverse;
        align-items: stretch;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .schedule-text-section {
        width: calc(100% - 20px);
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

    .schedule-text-section p {
        font-size: 15px;
    }

    .clock {
        width: 80%;
        height: auto;
        margin: 20px auto;
    }


}
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
</style>