<!-- components/Header.vue -->
<template>
  <header>
    <nav class="pt-24 pb-24">
      <ul>
        <li><NuxtLink to="/">Accueil</NuxtLink></li>
        <li><NuxtLink to="/about">À propos</NuxtLink></li>
        <span>{{ nbPages }} pages</span>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    nbPages() {
      return this.$store.getters['pages/pages'].length;
    },
  },
}
</script>


<style scoped lang="scss">
nav {
  z-index: 999;
  position: fixed;
  color: white;
  width: 100%;
  background-image: linear-gradient(90deg,#9ee486,#87e76f);
  
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5vw;
    width: 100%;

    h2 {
      justify-self: start;
    }

    li:hover {
      text-decoration: underline;
    }

    span {
      // margin-left: auto;
    }
  }
}

a {
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>