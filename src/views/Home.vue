<template>
  <div class="p-4 flex flex-col items-center">
    <router-link to="/about" id="info-icon" class="self-end p-4">
      <img src="@/assets/infoIcon.png" alt="Information Icon" />
    </router-link>
    <h1 id="main-headline">Easydex</h1>
    <p id="sub-headline" class="-mt-7 mb-8">Gotta Index 'em all!</p>
    <img src="@/assets/logo.png" alt="Pokedex Logo" id="pokedex-logo" />

    <router-link to="/display" class="flex flex-col items-center mt-16">
      <p class="main-font text-2xl">Browse</p>
      <img
        class="animate-bounce mt-2"
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
  color: #f8c822;
  font-family: 'Bangers';
  font-size: 72px;
  -webkit-text-stroke: 3px #1a56c1;
}

#sub-headline {
  color: #808080;
  font-family: 'Varela Round';
}

/* #info-icon {
  margin-top: 10px;
  margin-left: 265px;
}

#pokedex-logo {
  margin-bottom: 85px;
} */
</style>
