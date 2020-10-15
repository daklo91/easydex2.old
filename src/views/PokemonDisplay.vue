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

    <div
      class="color-overflow p-5 w-full h-370px m-5"
      v-for="(pokemon, index) in pokemons"
      :key="index"
    >
      <div class="innerDiv ">
        <p>#{{ pokemon.id }} {{ pokemon.name }}</p>
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
    }
  }
}
</script>

<style scoped>
.color-overflow {
  background: radial-gradient(circle, #79ff4a, #ffffff);
}
</style>
