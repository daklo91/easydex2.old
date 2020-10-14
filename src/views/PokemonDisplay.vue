<template>
  <div class="container">
    <router-view> </router-view>

    <div id="home-container">
      <router-link to="/"><p class="main-font">Home</p></router-link>
    </div>

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

<style scoped>
/* #home-container {
  border-bottom: solid #616161 1px;
  width: 100%;
} */
</style>
