/* eslint-disable no-unused-vars */

import firebase from '@/firebase';
import store from '@/store';
import db from '@/db';
import router from '@/router';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    //console.log(user);
    if (user.user) {
      
      user = user.user;// eslint-disable-line no-param-reassign
    }
    const setUser = {
      id: user.uid,
      email: user.email,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };
    db.collection('users').doc(setUser.id).set(setUser);
    
    store.commit('auth/SET_USER', setUser);
    //  router.push('/dashboard');
  } else {
    store.commit('auth/SET_USER', null);
  }
});