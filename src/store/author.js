/* eslint-disable no-unused-vars */

import { firestoreAction } from 'vuexfire';
import db from '@/db';
import firebase from '@/firebase';


const state = {
  author:{  
  },
  books:[]
}

const actions = {
  fetchAuthor: firestoreAction(({ bindFirestoreRef,commit },author_id) => {
    return bindFirestoreRef('author', db.collection('authors').doc(author_id)).then(e=>{
      console.log(e);
      bindFirestoreRef('books',db.collection('books').where('author','==',author_id)).then(e=>{
        console.log(e);
      })
    });
  }),
};

export default {
  namespaced: true,
  state,
  actions,
};