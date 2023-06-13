

<template>
    <div class="authentication">
        <v-container fluid class="pa-3">
            <v-row class="h-100vh d-flex justify-center align-center">
                <v-col cols="12" lg="4" xl="3" class="d-flex align-center">
                 
                    <v-card rounded="md" elevation="10" class="px-sm-1 px-0 withbg mx-auto" max-width="500">
                        <v-card-item class="pa-sm-8">
                            <div class="d-flex justify-center py-4">
                                <LayoutFullLogo />
                            </div>
                            <p>Double count is {{ x.load }}</p>
                              <v-alert text="xxxxxxxxxxxxx" type="error" variant="tonal" v-if="x.load"></v-alert>
                            
                            <div class="text-body-1 text-muted text-center mb-3">Your Social Campaigns</div>
                            <AuthLoginForm />
                            <v-progress-circular indeterminate  model-value="20" :size="119" v-if="x.load"></v-progress-circular>
                            <h6 class="text-h6 text-muted font-weight-medium d-flex justify-center align-center mt-3">
                                New to Modernize?
                                <NuxtLink to="/auth/register"
                                    class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium pl-2">
                                    Create an account</NuxtLink>
                            </h6>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>


<script setup lang="ts">


import { useCounterStore } from "@/store/counter";
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { useAuthStore } from '@/store/auth'; // import the auth store we just created

definePageMeta({
  layout: "blank",
});

const x = useAuthStore()


const router = useRouter();



</script>

