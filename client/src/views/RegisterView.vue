<script setup>
import Header from '../components/Header.vue';
</script>

<template>
  <div class="register">
    <Header />
    <main>
      <h1>Inscription</h1>
    </main>
  </div>
</template>

<style scoped>
.register {
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