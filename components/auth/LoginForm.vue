
<template>
    <v-row class="d-flex mb-3">

        <v-col cols="12">
           
            <v-text-field variant="outlined" hide-details color="primary" 
            v-model="formData.username"
      :error-messages="v$.username.$errors.map(e => e.$message)"
      :counter="10"
      label="Username"
      required
      @input="v$.username.$touch"
      @blur="v$.username.$touch"
            
          v-if="!authenticated"></v-text-field>
     
            
        </v-col>

        <v-col cols="12">
           
           <v-text-field variant="outlined" hide-details color="primary" 
           v-model="formData.password"
     :error-messages="v$.password.$errors.map(e => e.$message)"
     :counter="10"
     label="Password"
     required
     @input="v$.password.$touch"
     @blur="v$.password.$touch"
           
           v-if="!authenticated"></v-text-field>
    
           
       </v-col>

      
        <v-col cols="12" class="pt-0"  >
            <v-btn   @click="login()" color="primary" size="large" block   flat  v-if="!authenticated">Sign in</v-btn>
        </v-col>
           <v-col cols="12" class="pt-0"  >
            <v-btn   color="primary" size="large" block   flat v-if="authenticated">Log out</v-btn>
        </v-col>

        
        
    </v-row>
   
</template>

<script setup>


import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { useAuthStore } from '@/store/auth';
import { useVuelidate } from '@vuelidate/core'
import { reactive } from 'vue'
import { email, required } from '@vuelidate/validators'
import { useCounterStore } from "@/store/counter";

definePageMeta({
    middleware: 'auth' // this should match the name of the file inside the middleware directory 
})


const formData = reactive({
  username: 'kminchelle',
  password: '0lelplR',
});



  const rules = {
    username: { required },
    password: { required },
  }

  const v$ = useVuelidate(rules, formData)
  const { authenticateUser } = useAuthStore();
  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

  const router = useRouter();

 if (authenticated) {
    router.push('/');
  }
const login = async () => {
   
v$.value.$validate();

if (!v$.value.$error) {
  await authenticateUser(formData); // call authenticateUser and pass the user object
  // redirect to homepage if user is authenticated
   if (authenticated) {
    router.push('/');
  }

  }





};
const increment = async () => {

};



</script>

<!-- <script setup lang="ts">

import { useValidationStore } from '@/store/validation';
import { useCounterStore } from "@/store/counter";
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { useAuthStore } from '@/store/auth'; // import the auth store we just created

const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const validationStore = useValidationStore();


  const store = useValidationStore();



const user = ref({
  username: 'kminchelle', 
  password: '0lelplR',
});
const router = useRouter();

const login = async () => {
//   await authenticateUser(user.value); // call authenticateUser and pass the user object
//   // redirect to homepage if user is authenticated

//   if (authenticated) {
//     router.push('/');
//   }



 validationStore.validateForm();



 
if (!validationStore.hasErrors) {
  // Submit form logic
  
}




};





</script> -->







