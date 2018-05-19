<template>
  <div class="top">
    <div class="container" >
      <div class="row header">
        <div class="col-sm-12">
          <h1>Welcome to <strong>Chatr</strong></h1>
          <div class="description">
            <p>
              This is the ultimate chat client for anyone who likes to chat online. Sign up today!
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-5">
          <b-card  bg-variant="dark" text-variant="white" title="Login!">
            <b-form class="card-text" @submit.prevent="onSubmitLogin">
              <b-form-group id="emailsLogin"
                            label="Email address:"
                            label-for="email_input_login">
                <b-form-input id="email_input_login"
                              type="email"
                              v-model="login.email"
                              required
                              placeholder="Email">
                </b-form-input>
              </b-form-group>

              <b-form-group id="passwordLogin"
                            label="Password:"
                            label-for="passwordLoginModel">
                <b-form-input id="passwordLoginModel"
                              type="password"
                              v-model="login.password"
                              required
                              placeholder="Password">
                </b-form-input>
              </b-form-group>

              <b-button type="submit" variant="primary">Log In</b-button>
            </b-form>
          </b-card>
        </div>

        <div class="col-sm-1 middle-border"></div>
        <div class="col-sm-1"></div>

        <div class="col-sm-5">
          <b-card  bg-variant="dark" text-variant="white" title="Sign up today!">

            <b-form class="card-text" @submit.prevent="onSignInSubmit">
              <b-form-group id="register_emails"
                            label="Email address:"
                            label-for="register_email_input"
                            description="We'll never share your email with anyone else.">
                <b-form-input id="register_email_input"
                              type="email"
                              v-model="form.email"
                              required
                              placeholder="Email">
                </b-form-input>
              </b-form-group>

              <b-form-group id="fname"
                            label="Your First Name:"
                            label-for="first_name">
                <b-form-input id="first_name"
                              type="text"
                              v-model="form.first_name"
                              required
                              placeholder="First Name">
                </b-form-input>
              </b-form-group>

              <b-form-group id="lname"
                            label="Your Last Name:"
                            label-for="last_name">
                <b-form-input id="last_name"
                              type="text"
                              v-model="form.last_name"
                              required
                              placeholder="Last Name">
                </b-form-input>
              </b-form-group>

              <b-form-group id="register_password"
                            label="Password:"
                            label-for="register_password_model">
                <b-form-input id="register_password_model"
                              type="password"
                              v-model="form.password"
                              required
                              placeholder="Password">
                </b-form-input>
              </b-form-group>
              <b-button type="submit" variant="primary">Sign Up</b-button>
            </b-form>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "Registration",
    data () {
      return {
        form: {
          email: '',
          first_name: '',
          last_name: '',
          password: ''
        },
        login: {
          email: '',
          password: ''
        },
        show: true
      }
    },
    methods: {
      onSignInSubmit (evt) {
        this.$router.push({name: 'Profile', params: {user: this.form}});
        axios.post('http://localhost:3000/api/register', this.form).then(response => this.$router.push({name: 'Profile', params: {user: response.user}}));
        console.log("Email: " + this.form.email);
        evt.preventDefault();
      },
      onSubmitLogin (evt) {
        axios.post('http://localhost:3000/api/login', this.login).then(response => this.$router.push({name: 'Profile', params: {user: response.user}}));
        console.log("Email: " + this.form.email);
        evt.preventDefault();
      }
    }
  }
</script>

<style scoped>
  .header p{
    margin-top: 2em;
    font-size: 1.3em;
  }
  .header{
    margin-bottom: 5em;
  }
</style>
