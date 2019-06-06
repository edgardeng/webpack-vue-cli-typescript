<template>
  <div class="page text-center">
    <div class="float-brand"> Logo & Brand</div>
    <div class="form-signin card-box" id="form">
      <h4 class="mb-1 mb-5 font-weight-normal">Welcome</h4>
      <div class="form-group">
        <i class="fa fa-user"> </i>
        <input class="form-control" id="input-name"  v-model="username" aria-describedby="emailHelp"
               placeholder="Enter Username">
      </div>
      <div class="form-group">
        <i class=" fa fa-lock"> </i>
        <input type="password" class="form-control" v-model="password" id="input-password" aria-describedby="emailHelp"
               placeholder="Enter Password">
      </div>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" id="signin" @click="handleSubmit()">Sign in</button>

      <button type="button" class="btn btn-link text-danger" style="margin-top:20px;font-weight: normal;"><span class="text-muted">NO ACCOUNT?</span> Sign Up</button>

    </div>

    <div class="footer">&copy;Company 2019-2020</div>
  </div>
</template>

<script lang="ts" >

  import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
  import { State, Action, Mutation, Getter } from 'vuex-class'

  @Component({})
  export default class Login extends Vue {
    // data
    username = 'admin'
    password = ''

    @Action('CHANGE_LOG_IN') logIn

    handleSubmit () {
      if (this.username !== 'admin') {
        console.log('username error')
        alert('admin/123456 is right')
      } else if (this.password !== '123456') {
        console.log('password error')
        alert('admin/123456 is right')
      } else {
        this.doLogin()
      }
    }

    doLogin () {
      this.logIn()
      console.log('doLogin')
      this.$router.push('/')
    }

    // hooks
    mounted () {
      console.log('Login Page mounted')
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" >
  @import "@/assets/styles/login.scss";
</style>
