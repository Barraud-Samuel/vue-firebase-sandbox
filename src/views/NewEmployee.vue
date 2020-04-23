<template>
  <div id="new-employee">
    <h3>New Employee</h3>
    <div class="row">
      <form @submit.prevent="saveEmployee" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="employee.name" required>
            <label>Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="employee.dept" required>
            <label>Dept</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="employee.position" required>
            <label>Position</label>
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
    employee:{
      name:'',
      dept:'',
      position:''
    }
  }),
  methods: {
    ...mapActions('employee', ['createEmployee']),
      saveEmployee(){
        this.createEmployee(this.employee);
        this.employee = {
          name:'',
          dept:'',
          position:''
        }
    }
  },
}
</script>

<style>

</style>