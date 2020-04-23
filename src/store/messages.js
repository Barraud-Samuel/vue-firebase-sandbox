/* eslint-disable no-unused-vars */

import { firestoreAction } from 'vuexfire';
import db from '@/db';
import firebase from '@/firebase';
import router from '@/router'
const chats = db.collection('chats');


const state = {
  messages:[]
}

const actions = {
  fetchMessages: firestoreAction(({bindFirestoreRef},chatRoom_id)=>{
    return db.collection('chats').doc(chatRoom_id).get().then(e=>{
      if (e.exists) {
        return bindFirestoreRef('messages',chats.doc(chatRoom_id).collection('messages').orderBy('createdAt'));
      }else{
        //router.push('/chat')
        return 'pas de chatroom pour cet id';
      }
    });
  }),
  createMessage: firestoreAction((context, [message,chatRoom_id]) => {
    return db.collection('chats').doc(chatRoom_id).get().then(e=>{
      if (e.exists) {
        const messages = db.collection('chats').doc(chatRoom_id).collection('messages');
        return messages.add({
          createdAt : Date.now(),
          sender: firebase.auth().currentUser.uid,
          text: message.text,
        });  
      }else{
        router.push('/chat')
        return 'pas de chatroom pour cet id';
      }
    })
  }),
};

export default {
  namespaced: true,
  state,
  actions,
}