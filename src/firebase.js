import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCthz71n4fCYzXxmhuV44bdjZJlRxqQ_dc",
  authDomain: "fir-vue-sandbox.firebaseapp.com",
  databaseURL: "https://fir-vue-sandbox.firebaseio.com",
  projectId: "fir-vue-sandbox",
  storageBucket: "fir-vue-sandbox.appspot.com",
  messagingSenderId: "566793715153",
  appId: "1:566793715153:web:86a77aaba00ffc5199b4f0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;