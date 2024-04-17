<script>

import { store } from '../store.js';

  export default {
    name:'AppResultNumber',
    data () {
      return {
        store
      }
    }
  }

</script>

<template>

    <div class="result bg-dark pt-2 px-3">
        <h6>Found {{ store.cardsList.length }} cards</h6>
    </div>

</template>

<style scoped lang="scss">

.result {
    height: 50px;
    margin-bottom: -1rem;
    color: white;
  }

</style>
