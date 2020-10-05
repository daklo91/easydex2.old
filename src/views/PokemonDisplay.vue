<template>
  <div>
    <h1>Pokemon Display</h1>
    <div>
      <div v-for="(pokemon, index) in pokemons" :key="index">
        <p>#{{ pokemon.id }} {{ pokemon.name }}</p>
        <img
          :src="pokemon.sprites.front_default"
          :alt="'Image of ' + pokemon.name"
        />
      </div>
    </div>

    <PokemonItem />
  </div>
</template>
<script>
import PokemonItem from '@/components/PokemonItem.vue'

export default {
  name: 'PokemonDisplay',
  components: {
    PokemonItem
  },
  computed: {
    pokemons() {
      return this.$store.getters.sortedPokemonArray
    }
  }
}
</script>

<style scoped></style>
