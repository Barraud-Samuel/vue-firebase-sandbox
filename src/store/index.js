import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'

import employees from './employees';
import employee from './employee';
import messages from './messages';
import auth from './auth';
import chat from './chat';
import books from './books';
import book from './book';
import author from './author';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    ...vuexfireMutations,
  },
  actions: {
  },
  modules: {
    auth,
    employees,
    employee,
    messages,
    chat,
    books,
    book,
    author
  }
})
