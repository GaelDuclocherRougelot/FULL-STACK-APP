import api from "../../api/api.js";

const state = {
  posts: []
}

const actions = {
  getPosts({ commit }) {
    api.getAllPosts().then(posts => {
      commit('setPosts', posts)
    })
  }
}

const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  }
}

export default {
  state,
  actions,
  mutations
}