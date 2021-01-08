<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="title" v-model="title" />
    <input type="text" placeholder="body" v-model="body" />
    <button type="submit">Create post</button>
    <hr />
  </form>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["createPost"]),
    submit() {
      const newPost = {
        title: this.title,
        body: this.body,
        id: Date.now(),
      };
      this.createPost(newPost);
      this.title = "";
      this.body = "";
    },
  },
  data() {
    return {
      title: "",
      body: "",
    };
  },
};
</script>
<style scoped>
input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 2px;
}
form {
  margin-bottom: 10px;
}
</style>
