/* eslint-disable no-unused-vars */

import { firestoreAction } from 'vuexfire';
import db from '@/db';
import firebase from '@/firebase';


const state = {
  books:[]
}

const actions = {
  fetchBooks: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('books', db.collection('books')/* .where('user_id','==',firebase.auth().currentUser.uid) */)
  }),
};

export default {
  namespaced: true,
  state,
  actions,
};