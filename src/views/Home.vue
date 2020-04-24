<template>
  <div class="home">
    <h2>Tous les livres</h2>
    <div class="row">
      <div class="col s3" v-for="book in books" :key="book.id">
        <div class="card">
          <div class="card-image">
            <img :src="book.image">
          </div>
          <div class="card-content">
            <p>{{book.desc}}</p>
          </div>
          <div class="card-action">
            <router-link :to="{name:'view-book',params:{book_id:book.id}}">{{book.title}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {  mapState,mapActions } from 'vuex';

export default {
  name: 'Home',
  data (){
    return {
      
    }
  },
  created() {
    this.RetreiveBooks();
  },
  computed: {
    ...mapState('books', ['books']),
  },
  methods: {
    ...mapActions('books', ['fetchBooks']),
    async RetreiveBooks(){
      await this.fetchBooks().then(e=>{
        console.log(e);
      },err=>{
        console.log(err);
      })
    }
  },
}
</script>
