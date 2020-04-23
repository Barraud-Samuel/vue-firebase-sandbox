/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import { firestoreAction } from 'vuexfire';
import firebase from '@/firebase'
import router from '@/router/index'
import db from '@/db';


const state = {
  user: {},
  isLoggedIn: false,
  users:[]
};

const mutations = {
  SET_USER(state,user){    
    if (user) {
      state.user.email = user.email;
      state.user.id = user.id;
      state.isLoggedIn = true;
    } else {
      state.user = {};
      state.isLoggedIn = false;
    }
  }
}


const actions = {
  async loginWithEmailAndPassword(context,credentials) {    
    firebase.auth().signInWithEmailAndPassword(credentials.email,credentials.password)
    .then(function ({user}) {        
      console.log(`Your are logged in as ${user.email}`);
      router.push('/dashboard')
    },
    err=>{
      console.log(err.message); 
    })
  },
  async registerWithEmailAndPassword(context, credentials){
    firebase.auth().createUserWithEmailAndPassword(credentials.email,credentials.password)
      .then(function ({user}) {
        console.log(`acount created ${user.email}`);
        router.push('/dashboard')
      },
      err=>{
        console.log(err.message); 
      })
  },
  async logout() {
    firebase.auth().signOut()
      .then(function () {
        router.push('/login')
      },
      err=>{
        console.log(err.message); 
      })
  },
  fetchUsers: firestoreAction (({bindFirestoreRef})=>{
    bindFirestoreRef('users',db.collection('users'));
  })
};


export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
