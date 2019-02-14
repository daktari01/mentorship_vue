<template>
  <div class="full-body">
    <div class="form_outline">
      <form action="">
        <div class="container">
          <h1>Sign In</h1>
          <p>Please fill in this form to login.</p>
          <hr>

          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required>

          <label for="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required>

          <hr>

          <button type="submit" class="registerbtn">Log In</button>
        </div>

        <div class="container signin">
          <p>Don't have an account? <a href="signup.html">Sign Up</a>.</p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  export default {

  };
</script>
