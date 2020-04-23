<template>
  <div id="dashboard">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Employees</h4>
      </li>
      <li v-for="employee in employees" :key="employee.id" class="collection-item">
        <div class="chip">{{employee.dept}}</div>
        {{employee.employee_id}}:{{employee.name}}

        <router-link class="secondary-content" :to="{name:'view-employee',params: {employee_id: employee.employee_id}}">
          <i class="material-icons">remove_red_eye</i>
          </router-link>
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
    this.fetchEmployees();
  },
  computed: {
    ...mapState('employees', ['employees']),
  },
  methods: {
    ...mapActions('employees', ['fetchEmployees'])
  },
}
</script>

<style>

</style>