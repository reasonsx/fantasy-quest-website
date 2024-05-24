<template>
    <div class="grey-torn-paper-top"></div>
        <div class="about-background-container">
            <div class="about-container">
                <div class="about-box"><iframe width="1120" height="630" src="https://www.youtube-nocookie.com/embed/TAWyZzSyuUw?si=Elu749KR2TrZ26U6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                <h2>About</h2>
                <p>Embark on a magical journey at Fantasy Quest Esbjerg, part of the enchanting Fantasy Festival. Choose
                    from two uniquely themed quests—Day Quest for families and Evening Quest for those seeking adventure
                    under the stars. Each quest is infused with challenges and a rich narrative designed to test your
                    bravery and wit. Join us for a day of mythical creatures, epic challenges, and heroic deeds. Whether
                    with family or friends, come craft your story and become the hero Esbjerg needs.</p>
            </div>
            <div class="gold-torn-paper-top"></div>
        </div>
</template>

<script setup>

</script>
<style scoped>
video {
    width: 100%;
    height: 100%;
    object-fit: cover;

}
h2 {
    font-family: var(--primary-font);
    font-size: 48px;
    color: var(--gold-color);
    @media screen and (max-width: 768px){
        font-size: 32px;
        
    }
}
.about-background-container {
    width: 100%;
    height: auto;
    background-color: var(--black-color);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.about-container {
    width: 1120px;
    height: auto;
    background-color: var(--black-color);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 0 80px 0;

    @media screen and (max-width: 768px) {
        width: 360px;
    }
}

.about-container h2 {
    color: var(--light-papirus);
    margin: 24px 0;
    text-align: left;
    width: 100%;

}

.about-container p {
    color: var(--light-papirus);
    font-size: 24px;
    text-align: left;
    width: 1120px;

    @media screen and (max-width: 768px) {
        width: 360px;

    }
}

.about-box {
    width: 1120px;
    height: 630px;
    background-color: var(--light-papirus);
    box-sizing: border-box;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        width: 360px;
        height: 202px;


    }
}
iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>