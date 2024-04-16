<script>

    import AppHeader from "./components/AppHeader.vue";
    import AppCollection from "./components/AppCollection.vue";
    import axios from "axios";
    import { store } from './store.js';

    export default {
      components: {
        AppHeader,
        AppCollection
      },
      data () {
        return {
          store
        }
      },
      methods: {
        getCardsFromApi() {
          let apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
          const queryParams = {
            num: 20,
            offset: 0
          };
          axios.get(apiUrl, {
            params: queryParams
          }).then((response) => {
            store.cardsList = response.data.data
          });
        }
      },
      mounted() {
        this.getCardsFromApi()
      }
    }
</script>

<template>
    <AppHeader></AppHeader>
    <main>
      <AppCollection></AppCollection>
    </main>
</template>

<style lang="scss">
  @use './style/generic';

</style>
