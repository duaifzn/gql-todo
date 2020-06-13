import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import VueCookies from 'vue-cookies'
//import fetch from 'node-fetch'
// Install the Vue plugin
Vue.use(VueApollo)
Vue.use(VueCookies)
// Name of the cookies item
const AUTH_TOKEN = 'access-token'


// const getHeaders = () => {
//   const headers = {};
//   const token = Vue.$cookies.get(AUTH_TOKEN);
//   if (token) {
//     headers[AUTH_TOKEN] = `${token}`;
//   }
//   return headers;
// };

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql',
  //fetch,
  credentials: 'include',
  //headers: getHeaders()
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})



export const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

// Manually call this when user log in
export async function onLogin(token) {
  if (token) {
    Vue.$cookies.set(AUTH_TOKEN, token)
  }
}

// Manually call this when user log out
export async function onLogout() {
  if (typeof Vue.$cookies.get(AUTH_TOKEN) !== 'undefined') {
    Vue.$cookies.remove(AUTH_TOKEN)
  }
}
