import api from "../../api/api.js";

const state = {
  users: [],
  loggedIn: null
}

const actions = {
  getUsers({ commit }) {
    api.getAllUsers().then(users => {
      commit('setUsers', users)
    })
  }
}

const mutations = {
  setUsers(state, users) {
    state.users = users
  }
}

export default {
  state,
  actions,
  mutations
}