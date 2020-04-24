/* eslint-disable no-unused-vars */

import { firestoreAction } from 'vuexfire';
import db from '@/db';
import firebase from '@/firebase';


const state = {
  books:[]
}

const actions = {
  fetchBooks: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef('books', db.collection('books'))
  }),
};

export default {
  namespaced: true,
  state,
  actions,
};