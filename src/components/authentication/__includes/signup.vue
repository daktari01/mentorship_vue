<template>
  <div class="full-body">
      <div class="form_outline">
        <form action="">
          <div class="container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>

            <label for="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="username" required>

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required>

            <label for="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required>

            <label for="confirm-password"><b>Confirm Password</b></label>
            <input type="password" placeholder="Repeat Password" name="confirm-password" required>
            <hr>

            <button type="submit" class="registerbtn">Register</button>
          </div>

          <div class="container signin">
            <p>Already have an account? <a href="#">Sign in</a>.</p>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  
}
</script>

