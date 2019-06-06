<template>
    <div class="app-wrapper">
        Home
    </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  @Component({})
  export default class Home extends Vue {
    mounted () {
      console.log('Home Page mounted')
    }
  }
</script>
