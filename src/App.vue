<script>

    import AppHeader from "./components/AppHeader.vue";
    import AppCollection from "./components/AppCollection.vue";
    import axios from "axios";
    import { store } from './store.js';
    import AppLoader from "./components/AppLoader.vue";
    import AppSelect from "./components/AppSelect.vue";

    export default {
      components: {
        AppHeader,
        AppCollection,
        AppLoader,
        AppSelect
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

          if (store.searchedArchetype !== '') {
            queryParams.archetype = store.searchedArchetype
          }

          axios.get(apiUrl, {
            params: queryParams
          }).then((response) => {
            store.cardsList = response.data.data
          });
          store.isLoading = false;
        },
        getArchetypesFromApi() {
          axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
          .then((response) => {
            store.cardsArchetype = response.data;
          });
          }
        },
      mounted() {
        this.getCardsFromApi(),
        this.getArchetypesFromApi()
      }
    }

</script>

<template>

    <AppHeader></AppHeader>
    <main>
      <AppSelect @searchArchetype="getCardsFromApi()"></AppSelect>
      <AppCollection v-if="!store.isLoading"></AppCollection>
      <AppLoader v-else></AppLoader>
    </main>

</template>

<style lang="scss">

  @use './style/generic';

</style>
