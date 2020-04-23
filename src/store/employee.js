/* eslint-disable no-unused-vars */

//import firebase from '@/firebase';
import { firestoreAction } from 'vuexfire';
import firebase from '@/firebase';
import db from '@/db';
import router from '@/router'
const employees = db.collection('employees');

const state = {
  employee: {},
};

const actions = {
  createEmployee: firestoreAction((context, employee) => {
    //on peut pas utiliser le add() car il va creer un id or on a besoin de connaitre l'id avant de ceer donc on at un set() ce qui change tt(l'objet)
    const result = employees.doc();        
    employee.employee_id = result.id;
    employee.user_id = firebase.auth().currentUser.uid;
    employee.created_at = firebase.firestore.FieldValue.serverTimestamp();
    /* return */ employees.doc((employee.employee_id)).set(employee)
    router.push('/dashboard')
  }),
  //on peut aussi utiliser lestate {state} en argument du firestoreaction car le seul element qu'il y a dans le store est l'employé en question (celui que l'on veut modifier)
  updateEmployee: firestoreAction((context, employee) => {    
      employees.doc(employee.employee_id)
      .update({ 
        name: employee.name,
        dept: employee.dept,
        position: employee.position
        })
      .then(() => {
        router.push({name:'view-employee',params: {employee_id:employee.employee_id}})
      })
  }),
  async deleteEmployeeTest2(_,employee_id){    
    try{
      employees.doc(employee_id).delete();
    }catch(error){
      console.log(error);
    }
  },
  fetchEmployee: firestoreAction(({ bindFirestoreRef },employee_id) => {
    console.log(employee_id);
    
    return bindFirestoreRef('employee', db.collection('employees').doc(employee_id));
    //bindFirestoreRef('employee', db.collection('employees').where('employee_id','==',employee_id));
  }),
  deleteEmployeeTest:firestoreAction(({ bindFirestoreRef },employee_id) => {    
    bindFirestoreRef('employee', db.collection('employees').doc(employee_id).delete());
    router.push('/dashboard')
    //bindFirestoreRef('employee', db.collection('employees').where('employee_id','==',employee_id).delete());
  }),
};

export default {
  namespaced: true,
  state,
  actions,
};