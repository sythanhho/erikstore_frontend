<template>
  <div class="home">
    <AppBar />
    <!-- <NavBar /> -->
    <!-- <Body /> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import AppBar from "@/views/AppBar.vue";
import NavBar from "@/views/NavBar.vue";
import Body from "@/views/Body.vue";

@Component({
  components: {
    AppBar,
    NavBar,
    Body,
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
