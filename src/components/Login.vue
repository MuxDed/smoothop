<template>
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
            <router-link :to="{name: 'overview'}">
                <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>
            </router-link>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>

        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>