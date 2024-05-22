<template>
    <div class="gold-torn-paper-bottom"></div>
        <div class="fourth-section">
            <div class="line-arrow">
                <img src="../../img/arrow.svg" class="arrow" alt="Arrow">
            </div>
            <div class="figure-container">
                <div class="figure-text">"Brave enough to confront the night's horrors? <br> Embark on the Evening
                    Quest."</div>
                <img src="../../img/Malice.png" class="figure" alt="Figure">
                <button class="primary-button">TAKE ME THERE</button>
            </div>
        </div>
        <div class="beige-torn-paper-bottom"></div>
</template>

<script setup>

</script>

<style  scoped>
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
h2 {
    font-family: 'Exocet', sans-serif;
    font-size: 40px;
    color: #A3883C;
    margin-bottom: 10px;

}
.fourth-section {
    display: flex;
    justify-content: end;
    align-items: end;
    background-color: #DFCBAF;
    margin-top: -50px;

}

/* Arrow */
.line-arrow {
    margin-right: 0px;
    margin-left: 150px;
}

.arrow {
    margin-right: 500px;
    margin-left: 180px;
    margin-top: -100px;

}



.arrow {
    margin-top: -100px;
    margin-right: 0px;
    margin-left: 150px;
}

.figure-container {
    background-color: #DFCBAF;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-right: 150px;
    margin-left: 0px;

}

.figure-text {
    font-family: Darker Grotesque;
    color: #FFF6E9;
    border-radius: 15px;
    font-size: 20px;
    padding: 10px;
    background-color: #8F270D;
    width: 300px;
    margin-right: 350px;
    margin-left: 0px;
    margin-bottom: -30px;
    z-index: 1;
}
.figure {
    width: 300px;
    height: 400px;
    margin-right: 250px;

    @media screen and (max-width: 768px) {
        margin-left: 20px;
        margin-right: 20px;
        width: 150px;
        height: 200px;
    }
}

.figure-container .btn {
    margin-top: -10px;
    margin-right: 150px;
    margin-left: 0px;
    width: 250px;

    @media screen and (max-width: 768px) {
        margin-left: 20px;
        margin-right: 20px;
        width: auto;
        margin-top: 10px;
    }
}
</style>