<template>
  <div>
    <!-- TYPE Options -->
    <div class="flex flex-row justify-center">
      <div class="flex flex-col items-center mx-2">
        <div v-for="type in types" :key="type">
          <button
            :style="{ background: pokemonColorByType(type) + 90 }"
            class="main-font text-gray-800 p-2 m-1 rounded-3xl"
            @click.prevent="pushTypeToFilter(type)"
          >
            {{ type }}
          </button>
        </div>
      </div>
      <div class="flex flex-col items-center mx-2">
        <div v-for="type in types2" :key="type">
          <button
            :style="{ background: pokemonColorByType(type) + 90 }"
            class="main-font text-gray-800 p-2 m-1 rounded-3xl"
            @click.prevent="pushTypeToFilter(type)"
          >
            {{ type }}
          </button>
        </div>
      </div>
    </div>
    <p>{{ filterType }}</p>
    <br />
    <hr />
    <br />
    <!-- WEIGHT Options -->
    <div class="flex flex-row">
      <button @click="weightLow = !weightLow">
        Low weight: {{ weightLow }}
      </button>
      <button @click="weightMed = !weightMed">
        Medium Weight: {{ weightMed }}
      </button>
      <button @click="weightHigh = !weightHigh">
        High Weight: {{ weightHigh }}
      </button>
    </div>
    <br />
    <hr />
    <br />
    <!-- HEIGHT Options -->
    <div class="flex flex-row">
      <button @click="heightLow = !heightLow">
        Low Height: {{ heightLow }}
      </button>
      <button @click="heightMed = !heightMed">
        Medium Height: {{ heightMed }}
      </button>
      <button @click="heightHigh = !heightHigh">
        High Height: {{ heightHigh }}
      </button>
    </div>
    <br />
    <hr />
    <br />
    <!-- INDEX Options -->
    <div>
      <p>Index:</p>
      <input type="number" min="1" v-model.number="indexMin" />
      to
      <input type="number" max="151" v-model.number="indexMax" />
    </div>

    <button @click.prevent="resetFilter">Reset</button>

    <div v-for="pokemon in filterPokemons" :key="pokemon.id">
      <p>#{{ pokemon.id }} {{ pokemon.name }} Height: {{ pokemon.height }}</p>
      <img
        :src="pokemon.sprites.front_default"
        :alt="'Image of ' + pokemon.name"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonFilter',
  data() {
    return {
      types: [
        'Bug',
        'Dark',
        'Dragon',
        'Electric',
        'Fairy',
        'Fighting',
        'Fire',
        'Flying',
        'Ghost'
      ],
      types2: [
        'Grass',
        'Ground',
        'Ice',
        'Normal',
        'Poison',
        'Psychic',
        'Rock',
        'Steel',
        'Water'
      ],
      filterType: '',
      weightLow: false,
      weightMed: false,
      weightHigh: false,
      heightLow: false,
      heightMed: false,
      heightHigh: false,
      indexMin: '',
      indexMax: '',
      indexMinDefault: 1,
      indexMaxDefault: 151
    }
  },
  computed: {
    pokemons() {
      return this.$store.state.pokemonArray
    },
    filterPokemons: function() {
      let filtered = this.pokemons

      //sort by TYPE
      if (this.filterType) {
        filtered = filtered.filter(pokemon =>
          pokemon.types.some(type => this.filterType.includes(type.type.name))
        )
      }

      //sort by WEIGHT
      let maxWeight = 99999
      let minWeight = 0
      if (this.weightLow && this.weightMed && this.weightHigh) {
        maxWeight = 99999
      } else if (this.weightLow && this.weightMed && !this.weightHigh) {
        maxWeight = 800
      } else if (this.weightMed && this.weightHigh && !this.weightLow) {
        minWeight = 200
        maxWeight = 99999
      } else if (this.weightLow) {
        maxWeight = 200
      } else if (this.weightMed) {
        maxWeight = 800
        minWeight = 200
      } else if (this.weightHigh) {
        maxWeight = 99999
        minWeight = 800
      }
      if (this.weightLow && this.weightHigh && !this.weightMed) {
        maxWeight = 800
        minWeight = 200
        for (var i = minWeight; i <= maxWeight; i++) {
          filtered = filtered.filter(pokemon => pokemon.weight !== i)
        }
      } else {
        filtered = filtered.filter(pokemon => pokemon.weight >= minWeight)
        filtered = filtered.filter(pokemon => pokemon.weight <= maxWeight)
      }

      //sort by HEIGHT
      let maxHeight = 99999
      let minHeight = 0
      if (this.heightLow && this.heightMed && this.heightHigh) {
        maxHeight = 99999
      } else if (this.heightLow && this.heightMed && !this.heightHigh) {
        maxHeight = 20
      } else if (this.heightMed && this.heightHigh && !this.heightLow) {
        minHeight = 10
        maxHeight = 99999
      } else if (this.heightLow) {
        maxHeight = 10
      } else if (this.heightMed) {
        maxHeight = 20
        minHeight = 10
      } else if (this.heightHigh) {
        maxHeight = 99999
        minHeight = 20
      }
      if (this.heightLow && this.heightHigh && !this.heightMed) {
        maxHeight = 20
        minHeight = 10
        for (var j = minHeight; j <= maxHeight; j++) {
          filtered = filtered.filter(pokemon => pokemon.height !== j)
        }
      } else {
        filtered = filtered.filter(pokemon => pokemon.height >= minHeight)
        filtered = filtered.filter(pokemon => pokemon.height <= maxHeight)
      }

      //sort by INDEX

      if (this.indexMin) {
        filtered = filtered.filter(pokemon => pokemon.id >= this.indexMin)
      } else {
        filtered = filtered.filter(
          pokemon => pokemon.id >= this.indexMinDefault
        )
      }
      if (this.indexMax) {
        filtered = filtered.filter(pokemon => pokemon.id <= this.indexMax)
      } else {
        filtered = filtered.filter(
          pokemon => pokemon.id <= this.indexMaxDefault
        )
      }

      return filtered
    }
  },
  methods: {
    resetFilter() {
      this.filterType = ''
      this.weightLow = false
      this.weightMed = false
      this.weightHigh = false
      this.heightLow = false
      this.heightMed = false
      this.heightHigh = false
      this.indexMin = ''
      this.indexMax = ''
    },
    pushTypeToFilter(type) {
      let typeLower = type.toLowerCase()
      if (this.filterType === '') {
        this.filterType = []
      }
      if (this.filterType.includes(typeLower)) {
        this.filterType.splice(this.filterType.indexOf(typeLower), 1)
      } else this.filterType.push(typeLower)
      if (this.filterType.length === 0) {
        this.filterType = ''
      }
    },
    pokemonColorByType(type) {
      var color = null
      type = type.toLowerCase()
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
