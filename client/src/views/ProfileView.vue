<script setup>
import Header from '../components/Header.vue';
import Profile from '../components/Profile.vue';
</script>

<template>
    <div class="profile">
      <Header />
      <main>
        <Profile />
      </main>
    </div>
</template>

<style scoped>
.profile {
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