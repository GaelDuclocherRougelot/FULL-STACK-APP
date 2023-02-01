<script>
import { computed, ref, onMounted } from '@vue/runtime-core';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';

export default {
  setup() {
    
    const router = useRouter();
    const route = useRoute();
    let isLogged = ref(localStorage.getItem('token'));

    const logout = computed(() => {
      localStorage.removeItem('token');
      router.push('/')
      return isLogged.value = false;
    })

    return {
      isLogged,
      logout,
      path: computed(() => route.path)
    }
  }
}

</script>

<template>
  <header>
    <router-link to="/">
      <img src="../assets/logo.svg" alt="LOGO">
    </router-link>
    
    <nav>
      <ul>
        <li v-if="!isLogged"><router-link to="/login" style="text-decoration: none; color: inherit;">Connexion</router-link></li>
        <li v-else-if="isLogged" @click="logout">Déconnexion</li>
        <li v-show="isLogged && path !== '/profile'"><router-link to="/profile" style="text-decoration: none; color: inherit;">Profil</router-link>
        </li>
      </ul>
    </nav>
  </header>  
</template>

<style scoped>
router-link {
  text-decoration: none;
}
header {
    background-color: white;
    width: 100vw;
    height: 5rem;
    position: fixed;
    font-family: var(--roboto);
    font-weight: 300;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: -1px 5px 10px -2px rgba(0, 0, 0, 0.39);
      -webkit-box-shadow: -1px 5px 10px -2px rgba(0, 0, 0, 0.39);
      -moz-box-shadow: -1px 5px 10px -2px rgba(0, 0, 0, 0.39);
  }

  ul {
    display: flex;
    flex-direction: row-reverse;
  }
  li {
    background: #803c3c;
      background: linear-gradient(304deg, #fbfbfb 0%, #f3f3f3 80%);
      background: -webkit-linear-gradient(304deg, #fbfbfb 0%, #f3f3f3 80%);
      background: -moz-linear-gradient(304deg, #fbfbfb 0%, #f3f3f3 80%);
    padding: 1rem;
    border-radius: 1rem;
    margin-right: 1rem;
    cursor: pointer;
  }
  
  img {
    width: 40px;
    margin-left: 1rem;
  }
</style>