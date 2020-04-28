<template>
  <div id="new-employee">
    <h3>Ajouter un livre</h3>
    <div class="row">
      <form @submit.prevent="saveBook" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="book.titre" required>
            <label>titre</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="book.desc" required>
            <label>Description</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="book.image" required>
            <label>image</label>
          </div>
        </div>
         <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="book.author" required>
            <label>Auteur</label>
          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
        <router-link to="/dashboard" class="btn right grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */

import {  mapActions } from 'vuex';

export default {
  name:'new-employee',
  data: () =>({
    book:{
      titre:'',
      desc:'',
      image:'',
      'author':''
    }
  }),
  methods: {
    ...mapActions('book', ['createEmployee']),
      saveBook(){
        this.createEmployee(this.book);
        this.book = {
          titre:'',
          desc:'',
          image:'',
          author:''
        }
    }
  },
}
</script>

<style>

</style>