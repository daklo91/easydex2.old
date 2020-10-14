<template>
  <div id="app" class="box-content mx-auto">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/display">Pokemon Display</router-link> |
      <router-link to="/search">Search</router-link> |
      <router-link to="/filter">Filter</router-link>
    </div> -->
    <div class="p-4"><router-view /></div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('loadAllPokemonData')
  }
}
</script>

<style>
#app {
  /* Standard values for a standard android. Will keep these applied to the whole app until I start developing for bigger screens */
  width: 360px;
  height: 640px;
}
/* body {
  overflow: hidden;
  background: repeating-linear-gradient(
    45deg,
    #ffffff,
    #ffffff 10px,
    rgb(241, 253, 255) 40px,
    rgb(241, 253, 255) 80px
  );
}

#app {
  text-align: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}

.container {
  display: flex;

  align-items: center;
  margin-top: 100px;
  width: 360px;
  height: 640px;
  flex-direction: column;
  background: white;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: auto;
}

a {
  text-decoration: none;
} */

.main-font {
  color: #616161;
  font-family: 'Press Start 2P';
  font-size: 24px;
  font-weight: 400;
}

@font-face {
  font-family: 'Press Start 2P';
  src: local('Press Start 2P'),
    url(./fonts/PressStart2P-Regular.ttf) format('truetype');
}

@font-face {
  font-family: 'Bangers';
  src: local('Bangers'), url(./fonts/Bangers-Regular.ttf) format('truetype');
}

@font-face {
  font-family: 'Varela Round';
  src: local('Varela Round'),
    url(./fonts/VarelaRound-Regular.ttf) format('truetype');
}

/* .container::-webkit-scrollbar {
  display: none;
}


.container {
  -ms-overflow-style: none; 
  scrollbar-width: none; 
} */
</style>
