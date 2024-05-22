<template>
    <div class="portals-background-container">
            <!-- <h2>CHOOSE YOUR ADVENTURE</h2> -->
            <h2 id="welcome-text">CHOOSE YOUR ADVENTURE</h2>
            <div class="portals-container">
                <div class="day-portal-container">
                    <RouterLink to="/day">
                        <div class="portal-box"></div>
                    </RouterLink>
                    <a href="https://www.universe.com/events/family-quest-dagquest-tickets-C6PYX3" target="_blank"><button class="primary-button">BUY
                            TICKET</button></a>
                </div>
                <img src="../assets/img/gold-sword-svg.svg" alt="">
                <div class="evening-portal-container">
                    <RouterLink to="/evening">
                        <div class="portal-box"></div>
                    </RouterLink>
                    <a href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4" target="_blank"><button class="primary-button">BUY TICKET</button></a>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  // Called when the component is mounted to the DOM
  mounted() {
    // Calls the animateText method when the component is mounted
    this.animateText();
  },
  methods: {
    // Method to animate the text
    animateText() {
      // Text to be animated
      const text = "CHOOSE YOUR ADVENTURE";
      // Get the element with the id 'hi-text'
      const hiText = document.getElementById('welcome-text');
      // Clear existing content before appending new content
      hiText.innerHTML = '';

      let index = 0;

      // Set interval to append each letter of the text
      const intervalId = setInterval(() => {
        // Append the next letter of the text
        hiText.innerHTML += text[index];
        // Move to the next letter
        index++;
        // Check if animation is complete
        if (index === text.length) {
          // Stop the interval when animation is complete
          clearInterval(intervalId);
        }
      }, 100); // is the speed of typing here (milliseconds)
    }
  }
};
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
#welcome-text {
    height: 100px;
}
.centered-button {
    display: flex;
    justify-content: center;
}

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
.portals-background-container {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 96px;
}

.portals-background-container h2 {
    color: var(--gold-color);
    text-align: center;
}

.portals-container {
    width: 1120px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        width: 360px;

    }
}

.portals-container img {
    width: auto;
    height: 600px;

    @media screen and (max-width: 768px) {
        display: none;

    }

}

.day-portal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.evening-portal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.portal-box {
    position: relative;
    width: 352px;
    height: 600px;
    background-color: var(--gold-color);
    border-radius: 176px 176px 0 0;
    border: 12px solid var(--gold-color);
    box-sizing: border-box;
    overflow: hidden;
    mask: var(--mask);

    @media screen and (max-width: 768px) {
        width: 164px;
        height: 280px;
        --mask: radial-gradient(16px at 16px 100%, #0000 98%, #000) -16px;
    }
}
</style>