<template>
     <div class="characters-background-container">
            <div class="characters-container">
                <p>In Esbjerg, a legend foretold that evil would come from the sea. To guard against this, the people
                    built defenses and kept watch. In 1995, the sorcerer Gygaz the Wise enhanced this protection by
                    merging four valiant warriors with the "Man by the Sea" sculptures, turning them into eternal
                    guardians.<br><br>

                    Years of peace were shattered when dark clouds and a winged creature appeared over the sea. The
                    statues awakened, calling for heroes to save Esbjerg. "We need heroes!" they cried.
                </p> <img src="../../img/characters-main-page-svg.svg" alt="">
            </div>
        </div>
        <div class="gold-torn-paper-bottom"></div>
</template>

<script setup>

</script>
<style scoped>
.characters-background-container {
    width: 100%;
    height: auto;
    background-color: var(--gold-color);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.characters-container {
    width: 1120px;
    height: 100%;
    background-color: var(--gold-color);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        width: 360px;
    }
}

.characters-container p {
    color: var(--black-color);
    font-size: 24px;
    text-align: left;
    width: 1120px;
    font-weight: 600;

    @media screen and (max-width: 768px) {
        width: 360px;

    }
}

.characters-container img {
    width: auto;
    height: 400px;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        width: 360px;
        height: auto;

    }
}
</style>