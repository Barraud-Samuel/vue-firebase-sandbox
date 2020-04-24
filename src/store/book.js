/* eslint-disable no-unused-vars */

import { firestoreAction } from 'vuexfire';
import db from '@/db';
import firebase from '@/firebase';


const state = {
  book:{},
  author:{}
}

const mutations = {
  SET_BOOK(state,value){
    state.book.author = value
  }
}

const actions = {
  fetchBook: firestoreAction(({ bindFirestoreRef,commit },book_id) => {
    return bindFirestoreRef('book', db.collection('books').doc(book_id)).then(e=>{
      console.log(e.author);
      bindFirestoreRef('author',db.collection('authors').doc(e.author)).then(e=>{
        console.log(e);
      })
    });
  }),
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};