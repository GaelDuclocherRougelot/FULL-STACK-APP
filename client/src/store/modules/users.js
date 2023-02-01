import api from "../../api/api.js";
import VueJwtDecode from "vue-jwt-decode";

const state = {
  users: [],
  loggedIn: null,
  me: null
}

const actions = {
  getUsers({ commit }) {
    api.getAllUsers().then(users => {
      commit('setUsers', users)
    })
  },
  getMe({ commit }) {
    const token = localStorage.getItem('token');
    if (token) {
      let decoded = VueJwtDecode.decode(token)
        api.getMyProfile(decoded.id).then(user => {
          commit('setMe', user)
        });
    }

  }
}

const mutations = {
  setUsers(state, users) {
    state.users = users
  },
  setMe(state, user) {
    state.me = user
  }
}

export default {
  state,
  actions,
  mutations
}