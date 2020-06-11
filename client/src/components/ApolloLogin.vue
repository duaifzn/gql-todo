<template>
  <div class="apollo-login">
    <b-card no-body class="overflow-hidden mx-auto" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="Login">
            <b-card-text>
              <b-input type="text" id="email" placeholder="Enter email" v-model="email" />
              <b-input
                type="text"
                class="mt-2"
                id="password"
                placeholder="Enter password"
                v-model="password"
              />
              <b-button block @click="login" class="mt-2">login</b-button>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <!-- <li v-for="user in users" :key="user.id">{{user.name}}</li> -->
  </div>
</template>

<script>
import gql from "graphql-tag";
import { onLogin } from "../vue-apollo.js";

export default {
  name: "ApolloLogin",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      // Call to the graphql mutation
      await this.$apollo
        .mutate({
          // Query
          mutation: gql`
            mutation($email: String!, $password: String!) {
              login(email: $email, password: $password) {
                token
              }
            }
          `,
          // Parameters
          variables: {
            email: this.email,
            password: this.password
          }
        })
        .then(async data => {
          console.log(data);
          await onLogin(
            //this.$apollo.provider.defaultClient,
            data.data.login.token
          );
          this.$router.push("/todo");
        })
        .catch(error => {
          // Error
          console.error(error);
        });
    }
  }
};
</script>