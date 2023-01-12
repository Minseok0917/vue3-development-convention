<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  312
  <router-view></router-view>
</template>

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { useUserStore } from "./stores";

const { storeUser } = useUserStore();
</script>
