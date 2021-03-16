<template>
    <div class="inner-block">
      <center>
        <img src="../assets/logo.png" width="350" height="180" />
      </center>
      <div class="vue-tempalte">
        <form>
          <h3>Sign In</h3>

          <div class="form-group">
            <label>Username</label>
            <input type="username" class="form-control form-control-lg" />
          </div>

          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control form-control-lg" />
          </div>
          <router-link :to="{ name: 'overview' }">
            <button type="submit" class="btn btn-dark btn-lg btn-block">
              Sign In
            </button>
          </router-link>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
