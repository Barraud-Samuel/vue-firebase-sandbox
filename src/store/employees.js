/* eslint-disable no-unused-vars */

import { firestoreAction } from 'vuexfire';
import db from '@/db';
import firebase from '@/firebase';


const state = {
  employees:[]
}

const actions = {
  fetchEmployees: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('employees', db.collection('employees')/* .where('user_id','==',firebase.auth().currentUser.uid) */)),
};

export default {
  namespaced: true,
  state,
  actions,
};