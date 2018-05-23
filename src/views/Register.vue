<template>
  <div id="register">
    <div class="register-box">
      <div class="register-header">
        <h1>Register</h1>
        <hr />
      </div>
      <div class="login-form email">
        <div class="email">
          <input type="text" class="form" placeholder="email" v-model="email">
        </div>
        <div class="password">
          <input type="password" class="form" placeholder="password" v-model="password">
        </div>
      </div>
      <div class="register">
        <div class="register-button">
          <input type="submit" value="Create Account" class="btn btn--full" @click="register">
        </div>
      </div>
      <div class="create">
        <p> <router-link to="/login" style="color: black; text-decoration: none" class="la">already have an account</router-link> </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "register",
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    register() {
      var self = this
      axios.post('http://35.185.3.77/users/register', {
        email: this.email,
        password: this.password
      })
      .then(function(response) {
        console.log(response);
        self.$router.push('/login')
      })
      .catch(function(error) {
        console.log(error);
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .register-box {
    text-align: center
  }

  hr {
    width: 50px;
    border-top: solid 1px black
  }

  .register-form {
    text-align: center;
  }

  .form {
    box-sizing: border-box;
    text-align: center;
    margin-bottom: 10px;
    border: 1px solid #1c1d1d;
    border-top-color: rgb(28, 29, 29);
    border-right-color: rgb(28, 29, 29);
    border-bottom-color: rgb(28, 29, 29);
    border-left-color: rgb(28, 29, 29);
    max-width: 100%;
    padding: 8px 10px;
    border-radius: 0;
    width: 25%
  }

  .btn {
    display: inline-block;
    cursor: pointer;
    font-family: "Montserrat","HelveticaNeue","Helvetica Neue",sans-serif;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-align: center;
    background: black;
    color: white;
    padding: 12px 20px;
    border: 1px solid transparent;
    border-radius: none;
    box-sizing: border-box;
  }

  p {
    margin: 0 0 15px 0;
    font-size: 16px;
    font-family: "Roboto","HelveticaNeue","Helvetica Neue",sans-serif;
    color: #1c1d1d;
    font-weight: 300;
    margin-top: 10px;
  }
</style>
