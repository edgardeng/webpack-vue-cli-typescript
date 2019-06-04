<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
  import { State, Action, Mutation, Getter } from 'vuex-class'

  @Component({})
  export default class App extends Vue {
    // data
    title = 'App'

    @Prop({ default: '' })
    text: string

    // store
    @Getter('userId') getUserId

    // computed
    get name (): string {
      return this.text + this.title
    }

    // methods
    sayHello(): void {
      alert(`Hello ${this.title}`)
    }

    // watch
    @Watch('text')
    onChangeText () { }

    // hooks
    mounted () {
      this.sayHello()
      console.log(this.getUserId) //  store.getters.foo
    }
  }
</script>
<style>
  #app {
    font-family:  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
  html {
    height: 100%;
  }
  body {
    margin: 0;
    height: 100%;
  }
</style>
