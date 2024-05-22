<template>
    <div class="card-container">
      <div class="grey-torn-paper-bottom"></div>
      <div class="card-content">
        <h1>Get to know our characters</h1>
        <div class="card-grid">
          <div
            class="card"
            v-for="(character, index) in characters"
            :key="index"
            @click="flipCard(index)"
            ref="cards"
          >
            <div class="front">
              <img :src="character.img" :alt="character.name" />
            </div>
            <div class="back">
              <p>{{ character.description }}</p>
              <h3>{{ character.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import anime from 'animejs/lib/anime.es.js';
  
  export default {
    name: 'EveningCards',
    data() {
      return {
        characters: [
          {
            name: 'Arkivaren',
            img: '',
            description:
              '“The old man, marked by the ages, Arkivaren is the embodiment of time, memory, and knowledge. He offers guidance and wisdom to those who seek to restore balance.”',
          },
          {
            name: 'Gnist',
            img: '',
            description:
              '“When he roars, it\'s not only a sound but a tempest, calling forth lightning and storms. Gnist, albeit fearsome, plays a crucial role in the cycle of destruction and rebirth.”',
          },
          {
            name: 'Malice',
            img: '',
            description:
              '“A sorceress with knowledge of forbidden magics, she is a character shaped by betrayal and a thirst for power that promises to fill the void left by lost love.”',
          },
          {
            name: 'Gygaz',
            img: '',
            description:
              '“Gygaz is the keeper of ancient magics and secrets long forgotten. He\'s magic is woven into the very fabric of the land, a testament to her connection with the world beyond sight.”',
          },
          {
            name: 'Havfruedronning',
            img: '',
            description:
              '“Havfruedronning seeks harmony between her world and that of the land dwellers. She plays a pivotal role in the balance of power, her allegiance a coveted asset in the battle against evil.”',
          },
        ],
        playing: false,
      };
    },
    methods: {
      flipCard(index) {
        if (this.playing) return;
        this.playing = true;
        const card = this.$refs.cards[index];
        anime({
          targets: card,
          scale: [{ value: 1 }, { value: 1.15 }, { value: 1, delay: 250 }],
          rotateY: { value: '+=180', delay: 200 },
          easing: 'easeInOutSine',
          duration: 400,
          complete: () => {
            this.playing = false;
          },
        });
      },
      async loadImages() {
        this.characters[0].img = (await import('../../img/Arkivaren.svg')).default;
        this.characters[1].img = (await import('../../img/Gnist.svg')).default;
        this.characters[2].img = (await import('../../img/Malice.svg')).default;
        this.characters[3].img = (await import('../../img/Gygaz.svg')).default;
        this.characters[4].img = (await import('../../img/Havfruedronning.svg')).default;
      }
    },
    async created() {
      await this.loadImages();
    }
  };
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

