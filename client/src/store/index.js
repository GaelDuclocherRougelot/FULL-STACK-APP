import { createStore } from "vuex";
import posts from './modules/posts';
import users from './modules/users';



const store = createStore({
  modules: {
    posts,
    users
  }
})

export default store;
