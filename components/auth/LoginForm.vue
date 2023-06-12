
<template>
    <v-row class="d-flex mb-3">

        <v-col cols="12">
            <v-label class="font-weight-bold mb-1">Username</v-label>
            <v-text-field variant="outlined" hide-details color="primary" v-model="authenticateUser.username" :rules="rules" label="Username"></v-text-field>
            <div class="bg-purple-darken-2 text-center" >
               
            </div>
        </v-col>

        <v-col cols="12">
            <v-label class="font-weight-bold mb-1">Password</v-label>
            <v-text-field variant="outlined" type="password"  hide-details color="primary" v-model="authenticateUser.password"></v-text-field>
        </v-col>
        <v-col cols="12" class="pt-0">
            <div class="d-flex flex-wrap align-center ml-n2">
                <v-checkbox v-model="checkbox"  color="primary" hide-details>
                    <template v-slot:label class="text-body-1">Remeber this Device</template>
                </v-checkbox>
                <div class="ml-sm-auto">
                    <NuxtLink to="/"
                        class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium">Forgot
                        Password ?</NuxtLink>
                </div>
            </div>
        </v-col>
        <v-col cols="12" class="pt-0"  v-if="!authenticated">
            <v-btn @click.prevent="login" color="primary" size="large" block   flat>Sign in</v-btn>
        </v-col>

        



           <v-col cols="12" class="pt-0">
          
        </v-col>
        <v-col cols="12" class="pt-0">
               <p data-testid="counter-values">
                 Counter: {{ getCount }}
    
    </p>


            
        </v-col>


       
 

  <v-btn  @click="increment">
  Button
</v-btn>



        
    </v-row>
   
</template>

<script setup lang="ts">

import { useValidationStore } from '@/store/validation';
import { useCounterStore } from "@/store/counter";
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { useAuthStore } from '@/store/auth'; // import the auth store we just created



const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const validationStore = useValidationStore();




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
  console.log('login');
}
};




</script>







