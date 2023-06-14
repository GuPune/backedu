import { defineStore } from 'pinia';

export const useValidationStore = defineStore('validation', {
  state: () => ({
    username: '',
    password: '',
    errors: {},
  }),
  getters: {
    hasErrors() {
      return Object.keys(this.errors).length > 0;
    },
  },
  actions: {
      validateForm() {
    
      this.errors = {};

      if (!this.username) {
        this.errors.username = 'Username is required.';
      }
      if (!this.password) {
        this.errors.password = 'Password is required.';
      }





   
    },
  },
});