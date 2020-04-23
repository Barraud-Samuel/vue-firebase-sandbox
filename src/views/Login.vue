<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="login card-panel green white-text center">
          <h3>Login</h3>
          <form>
            <div class="input-field">
              <i class="prefix material-icons">email</i>
              <input type="text" v-model="credentials.email" id="email">
              <label for="email">Email</label>
            </div>
            <div class="input-field">
              <i class="prefix material-icons">lock</i>
              <input type="password" id="password" v-model="credentials.password">
              <label for="password">Password</label>
            </div>
            <button @click.prevent="login()" class="btn btn-large grey lighten-4 black-text">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name:'login',
   data: () =>({
    credentials:{
      email:'',
      password:''
    }
  }),
  methods: {
    ...mapActions('auth', ['loginWithEmailAndPassword']),
    login(){
      this.loginWithEmailAndPassword(this.credentials);
    }
  }
}
</script>

<style lang="scss">
.login{
   /* label color */
   .input-field label {
     color: #fff;
   }
   /* label focus color */
   .input-field input[type=text]:focus + label {
     color: #fff;
   }
      .input-field input[type=password]:focus + label {
     color: #fff;
   }
   /* label underline focus color */
   .input-field input[type=text]:focus {
     border-bottom: 1px solid #fff;
     box-shadow: 0 1px 0 0 #fff;
   }
      .input-field input[type=password]:focus {
     border-bottom: 1px solid #fff;
     box-shadow: 0 1px 0 0 #fff;
   }
   /* valid color */
   .input-field input[type=text].valid {
     border-bottom: 1px solid #fff;
     box-shadow: 0 1px 0 0 #fff;
   }
   /* invalid color */
   .input-field input[type=text].invalid {
     border-bottom: 1px solid #fff;
     box-shadow: 0 1px 0 0 #fff;
   }
   /* icon prefix focus color */
   .input-field .prefix.active {
     color: #fff;
   }
}
</style>