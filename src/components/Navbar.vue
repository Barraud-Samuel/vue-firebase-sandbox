<template>
  <nav>
    <div class="nav-wrapper green">
      <div class="container">
        <router-link to="/" class="brand-logo">Librarie</router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li v-if="isLoggedIn">{{user.email}}</li>
          <li><router-link to="/dashboard" v-if="isLoggedIn">Dashboard</router-link></li>
          <li><router-link to="/chat" v-if="isLoggedIn">Chat</router-link></li>
          <li><router-link to="/login" v-if="!isLoggedIn">Login</router-link></li>
          <li><router-link to="/register" v-if="!isLoggedIn">Register</router-link></li>
          <li><button @click.prevent="logout()" v-if="isLoggedIn" class="btn black">Logout</button></li>
        </ul>
      </div>
    </div>
  </nav>
        
</template>

<script>

import { mapActions,mapState } from 'vuex';

export default {
  name:'navbar',
  computed:{
    ...mapState('auth', ['user', 'isLoggedIn']),
  },
  methods: {
    ...mapActions('auth', ['logout']),
  }
}
</script>