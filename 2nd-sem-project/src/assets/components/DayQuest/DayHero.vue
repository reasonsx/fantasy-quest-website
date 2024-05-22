<template>
    <div class="hero-container">
            <div class="hero-text">
                <h1 id="welcome-text" style="text-align: center;">DAY QUEST</h1>
        
            </div>
            <div class="red-torn-paper-top" style="position: absolute; bottom: 0;"></div>
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
      const text = "DAY QUEST";
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
 h1{
        font-family: var(--primary-font);
        font-size: 80px;
    }
    p{
        font-family: var(--secondary-font);
        font-size: 20px;
    }
    @media screen and (max-width: 768px){
        h1{
            font-size: 48px;
        }
        p{
            font-size: 16px;
        }
    }
.hero-container {
        background-image: url('../../img/Fantasy1.jpg');
        background-size: cover;
        background-position: center;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--light-papirus);
        position: relative;
    }
    .hero-text{
        padding: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: top;
        align-items: center;
        flex-direction: column;
        width: 80%;
        margin-top: 80px;
    }
</style>