<script>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

  export default {
    setup() {
      const user = ref({
        email: '',
        password: ''
      });

      const resError = ref({});
      const router = useRouter();

      const login = computed(() => {
        axios.post(`http://localhost:5000/api/user/login`, {
          "email": user.value.email,
          "password": user.value.password
        }).then(res => {
          if(res.data.errorLogin) {
            resError.value = res.data.errorLogin
          }else {
            localStorage.setItem('token', res.data.access_token);
            router.push('/')
          }
        })
      });

      return {
        user,
        login,
        resError
      }
    }
  }
</script>

<template>
  <div class="form__container">
    <form @submit.prevent="login">
      <fieldset>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="user.email">
        <p v-if="resError !== {} && resError.email">{{ resError.email }}</p>
      </fieldset>
      <fieldset>
        <label for="password">Mot de passe</label>
        <input type="password" name="password" id="password" v-model="user.password">
        <p v-if="resError !== {} && resError.password">{{ resError.password }}</p>
      </fieldset>
      <button type="submit">Connexion</button>
    </form>
    <p>Pas encore inscrit ?</p>
  </div>
</template>