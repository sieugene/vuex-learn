export default {
  actions: {
    async fetchPosts({ commit, dispatch }, limit = 3) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      const posts = await response.json();
      commit("updatePosts", posts);
      dispatch("sayHello");
    },
    sayHello() {
      console.log("hello");
    },
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost);
    },
  },
  state: {
    posts: [],
  },
  getters: {
    allPosts(state) {
      return state.posts;
    },
    postsCount(state, getters) {
      const posts = getters.validPosts;
      return posts.length ? posts.length : 0;
    },
    validPosts(state) {
      return state.posts.filter((p) => {
        return p.title && p.body;
      });
    },
  },
};
