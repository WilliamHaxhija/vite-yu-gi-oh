<script>
  
  import axios from 'axios';
  import { store } from '../store.js';

  export default {
    name: 'SingleCard',
    props: {
      cardInfo: Object
    },
    data () {
      return {
        store
      }
    }
  }

</script>

<template>
    
      <div class="ms-card" :key="cardInfo.id">
        <img :src="cardInfo.card_images[0].image_url_small" alt="cardInfo.name">
        <h3 class="text-center">{{ cardInfo.name }}</h3>
        <div v-if="cardInfo.archetype" class="text-center">{{ cardInfo.archetype }}</div>
      </div>
    
</template>

<style scoped lang="scss">
  
  .ms-card {
    background-color: #d48f38;
    margin-top: 1rem;
    width: calc((100% / 5) - 1rem);

    h3 {
      color: white;
    }
  }

  img {
    max-width: 100%;
  }

</style>