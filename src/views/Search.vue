<template>
  <div class="text-center">
    <router-link to="/display">
      <div class="h-12 w-12 m-4 text-pokeGrayLight">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </div>
    </router-link>
    <img
      v-if="!searchOutput"
      src="https://s1.zerochan.net/Pikachu.600.2557713.jpg"
      alt=""
      class="transform scale-80"
    />
    <h1 v-if="!searchOutput" class="main-font">Name or Index</h1>
    <div class="flex flex-col items-center">
      <input
        placeholder="Search for a Pokémon"
        v-if="!searchOutput"
        type="text"
        v-model.number="searchInput"
        v-on:keyup.enter="searchPokemon"
        class="shadow-lg w-3/4"
      />
      <button v-if="!searchOutput" @click.prevent="searchPokemon">
        Search
      </button>
    </div>
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
