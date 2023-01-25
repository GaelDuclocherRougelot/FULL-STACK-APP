<script setup>
import Header from '../components/Header.vue';
</script>

<template>
  <div class="login">
    <Header />
    <main>
      <h1>Connexion</h1>
    </main>
  </div>
</template>

<style scoped>
.login {
    height: 100vh;
    display: flex;
    width: 100vw;
    flex-direction: column;
}

main {
  margin-top: 7rem;
  height: 100%;
}
</style>