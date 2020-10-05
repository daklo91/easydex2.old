<template>
  <div>
    <h1 v-if="!searchOutput">Name or Index</h1>
    <input
      v-if="!searchOutput"
      type="text"
      v-model.number="searchInput"
      v-on:keyup.enter="searchPokemon"
    />
    <button v-if="!searchOutput" @click.prevent="searchPokemon">Search</button>
    <div v-if="searchOutput">
      <p>
        #{{ searchOutput.id }}
        {{ searchOutput.name }}
      </p>
      <img
        v-if="searchOutput"
        :src="searchOutput.sprites.front_default"
        :alt="'Image of ' + searchOutput.name"
      />
    </div>
    <button v-if="searchOutput" @click.prevent="reload">
      Reload
    </button>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      searchInput: null,
      searchOutput: null
    }
  },
  computed: {
    pokemons() {
      return this.$store.state.pokemonArray
    }
  },
  methods: {
    searchPokemon() {
      if (typeof this.searchInput === 'number') {
        this.searchOutput = this.pokemons.find(
          pokemon => pokemon.id == this.searchInput
        )
      } else {
        this.searchOutput = this.pokemons.find(
          pokemon => pokemon.name === this.searchInput
        )
      }
    },
    reload() {
      this.searchOutput = null
      this.searchInput = null
    }
  }
}
</script>

<style scoped></style>
