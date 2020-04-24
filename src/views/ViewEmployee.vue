<template>
  <div id="view-employee">
    <ul class="collection with-header">
      <div class="collection-header" v-if="employee">
        <h4>{{employee.name}}</h4>
        <div class="collection-item">Employee ID#:{{employee.id}}</div>
        <div class="collection-item">Department:{{employee.dept}}</div>
        <div class="collection-item">Position:{{employee.position}}</div>
      </div>
    </ul>
    <router-link to="/dashboard" class="btn grey">Back</router-link>
    <button @click="deleteEmployee" class="btn right red">Delete</button>
    <div class="fixed-action-btn" v-if="employee">
      <router-link v-if="employee.employee_id" 
        :to="{name:'edit-employee',params: {employee_id: employee.employee_id}}" 
        class="btn-floating btn-large red">
        <i class="large material-icons">mode_edit</i>
      </router-link>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */

import {  mapState,mapActions } from 'vuex';

export default {
  name:'view-employee',
  data (){
    return {
    }
  },
  created() {
    this.fetchEmployeeOnCreated();
  },
  watch:{
    '$route.params.employee_id': function() {      
      this.fetchEmployeeOnCreated();
    }
  },
  computed: {
    ...mapState('employee', ['employee']),
  },
  methods: {
    ...mapActions('employee', ['fetchEmployee','deleteEmployeeTest2']),
    deleteEmployee(){
      if (confirm('are you sure?')) {
        this.deleteEmployeeTest2(this.$route.params.employee_id);
      }
    },
    async fetchEmployeeOnCreated(){
      await this.fetchEmployee(this.$route.params.employee_id).then(e=>{
        console.log(e);
      },err=>{
        console.log(err);
      });
    }
  },
}
</script>

<style>

</style>