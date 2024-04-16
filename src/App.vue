<script>

    import AppHeader from "./components/AppHeader.vue";
    import AppCollection from "./components/AppCollection.vue";
    import axios from "axios";
    import { store } from './store.js';
    import AppLoader from "./components/AppLoader.vue";

    export default {
      components: {
        AppHeader,
        AppCollection,
        AppLoader
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
          store.isLoading = false;
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
      <AppCollection v-if="!store.isLoading"></AppCollection>
      <AppLoader v-else></AppLoader>
    </main>
</template>

<style lang="scss">
  @use './style/generic';

</style>
