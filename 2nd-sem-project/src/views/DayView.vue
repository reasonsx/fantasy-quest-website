<script setup>
import Footer from '../assets/components/Footer.vue'
</script>

<template>
<body>
    <div class="hero">
        <h1>Day Quest</h1>
    </div>
    <div class="red-torn-paper-top"></div>
    <!-- First Container -->
    <div class="first-container">
        <img src="../assets/img/sun-svg.svg" class="sun-section" alt="Sun">
        <div class="text-section">
            <h2>Day Quest</h2>
            <p>Day Quest is a fun and interactive way to explore the city of Esbjerg. You will be given a map and a list of tasks to complete. The tasks will take you to different locations around the city, where you will learn about the history and culture of Esbjerg. You can complete the tasks at your own pace, and there is no time limit. Day Quest is a great way to spend a day in Esbjerg, and is suitable for all ages.</p>
            <button class="btn">Buy Ticket</button>
        </div>
    </div>
    <div class="red-torn-paper-bottom"></div>

    <!-- Second Container -->
    <div class="schedule-container">
        <div class="schedule-text-section">
            <h2>Schedule</h2>
            <p>Embark on the Day Quest and explore a fantastical world filled with intrigue and mystery. Begin your adventure at 10:00 AM and overcome thrilling challenges. The quest concludes at 2:30 PM, leaving you with awe-inspiring memories to cherish. 
                <br><strong>Date:</strong> 14 September 2024 
                <br><strong>Location:</strong> Torvet 6700 Esbjerg
                <br><strong>Time:</strong> 10:00 AM - 2:30 PM
                <br><strong>Price:</strong> 243.13 DKK
            </p>
            <button class="btn">Buy Ticket</button>
        </div>
        <img src="../assets/img/Day-clock.png" class="clock" alt="Clock">
    </div>
        
    <!-- Third Container -->
    <div class="gold-torn-paper-top"></div>
    <div class="card-content">
        <div class="character-container">
            <div class="card">Card 1</div>
            <div class="card">Card 2</div>
            <div class="card">Card 3</div>
            <div class="card">Card 4</div>
            <div class="card">Card 5</div>
        </div>
    </div>  

    <!-- Fourth Container -->
    <div class="gold-torn-paper-bottom"></div>
    <div class="fourth-section">
        <div class="line-arrow">
            <img src="../assets/img/arrow.svg" class="arrow" alt="Arrow">
        </div>
        <div class="figure-container">
            <div class="figure-text">"Brave enough to confront the night's horrors? <br> Embark on the Evening Quest."</div>
            <img src="../assets/img/Malice.png" class="figure" alt="Figure">
            <button class="btn">Take me there</button>
        </div>
    </div>
    <div class="beige-torn-paper-bottom"></div>

    <!-- Fifth Container -->
    <div class="location-text">
        <h2>Starting point</h2>
    </div>
    <div class="location-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d565.441803217115!2d8.451494569653615!3d55.46672475856316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b212b3242d4fb%3A0x75e521797733a745!2sTorvet%2C%206700%20Esbjerg!5e0!3m2!1sro!2sdk!4v1715896013352!5m2!1sen!2sus" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <!-- Sixth Container -->
    <div class="sixth-container">
        <button class="btn">Go back to home page</button>
    </div>
    <div class="red-torn-paper-top"></div>


    
    <Footer />
</body>
           
</template>



<style scoped>


