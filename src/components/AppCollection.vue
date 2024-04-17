<script>

  import { store } from '../store.js';
  import SingleCard from './SingleCard.vue';
  import AppResultNumber from "./AppResultNumber.vue";
  
  export default {
    name: 'AppCollection',
    components: {
        SingleCard,
        AppResultNumber
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
          <AppResultNumber></AppResultNumber>
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

</style>
