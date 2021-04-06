<template>
  <div class="inner-block">
    <center>
      <img src="../assets/logo.png" width="350" height="180" />
    </center>
    <div class="vue-tempalte">
      <form action="#" @submit.prevent="login">
        <h3>Sign In</h3>

        <div class="form-group">
          <label>Username</label>
          <input
            type="email"
            class="form-control form-control-lg"
            id="user_email"
            placeholder="Email address..."
            v-model="email"
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
          <button type="submit" class="btn btn-dark btn-lg btn-block">
            Sign In
          </button>
      </form>
      <span id="sign_in_update">
        {{sign_in_update}}
      </span>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      email: '',
      password: '',
      sign_in_update: '',
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push('/overview');
          console.log(firebase.auth().currentUser);
        })
        .catch(error => {
          this.sign_in_update = "Incorrect username/password";
        });
    },
  }
}


</script>
