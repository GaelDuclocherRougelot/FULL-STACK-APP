import api from "../../api/api.js";

const state = {
  posts: [],
  users: []
}

const actions = {
  getPosts({ commit }) {
    api.getAllPosts().then(posts => {
      commit('setPosts', posts)
    })
  },
  getUsers({ commit }) {
    api.getAllUsers().then(users => {
      commit('setUsers', users)
    })
  }
}

const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  },
  setUsers(state, users) {
    state.users = users
  }
}

export default {
  state,
  actions,
  mutations
}