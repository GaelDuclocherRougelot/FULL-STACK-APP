import api from "../../api/api.js";
import VueJwtDecode from "vue-jwt-decode";

const state = {
  users: [],
  isLogged: false,
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
    }else {
      return;
    }
  },
  login({ commit }) {
    commit('setLoggedIn', true)
  },
  logout({ commit }) {
    commit('setLoggedOut', false)
  }
}

const mutations = {
  setUsers(state, users) {
    state.users = users
  },
  setMe(state, user) {
    state.me = user
  },
  setLoggedIn(state, loggedIn) {
    state.isLogged = loggedIn
  },
  setLoggedOut(state, loggedOut) {
    state.isLogged = loggedOut
  },
}

export default {
  state,
  actions,
  mutations
}