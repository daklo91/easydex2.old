<template>
  <div>
    <router-link to="/about" id="info-icon">
      <img src="@/assets/infoIcon.png" alt="Information Icon" />
    </router-link>
    <h1 id="main-headline">Easydex</h1>
    <p id="sub-headline">Gotta Index 'em all!</p>
    <img src="@/assets/logo.png" alt="Pokedex Logo" id="pokedex-logo" />

    <router-link to="/display">
      <p class="main-font">Browse</p>
      <img
        src="@/assets/navigationArrow.png"
        alt="Navigate to Pokemon Display"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
#main-headline {
  width: 200px;
  height: 77px;
  color: #f8c822;
  font-family: 'Bangers';
  font-size: 72px;
  font-weight: 400;
  -webkit-text-stroke: 3px #1a56c1;
}

#sub-headline {
  color: #808080;
  font-family: 'Varela Round';
  font-size: 16px;
  font-weight: 400;
  margin-top: -8px;
  margin-bottom: 35px;
}

/* #info-icon {
  margin-top: 10px;
  margin-left: 265px;
}

#pokedex-logo {
  margin-bottom: 85px;
} */
</style>
