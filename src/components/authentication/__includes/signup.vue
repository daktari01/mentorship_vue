<template>
  <div class="full-body">
      <div class="form_outline">
        <form action="" v-on:submit.prevent="registerNewUser">
          <div class="container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>

            <label for="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="username" v-model="username" required>

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" v-model="email" required>

            <label for="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" v-model="password" required>

            <label for="confirm-password"><b>Confirm Password</b></label>
            <input type="password" placeholder="Repeat Password" name="confirm-password" v-model="confirmPassword" required>
            <hr>

            <button type="submit" class="registerbtn" >Register</button>
          </div>

          <div class="container signin">
            <p>Already have an account? <a href="#">Sign in</a>.</p>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  computed: {

  },
  methods: {
    ...mapActions([
      'createNewUser'
    ]),
    registerNewUser(){
      this.$store.dispatch('createNewUser', {
        username: this.username,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      });
      this.username = '';
      this.email = '';
      this.password = '';
      this.confirmPassword = '';
      // redirect to login page
    }
  }
};
</script>
