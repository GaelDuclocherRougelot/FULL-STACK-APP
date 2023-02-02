<script>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import api from "../api/api";
import VueJwtDecode from "vue-jwt-decode";

export default {
  setup() {
    const store = useStore();
    const hover = ref(false);
    const isOpen = ref(false);
    const bio = ref("");

    const me = computed(() => {
      return store.state.users.me;
    });

    const updateBio = computed(() => {
      isOpen.value = false;
      const token = localStorage.getItem("token");
      if (token) {
        let decoded = VueJwtDecode.decode(token);
        api.updateBio(decoded.id, bio.value).then((user) => {
          store.commit("getMe", user);
          return me;
        });
      } else {
        return;
      }
    });

    return {
      updateUser: onMounted(() => store.dispatch("getMe")),
      me,
      hover,
      isOpen,
      updateBio,
      bio,
    };
  },
};
</script>

<template>
  <div class="profile__container">
    <!-- USER -->
    <img
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      :src="me.picture"
      alt="profile picture"
    />
    <div v-show="hover" class="edit__img--desktop">
      <font-awesome-icon icon="fa-regular fa-pen-to-square" size="lg" />
    </div>
    <div class="edit__img--mobile"></div>
    <!-- STATS -->
    <h2 class="nickname">{{ me.nickname }}</h2>
    <div class="stats__container">
      <p>Abonnés {{ me.followers.length }}</p>
      <p>Suivi {{ me.following.length }}</p>
    </div>
    <!-- BIO -->
    <div class="bio__container">
      <h3 class="bio__title">Bio</h3>
      <button
      @click="isOpen = true"
      v-if="!isOpen && me.bio === undefined && bio === ''"
      class="add-bio-button"
      >
      Ajouter une bio
    </button>
    <font-awesome-icon icon="fa-regular fa-pen-to-square" id="fa-pen-to-square--black" size="lg"/> 
      <div v-show="me.bio || bio" class="bio__container--contents">
        <p>{{ me.bio || bio }}</p>
      </div>
    </div>
    <!-- MODAL -->
    <div v-if="isOpen" class="edit__bio__container">
      <textarea
        v-show="!me.bio"
        name="bio"
        id="bio__edit"
        maxlength="250"
        v-model="bio"
      ></textarea>
      <button @click="updateBio" class="add-bio-button">Enregister</button>
      <button
        @click="(bio = ''), (isOpen = false)"
        class="add-bio-button add-bio-button--back"
      >
        Annuler
      </button>
    </div>
  </div>
</template>

<style scoped>
.profile__container {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  font-family: var(--roboto);
}

img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin: 1rem;
}

.nickname {
  font-size: 1.5rem;
}

.bio__title {
  margin: 1rem;
  font-size: 1.2rem;
}

.bio__container {
  margin-top: 1rem;
  width: 90%;
}
.bio__container--contents {
  margin: 1rem;
  padding: 1rem;
  background-color: var(--cornflower_blue);
  border-radius: 1.3rem 0rem;
}

.bio__container--contents p {
  line-height: 1.3rem;
}

.stats__container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 1rem;
}

.stats__container p {
  margin: 1rem;
}

#bio__edit {
  width: 100%;
  height: 130px;
  overflow: hidden;
  resize: none;
  font-size: 1rem;
  font-family: var(--roboto);
  font-weight: 300;
}

.edit__img--desktop {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.637);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: 8rem;
}

.fa-pen-to-square {
  color: #fff;
}

#fa-pen-to-square--black {
  color: #000;
}

.add-bio-button {
  padding: 12px 20px;
  border: none;
  border-radius: 30px;
  background-color: #2196f3;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
}
.add-bio-button:hover {
  background-color: #1e88e5;
  transform: translateY(-2px);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.add-bio-button--back {
  background-color: rgb(223, 4, 4);
}

.add-bio-button--back:hover {
  background-color: #bb0000;
  transform: translateY(-2px);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
</style>