.hero {
    display: flex;
    justify-content: center;
    align-items:first baseline;
    position: relative;
    height: 650px;
    background-image: url('../assets/img/Fantasy1.jpg');
    background-size: cover;
    background-position: 0px -80px;

    @media (max-width: 768px) {
        height: 400px;
        background-position: center; 
        align-items: start;
        justify-content: center;
    }
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

.red-torn-paper-top{
    display: flex;
    margin-top: -40px;
    z-index: 1;
}

.first-container {
    background-color: #8F270D;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    @media screen and (max-width: 768px){
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

    @media screen and (max-width: 768px){
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

    @media screen and (max-width: 768px){
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

h2 {
    font-family: 'Exocet', sans-serif;
    font-size: 40px;
    color: #A3883C;
    margin-bottom: 10px;

}

.first-container p{
    font-family: Darker Grotesque;
    font-size: 22px;
    color: var(--light-papirus);
    margin-bottom: 20px;

    @media screen and (max-width: 768px){
        width: 100%; 
        height: auto; 
        font-size: 15px;
        padding-left: 10px;
        padding-right: 10px;
    }

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
  

    @media screen and (max-width: 768px){
    width: 170px; 
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 30px;
    }
}

button{
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

button:hover{
  padding-right: 24px;
  padding-left:30px;
}

button:hover:after {
  opacity: 1;
  right: 30px;
}

.red-torn-paper-bottom{
    display: flex;
    margin-top: -50px;
    z-index: 1;
}


/* Second Container */
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

/* Third Container */
.card-content{
background-color:#A3883C;
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
    
    @media screen and (max-width: 768px){
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

    @media screen and (max-width: 768px){
        flex: 0 0 100%; 
        height: 200px; 
        margin: 10px 0;
        
    }
}


/* Fourth Container */  
.fourth-section {
    display: flex;
    justify-content: end;
    align-items: end;
    background-color: #DFCBAF;
    margin-top: -50px;

}

/* Arrow */
.line-arrow{
    margin-right: 0px;
    margin-left: 150px;
}

.arrow{
    margin-right: 500px;
    margin-left: 180px;
    margin-top: -100px;

}

.gold-torn-paper-bottom{
    display: flex;
    margin-top: -50px;
    z-index: 1;
}

.beige-torn-paper-bottom{
    margin-top: -70px;
}

.arrow{
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

/* Fifth Container */
.location-text{
    margin-top: 30px;
    margin-bottom: 20px;
    margin-right: 0px;
    margin-left: 200px;

    @media screen and (max-width: 768px){
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

.figure{
    width: 300px;
    height: 400px;
    margin-right: 250px;

    @media screen and (max-width: 768px){
        margin-left: 20px;
        margin-right: 20px;
        width: 150px;
        height: 200px;
    }
}

.figure-container .btn{
    margin-top: -10px;
    margin-right: 150px;
    margin-left: 0px;
    width: 250px;

    @media screen and (max-width: 768px){
        margin-left: 20px;
        margin-right: 20px;
        width: auto;
        margin-top: 10px;
    }
}

.location-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
    width: auto;

    @media screen and (max-width: 768px){
        flex-direction: column; /* Stack elements vertically in a single column */
        margin-top: 20px;
        margin-bottom: 20px;
    }
}

.figure-section{
    width: 300px;
    height: 300px;
    margin-top: -70px;

    @media screen and (max-width: 768px){
        margin-left: 20px;
        margin-right: 20px;
        width: auto;
        height: auto;
    }
}

iframe{
    width: 1120px;
    height: 560px;
    margin-right: 0px;

    @media screen and (max-width: 768px){
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

.sixth-container .btn{
    width: 350px;
}
footer{
    background-color: var(--red-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.bottom-footer {
    width: 1120px;
    /* height: 64px; */
    display: flex;
    justify-content: center;
    gap: 16px;
    align-items: center;
    /* flex-direction: column; */
    margin: 0 0 24px 0;

    @media screen and (max-width: 768px) {
        width: 360px
    }

}
footer p {
    color: var(--light-papirus);
    font-family: var(--secondary-font);
    font-size: 24px;
    font-weight: 400;

}

.footer-container {
    width: 1120px;
    height: auto;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    padding: 0 0 24px 0;
    border-bottom: 1px solid var(--light-papirus);

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: auto;
    }

}

.footer-box {
    width: auto;
    height: auto;
    box-sizing: border-box;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 16px 0;
    }

}

.footer-box h3 {
    color: var(--light-papirus);
    font-family: var(--secondary-font);
    font-size: 32px;
    font-weight: 600;
}

.footer-box:nth-child(4) p {
    text-decoration: underline;
}

.footer-box a {
    color: var(--light-papirus);
    font-family: var(--secondary-font);
    font-size: 24px;
    font-weight: 400;
    text-decoration: none;

}

.copyright {
    color: var(--light-papirus);
    font-family: var(--secondary-font);
    font-size: 20px;
    font-weight: 400;
    margin: 16px 0;

}




</style>