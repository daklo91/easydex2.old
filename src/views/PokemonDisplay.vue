<template>
  <div class="flex flex-col items-center">
    <router-view> </router-view>

    <div class="border-b-2 border-pokeGrayLight w-full text-center">
      <router-link to="/"
        ><p class="main-font m-4 text-xl">
          Home
        </p></router-link
      >
    </div>
    <div class="flex w-full">
      <div class="border-b-2 border-pokeGrayLight w-full text-center">
        <router-link to="/search"
          ><p class="main-font m-4 text-xl">
            Search
          </p></router-link
        >
      </div>
      <div
        class="border-b-2 border-l-2 border-pokeGrayLight w-full text-center"
      >
        <router-link to="/filter"
          ><p class="main-font m-4 text-xl">
            Filter
          </p></router-link
        >
      </div>
    </div>
    <div
      class="p-5 w-full h-370px text-center"
      :style="{
        background:
          'radial-gradient(closest-side,' +
          pokemonColorByType(pokemon.types[0].type.name) +
          ', #ffffff)'
      }"
      v-for="pokemon in pokemons"
      :key="pokemon.id"
    >
      <p class="main-font">#{{ pokemon.id }} {{ pokemon.name }}</p>
      <div
        class="border-4 rounded-3xl transform scale-75"
        :style="{
          background: pokemonColorByType(pokemon.types[0].type.name) + 50,
          borderColor:
            pokemon.types.length == 1
              ? pokemonColorByType(pokemon.types[0].type.name)
              : pokemonColorByType(pokemon.types[1].type.name)
        }"
      >
        <router-link
          :to="{
            name: 'PokeModal',
            params: { pathName: pokemon.name }
          }"
          ><img
            :src="
              'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' +
                pokemonImage(pokemon.id) +
                '.png'
            "
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
  },
  methods: {
    pokemonImage(id) {
      if (id < 10) {
        id = '00' + id
      } else if (id < 100) {
        id = '0' + id
      }
      return id
    },
    pokemonColorByType(type) {
      var color = null
      if (type === 'bug') {
        color = '#a8b820'
      } else if (type === 'dark') {
        color = '#705848'
      } else if (type === 'dragon') {
        color = '#7038f8'
      } else if (type === 'electric') {
        color = '#f8d030'
      } else if (type === 'fairy') {
        color = '#ffa0c2'
      } else if (type === 'fighting') {
        color = '#c03028'
      } else if (type === 'fire') {
        color = '#f08030'
      } else if (type === 'flying') {
        color = '#a890f0'
      } else if (type === 'ghost') {
        color = '#705898'
      } else if (type === 'grass') {
        color = '#78c850'
      } else if (type === 'ground') {
        color = '#e0c068'
      } else if (type === 'ice') {
        color = '#98d8d8'
      } else if (type === 'normal') {
        color = '#a8a878'
      } else if (type === 'poison') {
        color = '#a040a0'
      } else if (type === 'psychic') {
        color = '#f85888'
      } else if (type === 'rock') {
        color = '#b8a038'
      } else if (type === 'steel') {
        color = '#7b8e8a'
      } else if (type === 'water') {
        color = '#6890f0'
      }
      return color
    }
  }
}
</script>

<style scoped></style>
