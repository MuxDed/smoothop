<template>
  <div class="inner-block">
    <center>
      <img src="../assets/logo.png" width="350" height="180" />
    </center>
    <div class="vue-tempalte">
      <form action="#" @submit.prevent="submit">
        <h3>Sign In</h3>

        <div class="form-group">
          <label>Username</label>
          <input
            type="text"
            class="form-control form-control-lg"
            id="username"
            v-model="username"
          />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            class="form-control form-control-lg"
            placeholder="******"
            id="password"
            v-model="password"
          />
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


export default {};
</script>
