<template>
  <div>
    <h1>Pokemon Display</h1>
    <PokemonItem />
  </div>
</template>

<script>
import PokemonItem from '@/components/PokemonItem.vue'

export default {
  name: 'PokemonDisplay',
  components: {
    PokemonItem
  }
}
</script>

<style scoped></style>
