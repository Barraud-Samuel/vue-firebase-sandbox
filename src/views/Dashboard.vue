<template>
  <div id="dashboard">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Livres</h4>
      </li>
      <li v-for="book in books" :key="book.id" class="collection-item">
        <p>{{book.id}}</p>
        <p>{{book.title}}</p>
        <router-link  :to="{name:'view-book',params: {book_id: book.id}}">
          <i class="material-icons">remove_red_eye</i>
          </router-link>
          <button @click="deleteBook(book.id)" class="btn right red">Delete</button>
      </li>
    </ul>
    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import {  mapState,mapActions } from 'vuex';

export default {
  name:'dashboard',
  data (){
    return {
      
    }
  },
  created() {
    this.fetchBooks();
  },
  computed: {
    ...mapState('books', ['books']),
  },
  methods: {
    ...mapActions('books', ['fetchBooks']),
    ...mapActions('book', ['deleteBook'])
  },
}
</script>

<style>

</style>