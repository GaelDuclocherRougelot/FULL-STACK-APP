<script setup>
import Header from '../components/Header.vue';
import Login from '../components/Login.vue';

</script>

<template>
  <div class="login">
    <Header />
    <main>
      <Login />
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