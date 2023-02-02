<script>
import { computed, ref, onMounted } from "@vue/runtime-core";
import { useStore } from 'vuex'
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const logout = computed(() => {
      localStorage.removeItem("token");
      store.dispatch('logout')
      router.push("/");
    });

    return {
      isLogged: computed(() => store.state.users.isLogged),
      logout,
      path: computed(() => route.path),
    };
  },
};
</script>

<template>
  <header>
    <router-link to="/">
      <img src="../assets/logo.svg" alt="LOGO" />
    </router-link>
<!-- NAV SECTION -->
    <nav>
      <ul>
        <!-- Login -->
        <router-link
          v-if="!isLogged && path !== '/login'"
          tag="li"
          to="/login"
          class="link"
          style="text-decoration: none; color: inherit"
        >
          Connexion
        </router-link>
        <!-- Logout -->
        <li class="link" v-else-if="isLogged" @click="logout">
          <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
        </li>
        <!-- Profile -->
        <router-link
          v-show="isLogged && path !== '/profile'"
          tag="li"
          to="/profile"
          class="link"
          style="text-decoration: none; color: inherit"
        >
          <font-awesome-icon icon="fa-solid fa-user" />
        </router-link>
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
.link {
  background: #803c3c;
  background: linear-gradient(304deg, #fbfbfb 0%, #f3f3f3 80%);
  background: -webkit-linear-gradient(304deg, #fbfbfb 0%, #f3f3f3 80%);
  background: -moz-linear-gradient(304deg, #fbfbfb 0%, #f3f3f3 80%);
  border-radius: 1rem;
  margin-right: 1rem;
  cursor: pointer;
  padding: 1rem;
}

img {
  width: 40px;
  margin-left: 1rem;
}
</style>