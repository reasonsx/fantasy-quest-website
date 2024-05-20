<template>
    <div>
        <h1>Day</h1>
        <p>Day view</p>
    </div>
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
    width: 400px;
    height: 400px;
    margin-right: 150px;
    margin-left: 0px;
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
}

h2 {
    font-family: 'Exocet', sans-serif;
    font-size: 40px;
    color: #FFD700;
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
.card-content{
background-color:#A3883C;
}

.character-container {
    background-color: #A3883C;
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
    height: 400px;
    background-color: #8F270D;
    display: flex;
    justify-content: center; 
    align-items: center; 
    margin: 10px;
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
    background-color: #8F270D;
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


@media (max-width: 600px) {
  .card {
    flex: 0 0 calc(50% - 10px); /* Adjust for smaller screens */
  }
}


</style>