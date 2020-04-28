/* eslint-disable no-unused-vars */

import { firestoreAction } from 'vuexfire';
import db from '@/db';
import firebase from '@/firebase';
import router from '@/router'
const books = db.collection('books');



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
  createBook: firestoreAction((context, book) => {
    //on peut pas utiliser le add() car il va creer un id or on a besoin de connaitre l'id avant de ceer donc on at un set() ce qui change tt(l'objet)
    const result = books.doc();
    book.book_id = result.id;
    book.user_id = firebase.auth().currentUser.uid;
    book.created_at = Date.now();
    /* return */ books.doc((book.book_id)).set(book)
    router.push('/dashboard')
  }),
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