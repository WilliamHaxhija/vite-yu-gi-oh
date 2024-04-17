<script>

import { store } from '../store.js';

  export default {
    name: 'AppSelect',
    data () {
        return {
          store
        }
      }
  }
  
</script>

<template>

  <select v-model="store.searchedArchetype" @change="$emit('searchArchetype')" class="mt-5 p-2 rounded">
    <option class="text-black-50" value="">Scegli un archetipo</option>
    <option v-for="archetype in store.cardsArchetype" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
  </select>

</template>

<style scoped lang="scss">
  
  select {
    width: 20%;
    margin-left: 5rem;
  }

</style>