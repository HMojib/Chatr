<template>
  <div>
    <b-card  bg-variant="dark" text-variant="white" title="Sign up today!">
    <b-form class="card-text" @submit="onSubmit" v-if="show">
      <b-form-group id="emails"
                    label="Email address:"
                    label-for="email_input"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="email_input"
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

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: "Registration",
    data () {
      return {
        form: {
          email: '',
          first_name: '',
          last_name: '',
          password: '',
          passwordVerify: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.form));
      }
    }
  }
</script>

<style scoped>

</style>
