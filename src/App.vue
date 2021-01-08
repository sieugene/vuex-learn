<template>
  <div id="app">
    <h1>posts - {{ postsCount }}</h1>
    <PostForm />
    <div class="post" v-for="post of validPosts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostForm from "./components/PostForm";

export default {
  name: "App",
  components: {
    PostForm,
  },
  computed: mapGetters(["validPosts", "postsCount"]),
  methods: mapActions(["fetchPosts"]),
  async mounted() {
    this.fetchPosts(5);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 440px;
}
.post {
  border: 1px solid silver;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
