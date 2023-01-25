<script setup>
import axios from 'axios';
import {ref, onMounted} from 'vue';

const posts = ref([]);

onMounted(() => {
  axios.get('http://localhost:5000/api/post').then((res) => {
    posts.value = res.data;
  });

});

</script>

<template>
  <div class="posts">
    <article v-for="(post, index) in posts" :key="index">
      <div v-if="post.picture !== ''" class="img_container">
        <img :src=post.picture alt="image post">
      </div>
      <h1>{{ post.message }}</h1>
    </article>
  </div>
</template>

<style scoped>
.posts {
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  article {
    background-color: rgb(163, 162, 162);
    width: 100%;
    height: 500px;
    margin-bottom: 1.5rem;
  }
  .img_container {
    width: 100%;
    text-align: center;
  }
    .img_container img {
      width: 100%;
  }
</style>