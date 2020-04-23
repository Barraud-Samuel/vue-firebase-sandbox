<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="login card-panel grey lighten-4 center">
          <h3>register</h3>
          <form>
            <div class="input-field">
              <i class="prefix material-icons">email</i>
              <input type="email" id="email" v-model="credentials.email">
              <label for="email">Email</label>
            </div>
            <div class="input-field">
              <i class="prefix material-icons">lock</i>
              <input type="password" id="password" v-model="credentials.password">
              <label for="password">Password</label>
            </div>
            <button class="btn btn-large grey lighten-4 black-text" @click.prevent="register()">register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name:'register',
  data: () =>({
      credentials:{
      email:'',
      password:''
    }
  }),
  methods: {
    ...mapActions('auth', ['registerWithEmailAndPassword']),
    register(){
      this.registerWithEmailAndPassword(this.credentials);
    }
  }
}
</script>

<style lang="scss">
.login{
   /* label color */
   .input-field label {
     color: #000;
   }
   /* label focus color */
   .input-field input[type=text]:focus + label {
     color: #000;
   }
      .input-field input[type=password]:focus + label {
     color: #000;
   }
   /* label underline focus color */
   .input-field input[type=text]:focus {
     border-bottom: 1px solid #000;
     box-shadow: 0 1px 0 0 #000;
   }
      .input-field input[type=password]:focus {
     border-bottom: 1px solid #000;
     box-shadow: 0 1px 0 0 #000;
   }
   /* valid color */
   .input-field input[type=text].valid {
     border-bottom: 1px solid #000;
     box-shadow: 0 1px 0 0 #000;
   }
   /* invalid color */
   .input-field input[type=text].invalid {
     border-bottom: 1px solid #000;
     box-shadow: 0 1px 0 0 #000;
   }
   /* icon prefix focus color */
   .input-field .prefix.active {
     color: #000;
   }
}
</style>