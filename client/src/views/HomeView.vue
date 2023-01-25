<script setup>
import Header from "../components/Header.vue";
import Posts from "../components/Posts.vue";
</script>

<template>
  <div class="home">
    <Header />
    <main>
      <Posts />
    </main>
  </div>
</template>

<style scoped>

  .home {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }
  main {
    margin-top: 7rem;
    height: 100%;
  }
</style>