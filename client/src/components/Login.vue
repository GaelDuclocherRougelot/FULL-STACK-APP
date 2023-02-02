<script>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'
import axios from 'axios';

  export default {
    setup() {
      const user = ref({
        email: '',
        password: ''
      });

      const store = useStore();
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
            store.dispatch('login');
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
        <input type="email" name="email" id="email" v-model="user.email" required>
        <p v-if="resError !== {} && resError.email">{{ resError.email }}</p>
      </fieldset>
      <fieldset>
        <label for="password">Mot de passe</label>
        <input type="password" name="password" id="password" v-model="user.password" required>
        <p v-if="resError !== {} && resError.password">{{ resError.password }}</p>
      </fieldset>
      <button type="submit">Connexion</button>
    </form>
    <p>Pas encore inscrit ?</p>
  </div>
</template>

<style scoped>
.form__container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: var(--roboto);
}

.form__container p {
  text-align: center;
  margin-top: 1rem;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

fieldset {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;
}

label {
  align-self: flex-start;
  position: absolute;
  margin-left: 1rem;
  transition: ease .3s;
  font-weight: 300;
}

input {
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: whitesmoke;
  border: #bbbbbb solid 1px;
  font-size: 1rem;
}

input:focus {
  outline-color: var(--orange);
}

fieldset:focus-within label {
  transform: translate(-15%, -250%);
  transition: ease .3s;
  color: var(--orange);
  font-weight: bold;
  font-size: 0.9rem;
}

input:valid + label {
  color: blue;
}

form button {
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
}
</style>