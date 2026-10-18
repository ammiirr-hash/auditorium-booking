<script setup>
import TicketTable from '../components/TicketTable.vue'
import { items } from '../ticketsStore.js'
</script>

<template>
  <section>
    <h1>Брони аудиторий</h1>
    <TicketTable :items="items" />
  </section>
</template>