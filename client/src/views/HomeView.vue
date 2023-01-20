<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: []
    }
  },
  mounted() {
    axios.get('http://localhost:5000/api/user').then((res) => {
      console.log(res.data);
      return this.users = res.data;
    })
  },
}
</script>

<template>
  <main>
    <ul>
      <li v-for="(user, index) in users" :key="index">{{ user.nickname }}</li>
    </ul>
  </main>
</template>
