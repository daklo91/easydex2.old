<template>
  <div>
    <div class="modal-backdrop">
      <div v-if="filterPokemon" class="modal">
        <h1>#{{ filterPokemon.id }} {{ filterPokemon.name }}</h1>
      </div>
      <div v-else><h1>Loading ...</h1></div>
      <button @click="$router.go(-1)">close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokeModal',
  computed: {
    pokemons() {
      return this.$store.state.pokemonArray
    },
    filterPokemon() {
      let filter = this.pokemons.filter(
        pokemon => pokemon.name === this.$router.currentRoute.params.pathName
      )
      let newFilter = filter[0]
      return newFilter
    }
  }
}
</script>

<style scoped>
.modal {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
.modal-backdrop {
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
