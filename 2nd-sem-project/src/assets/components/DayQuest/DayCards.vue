<template>
    <div class="gold-torn-paper-top" ></div>
        <div class="card-content">
            <div class="character-container">
                <div class="card">Card 1</div>
                <div class="card">Card 2</div>
                <div class="card">Card 3</div>
                <div class="card">Card 4</div>
                <div class="card">Card 5</div>
            </div>
        </div>
</template>

<script setup>

</script>

<style scoped>
    .card-content {
    background-color: #A3883C;
}

.character-container {
    background-color: #A3883C;
    display: flex;
    flex-wrap: nowrap;
    gap: 10px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    margin-right: 180px;
    margin-left: 180px;
    overflow-x: auto;

    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        margin-right: 10px;
        margin-left: 10px;
        overflow-x: visible;
        justify-content: center;
    }
}

.card {
    flex: 0 0 calc(16.66% - 10px);
    height: 400px;
    background-color: #8F270D;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;

    @media screen and (max-width: 768px) {
        flex: 0 0 100%;
        height: 200px;
        margin: 10px 0;

    }
}
</style>