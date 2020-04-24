<template>
    <div class="row" v-if="book">
      <div class="col s12 center"><h3>{{book.title}}</h3></div>
      <div class="col s3">
        <img class="responsive-img" :src="book.image">
        <p>{{book.pub_year}}</p>
      </div>
      <div class="col s9">
        <router-link  v-if="author" :to="{name:'view-author',params:{author_id:author.id}}">Auteur: {{author.name}}</router-link>
        <p>{{book.desc}}</p>
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
    this.RetreiveBook();
  },
  computed: {
    ...mapState('book', ['book','author']),
  },
  methods: {
    ...mapActions('book', ['fetchBook']),
    async RetreiveBook(){
      await this.fetchBook(this.$route.params.book_id).then(e=>{
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