<template>
    <div class="location-text">
            <h2>Starting point</h2>
        </div>
        <div class="location-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d565.441803217115!2d8.451494569653615!3d55.46672475856316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b212b3242d4fb%3A0x75e521797733a745!2sTorvet%2C%206700%20Esbjerg!5e0!3m2!1sro!2sdk!4v1715896013352!5m2!1sen!2sus"
                width="600" height="450" style="border:0;" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <!-- Sixth Container -->
        <div class="sixth-container">
            <button class="btn">Go back to home page</button>
        </div>
        <div class="red-torn-paper-top"></div>
</template>

<script setup>

</script>

<style  scoped>
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
.location-text {
    margin-top: 30px;
    margin-bottom: 20px;
    margin-right: 0px;
    margin-left: 200px;

    @media screen and (max-width: 768px) {
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
        margin-right: 20px;
        width: auto;
        margin-top: 20px;
        margin-bottom: 15px;
    }
}



.location-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
    width: auto;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        /* Stack elements vertically in a single column */
        margin-top: 20px;
        margin-bottom: 20px;
    }
}

.figure-section {
    width: 300px;
    height: 300px;
    margin-top: -70px;

    @media screen and (max-width: 768px) {
        margin-left: 20px;
        margin-right: 20px;
        width: auto;
        height: auto;
    }
}

iframe {
    width: 1120px;
    height: 560px;
    margin-right: 0px;

    @media screen and (max-width: 768px) {
        width: 360px;
        height: 360px;
    }
}

/* Sixth Container */
.sixth-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
}

.sixth-container .btn {
    width: 350px;
}
</style>