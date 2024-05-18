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
            <p>Day Quest is a self-guided tour of Esbjerg. You will be given a map and a list of tasks to complete. The tasks will take you to different locations around the city, where you will learn about the history and culture of Esbjerg. You can complete the tasks at your own pace, and there is no time limit. Day Quest is a great way to spend a day in Esbjerg, and is suitable for all ages.</p>
        </div>
        <img src="../assets/img/clock.svg" class="clock" alt="Clock">
    </div>
        
    <!-- Third Container -->
    <div class="character-container">
        <div class="card">Card 1</div>
        <div class="card">Card 2</div>
        <div class="card">Card 3</div>
        <div class="card">Card 4</div>
        <div class="card">Card 5</div>
    </div>

    <!-- Fourth Container -->
    <div class="figure-container">
        <div class="figure-text">"Brave enough to confront the night's horrors? <br> Embark on the Evening Quest."</div>
        <img src="../assets/img/Malice.png" class="figure" alt="Figure">
        <button class="btn">Take me there</button>
    </div>

    <!-- Fifth Container -->
    <div class="location-text">
        <h2>Starting point</h2>
    </div>
    <div class="location-container">
        <div class="figure-section">
            <img src="../assets/img/Malice.png" class="figure" alt="Figure">
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d565.441803217115!2d8.451494569653615!3d55.46672475856316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b212b3242d4fb%3A0x75e521797733a745!2sTorvet%2C%206700%20Esbjerg!5e0!3m2!1sro!2sdk!4v1715896013352!5m2!1sro!2sdk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <!-- Sixth Container -->
    <div class="sixth-container">
        <button class="btn">Go back to home page</button>
    </div>

</body>
           
</template>



<style>


.hero {
    display: flex;
    justify-content: center;
    align-items:first baseline;
    position: relative;
    height: 650px;
    background-image: url('../assets/img/Fantasy1.jpg');
    background-size: cover;
    background-position: 0px -80px;
}

h1 {
    font-family: 'Exocet', sans-serif;
    font-size: 40px;
    text-align: center;
    margin-top: 30px;
    color: #FFF6E9;

}

.red-torn-paper-top{
    display: flex;
    margin-top: -50px;
    z-index: 1;
}

.first-container {
    background-color: #8F270D;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

.sun-section {
    width: 300px;
    height: 300px;
    margin-right: 150px;
    margin-left: 0px;
}

.text-section {
    width: 500px;
    height: 400px;
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    flex-direction: column;
    justify-content: center;
    margin-right: 0px;
    margin-left: 150px;
}

h2 {
    font-family: 'Exocet', sans-serif;
    font-size: 40px;
    color: #FFD700;
}

button {
  border-radius: 30px;
  background-color: #AE001A;
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

.clock {
    width: 300px;
    height: 300px;
    margin-right: 0px;
    margin-left: 150px;
}

/* Third Container */
.character-container {
    display: flex;
    flex-wrap: wrap; 
    gap: 10px; 
    padding: 10px;
    justify-content: center;
    align-items: center;
    margin-right: 180px;
    margin-left: 180px;
}

.card {
    flex: 0 0 calc(30% - 10px); /* Flex-grow, Flex-shrink, Basis */
    height: 400px; /* Can be adjusted based on your needs */
    background-color: #AE001A;
    display: flex;
    justify-content: center; 
    align-items: center; 
    margin: 10px;
}


/* Fourth Container */  
.figure-container {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-right: 150px;
    margin-left: 0px;
    
}    
.location-text{
    margin-top: 30px;
    margin-bottom: 20px;
    margin-right: 0px;
    margin-left: 200px;
}

.figure-text {
    font-family: Darker Grotesque;
    color: #FFF6E9;
    border-radius: 15px;
    font-size: 20px;
    padding: 10px;
    background-color: #AE001A;
    width: 300px;
    margin-right: 350px;
    margin-left: 0px;
    margin-bottom: -30px;
    z-index: 1;
}

.figure{
    width: 300px;
    height: 400px;
    margin-right: 250px;
}

.figure-container .btn{
    margin-top: -10px;
    margin-right: 150px;
    margin-left: 0px;
    width: 250px;
}

.location-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
}

.figure-section{
    width: 300px;
    height: 300px;
    margin-top: -70px;
}

iframe{
    width: 500px;
    height: 400px;
    margin-right: 0px;
    margin-left: 150px;
}


/* Fourth Container */
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


@media (max-width: 600px) {
  .card {
    flex: 0 0 calc(50% - 10px); /* Adjust for smaller screens */
  }
}


</style>