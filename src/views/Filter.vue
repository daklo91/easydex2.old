<template>
  <div>
    <h1>Filter</h1>
    <!-- TYPE Options -->
    <div>
      <div v-for="(type, index) in types" :key="index">
        <button @click.prevent="pushTypeToFilter(type)">{{ type }}</button>
      </div>
    </div>
    <p>{{ filterType }}</p>

    <!-- WEIGHT Options -->
    <div>
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

    <!-- HEIGHT Options -->
    <div>
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
  name: 'Filter',
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
        'Ghost',
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
    }
  }
}
</script>

<style scoped></style>
