<template>
    <div class="discover-background-container">
            <div class="discover-container">
                <h2>Discover</h2>
                <div class="discover-boxes-container">
                    <div class="discover-box">
                        <div class="discover-box-top"><img src="../../img/Lakse_frontpage.jpg" alt=""></div>
                        <h3>Quest story by Lakserytteren</h3>
                    </div>
                    <div class="discover-box">
                        <div class="discover-box-top"><img src="../../img/professional-actors.png" alt=""></div>
                        <h3>Professional Actors</h3>
                    </div>
                    <div class="discover-box">
                        <div class="discover-box-top"><img src="../../img/family-picture.jpg" alt=""></div>
                        <h3>Roleplay For Everyone</h3>
                    </div>
                    <div class="discover-box">
                        <div class="discover-box-top"><img src="../../img/esbjerg-centrum.png" alt=""></div>
                        <h3>Esbjerg City Center</h3>
                    </div>
                </div>
            </div>
        </div>
</template>
<script setup>
</script>
<style scoped>
h2 {
    font-family: var(--primary-font);
    font-size: 64px;
    color: var(--gold-color);
    @media screen and (max-width: 768px){
        font-size: 48px;
        
    }
}
.discover-background-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.discover-container {
    width: 1130px;
    height: auto;
    box-sizing: border-box;
    overflow: hidden;
    margin: 32px 0 0 0;
    padding: 0 5px;

    @media screen and (max-width: 768px) {
        width: 360px;

    }
}

.discover-container h2 {
    color: var(--gold-color);
    margin: 24px 0;
    text-align: center;
}

.discover-boxes-container {
    display: flex;
    justify-content: space-between;
    height: auto;
    margin: 0 0 128px 0;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 32px;

    }
}

.discover-box {
    width: 256px;
    height: 384px;
    background-color: var(--light-papirus);
    box-sizing: border-box;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.discover-box h3 {
    color: var(--gold-color);
    /* margin: 24px 0; */
    text-align: center;
    font-family: var(--secondary-font);
    font-size: 32px;
    font-weight: 800;
    padding: 16px 16px;
}

.discover-box-top {
    width: 256px;
    height: 256px;
    background-color: var(--black-color);

}

.discover-box-top img {
    width: 256px;
    height: 256px;
    object-fit: cover;

}
</style>