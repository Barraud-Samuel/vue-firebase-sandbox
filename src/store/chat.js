/* eslint-disable no-unused-vars */

//import firebase from '@/firebase';
import { firestoreAction } from 'vuexfire';
import firebase from '@/firebase';
import db from '@/db';
const chats = db.collection('chats');

const state = {
  chat:{},
  chats:[],
};

const actions = {
  createChatRoom: firestoreAction((context) => {
    return chats.add({
      createdAt : Date.now(),
      owner: firebase.auth().currentUser.uid,
      members: [firebase.auth().currentUser.uid]
    });
  }),
  fetchChatRooms: firestoreAction(({bindFirestoreRef})=>{
    bindFirestoreRef('chats',chats.where('owner','==',firebase.auth().currentUser.uid))
  })
};

export default {
  namespaced: true,
  state,
  actions,
};