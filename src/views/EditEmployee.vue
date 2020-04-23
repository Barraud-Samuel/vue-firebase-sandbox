<template>
  <div id="edit-employee">
    <h3>Edit Employee</h3>
    <div class="row" v-if="employee">
      <form @submit.prevent="saveEmployee" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="employee.name" required>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="employee.dept" required>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="employee.position" required>
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

import {  mapState,mapActions } from 'vuex';

export default {
  name:'edit-employee',
    data: () =>({
  }),
  mounted() {
    this.fetchEmployee(this.$route.params.employee_id);
  },
  watch:{
    '$route.params.employee_id': function() {      
      this.fetchEmployee(this.$route.params.employee_id)
    }
  },
  computed: {
    ...mapState('employee', ['employee']),
  },
  methods: {
    ...mapActions('employee', ['updateEmployee','fetchEmployee']),
      saveEmployee(){
        this.updateEmployee(this.employee);
    }
  },
}
</script>

<style>

</style>