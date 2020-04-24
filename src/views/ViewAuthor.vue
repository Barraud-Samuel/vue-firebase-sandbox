<template>
  <div class="row">
      <h3>{{author.name}}</h3>
    <div class="col s6" v-if="author">
      <p>Description: <span style="font-style:italic">{{author.desc}}</span></p>
      <p>Nombre de livres: {{books.length}}</p>
      <p>Vie: {{author.date}}</p>
      <p>Nationalité: {{author.country}}</p>
    </div>
    <div class="col s6">
      <img class="responsive-img" :src="author.image">
    </div>
    <div class="col s12">
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
  data (){
    return {
      
    }
  },
  created() {
    this.RetreiveAuthor();
  },
  computed: {
    ...mapState('author', ['author','books']),
  },
  methods: {
    ...mapActions('author', ['fetchAuthor']),
    async RetreiveAuthor(){
      await this.fetchAuthor(this.$route.params.author_id).then(e=>{
        console.log(e);
      },err=>{
        console.log(err);
      })
    }
  },
}
</script>

<style>

</style>