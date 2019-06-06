<template>
  <div id="app" class="app-wrapper">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class App extends Vue {
  created () {
    console.log('App Page created')
  }
  mounted () {
    console.log('App Page mounted')
  }
}
</script>

<style >
  @import "assets/styles/main.scss";
</style>
