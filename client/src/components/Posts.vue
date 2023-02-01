<script>
import {ref, onMounted, computed, reactive} from 'vue';
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

  return {
    updatePosts: onMounted(() => store.dispatch('getPosts')),
    updateUsers: onMounted(() => store.dispatch('getUsers')),
    updateUser: onMounted(() => store.dispatch('getMe')),
    posts: computed(() => {
      return store.state.posts
    }),
    users: computed(() => {
      return store.state.users
    })
  };
}
}
</script>

<template>
  <div class="posts">
    <article v-for="(post, index) in posts.posts" :key="index">
      <div v-for="(user, index) in users.users" :key="index" class="user__info">
          <img v-if="user._id === post.posterId" :src=user.picture width="50" alt="user picture">
          <h2 v-if="user._id === post.posterId">{{ user.nickname }}</h2>
          <font-awesome-icon class="follow__icon" v-if="user._id === post.posterId" icon="fa-solid fa-user-plus" size="xs" />
      </div>
      <div class="message">
        <p>{{ post.message }}</p>
      </div>
      <div class="img__container">
        <img v-if="post.picture" :src=post.picture alt="image post">
      </div>
      <div class="content__container">
        <div class="post__icones">
          <font-awesome-icon class="icon" icon="fa-regular fa-heart" size="2x" />
          <font-awesome-icon class="icon" icon="fa-regular fa-comment" size="2x" />
        </div>
        
      <div class="comments">
        
      </div>
      </div>


    </article>
  </div>
</template>

<style scoped>
.posts {
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  article {
    width: 100%;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 1rem;
    font-family: var(--roboto);
        box-shadow: -1px 5px 10px -2px rgba(0, 0, 0, 0.39);
          -webkit-box-shadow: -1px 5px 10px -2px rgba(0, 0, 0, 0.39);
          -moz-box-shadow: -1px 5px 10px -2px rgba(0, 0, 0, 0.39);
  }

  .user__info {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .user__info img {
    margin: 0.6rem;
    border-radius: 50%;
  }

  .follow__icon {
    margin-left: 0.5rem;
    cursor: pointer;
  }

  .message {
    width: 100%;
  }

  .message p {
    padding: 1rem;
  }
  
  .img__container {
    width: 100%;
    max-width: 600px;
  }
  .img__container img {
      width: 100%;
      min-width: 200px;
  }

  .content__container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .content__container p {
    padding: 1rem 0 1rem 1rem;
  }

  .icon{
    padding: 0.3rem 0.3rem 0 0.3rem;
  }
</style>