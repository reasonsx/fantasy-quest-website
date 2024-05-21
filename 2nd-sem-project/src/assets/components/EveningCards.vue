<template>
    <div class="card-container">
            <div class="grey-torn-paper-bottom"></div>
            <div class="card-content">
                <h1>Get to know our characters</h1>
                <div class="card-grid">
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                </div>
            </div>
        </div>
</template>

<script setup>

</script>

<style  scoped>
    .card-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: var(--silver-color);
        h1{
            color: var(--black-color);
            margin-bottom: 50px;
        }
    }
    .card-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin: 50px 0;
    }
    .card-grid{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 50px;
        width: 100%;
    }
    .card{
        width: 100%;
        height: 400px;
        background-color: #5F2945;
    }
    h1{
        font-family: var(--primary-font);
        font-size: 100px;
    }
    p{
        font-family: var(--secondary-font);
        font-size: 20px;
    }
    @media screen and (max-width: 768px){
        .card-container{
            flex-direction: column;
        }
        .card-content{
            flex-direction: column;
            margin:  60px 0;
            width: 360px;
        }
        .card{
            height: 250px;
        }
        .card-grid{
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
        }
        h1{
            font-size: 48px;
        }
        p{
            font-size: 16px;
        }
    }
</style>