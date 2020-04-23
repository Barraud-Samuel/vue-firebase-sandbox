<template>
  <div class="row chatContainer">
    <h2 class="center">Chat</h2>
    <div class="col s4">
      <ul id="slide-out" class="sidenav">
        <li v-for="chat in chats" :key="chat.id">
          <router-link class="waves-effect" :class="{ teal: isActiveRoom(chat.id) }" :to="{name:'chat-view',params: {chat_id: chat.id}}">{{chat.id}}</router-link>
        </li>
      </ul>
      <a class="addChatRoom waves-effect waves-light btn" @click.prevent="addChatRoom()">Create a chatroom</a>
      <ul class="collection">
        <li v-for="user in users" :key="user.id" class="collection-item">
          <span style="max-width:200px;overflow:hidden;display:inline-block">{{user.email}}</span>
          <a href="#!" class="secondary-content"><i class="material-icons">plus_one</i></a>
        </li>
      </ul>
    </div>
    <div class="col s8" v-if="this.$route.params.chat_id">
      <ul class="collection">
        <li class="collection-item" v-for="message in messages" :key="message.id">
          {{message.text}}
        </li>
      </ul>
      <form @submit.prevent="sendMessage">
        <div class="input-field col s12">
          <i class="material-icons prefix">send</i>
          <input id="first_name" required v-model="message.text" type="text" class="validate">
          <label for="first_name">message</label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {  mapState,mapActions } from 'vuex';

export default {
  name:'chat',
  data: () =>({
    message:{
      text:''
    }
  }),
  created(){
    if (this.$route.params.chat_id) {
      this.fetchMessages(this.$route.params.chat_id).then(e=>{
        console.log(e);
      },err=>{
        console.log(err);
      });
    }
    this.fetchChatRooms();
    this.fetchUsers();
  },
  watch:{
    '$route.params.chat_id': function() {
      if (this.$route.params.chat_id) {
        this.fetchMessages(this.$route.params.chat_id)
      }
    }
  },
  computed:{
    ...mapState('messages',['messages']),
    ...mapState('chat',['chats']),
    ...mapState('auth',['user','users']),
  },
  methods: {
    ...mapActions('messages', ['fetchMessages','createMessage']),
    ...mapActions('chat', ['createChatRoom','fetchChatRooms']),
    ...mapActions('auth', ['fetchUsers']),
    isActiveRoom(chat_id){
      return this.$route.params.chat_id===chat_id;
    },
    async addChatRoom(){
      await this.createChatRoom().then(e=>{
        console.log(e);
      },err=>{
        console.log(err);
      });
    },
    async sendMessage(){
      this.createMessage([this.message,this.$route.params.chat_id]).then(e=>{
        console.log(e);
        this.message = {
          text:''
        }
      },
      err=>{
          console.log(err);
        });
    },
    isActive(menuItem) {
      return this.activeItem === menuItem
    },
  },
}
</script>

<style scoped>
.sidenav {
  transform: translateX(0px);
  width: auto;
  position: static;
  padding-bottom: 0;
}
.chatContainer{
  margin-top: 30px;
}
.collection{
  max-height: 500px;
  overflow: auto;
}

.collection-item {
  width: 100%;
}

.addChatRoom{
  display: block;
}
</style>