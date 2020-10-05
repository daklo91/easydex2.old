import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemonArray: []
  },
  mutations: {
    SET_POKEMON_ARRAY(state, payload) {
      state.pokemonArray = payload
    }
  },
  actions: {
    loadAllPokemonData({ commit }) {
      let pokemonUrlArray = []
      let pokemonAllInfoArray = []

      axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(function(response) {
          pokemonUrlArray = response.data.results
        })
        .catch(function(error) {
          console.log(error)
        })

        .then(function() {
          pokemonUrlArray.forEach(object =>
            axios.get(object.url).then(function(response) {
              pokemonAllInfoArray.push(response.data)
            })
          )
        })
        .catch(function(error) {
          console.log(error)
        })
        .then(function() {
          commit('SET_POKEMON_ARRAY', pokemonAllInfoArray)
        })
    }
  },
  getters: {
    sortedPokemonArray: state => {
      return state.pokemonArray.sort((a, b) => (a.id > b.id ? 1 : -1))
    }
  }
})
