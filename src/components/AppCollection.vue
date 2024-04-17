<script>

  import { store } from '../store.js';
  import SingleCard from './SingleCard.vue';
  
  export default {
    name: 'AppCollection',
    components: {
        SingleCard
    },
    data () {
      return {
        store
      }
    }
  }
</script>

<template>
    <section class="p-5">
        <div class="container p-4">
            <div class="input-ctn bg-dark"></div>
            <div class="row">
              <div class="col d-flex flex-wrap justify-content-between">
                <SingleCard v-for="card in store.cardsList" :cardInfo="card"></SingleCard>
              </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
  .container {
      background-color: white;
  }

  .input-ctn {
    height: 50px;
    margin-bottom: -1rem;
  }
</style>
