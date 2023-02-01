<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

  return {
    updateUser: onMounted(() => store.dispatch('getMe')),
    me: computed(() => {
      return store.state.users.me
    }),
  }
  }
}
</script>

<template>
  <div class="profile__container" >
    <img :src=me.picture width="50" alt="profile picture">
    <h2>{{ me.nickname }}</h2>
  </div>
</template>

<style scoped>

</style>