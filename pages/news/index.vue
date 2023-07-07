
<template>
    <v-row>
        <v-col cols="12" md="12">
            <UiParentCard title="Sample Page"> 
                <div class="pa-7 pt-1"><p class="text-body-1">Users </p></div>
            </UiParentCard>
        </v-col>
    </v-row>

     <v-container>
    <v-row>
      <v-col cols="12" xl="12">Column 1</v-col>
      <v-col cols="12" md="3">Column 2</v-col>
      <v-col cols="12" md="3">Column 3</v-col>
    </v-row>
  </v-container>

   <v-data-table
    v-model:page="page"
    :headers="headers"
    :items="desserts"
    :items-per-page="itemsPerPage"
    hide-default-footer
    class="elevation-1"
  >
    <template v-slot:bottom>
      <div class="text-center pt-2">
        <v-pagination
          v-model="page"
          :length="pageCount"
        ></v-pagination>
        <v-text-field
          :model-value="itemsPerPage"
          class="pa-2"
          label="Items per page"
          type="number"
          min="-1"
          max="15"
          hide-details
          @update:model-value="itemsPerPage = parseInt($event, 10)"
        ></v-text-field>
      </div>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';

import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { SampleStore } from "@/store/samples";


 
  const route = useRoute() 
  const { getPostAuthor } = storeToRefs(SampleStore());
  console.log('getPostAuthor',getPostAuthor);
  
  
</script>
