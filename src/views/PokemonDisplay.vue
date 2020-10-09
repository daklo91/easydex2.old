<template>
  <div>
    <router-view> </router-view>
    <h1>Pokemon Display</h1>
    <div>
      <div v-for="(pokemon, index) in pokemons" :key="index">
        <router-link
          :to="{
            name: 'PokeModal',
            params: { pathName: pokemon.name }
          }"
          ><p>#{{ pokemon.id }} {{ pokemon.name }}</p>
          <img
            :src="pokemon.sprites.front_default"
            :alt="'Image of ' + pokemon.name"
        /></router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PokemonDisplay',
  computed: {
    pokemons() {
      return this.$store.getters.sortedPokemonArray
    }
  }
}
</script>

<style scoped></style>
