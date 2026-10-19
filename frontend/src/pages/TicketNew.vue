<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { addItem } from '../ticketsStore.js'

const router = useRouter()

const form = ref({
  title: '',
  auditoriumId: 0,
  description: ''
})

const errors = ref({
  title: '',
  auditoriumId: '',
  description: ''
})

function onCreate() {
  const title = form.value.title.trim()
  const description = form.value.description.trim()
  const auditoriumId = form.value.auditoriumId

  errors.value = { title: '', auditoriumId: '', description: '' }

  if (title.length < 5 || title.length > 80) {
    errors.value.title = 'Тема: от 5 до 80 символов'
  }
  if (!Number.isInteger(auditoriumId) || auditoriumId <= 0) {
    errors.value.auditoriumId = 'Номер аудитории: целое число больше нуля'
  }
  if (description.length < 10 || description.length > 500) {
    errors.value.description = 'Описание: от 10 до 500 символов'
  }

  if (errors.value.title || errors.value.auditoriumId || errors.value.description) {
    return
  }

  addItem({ title, auditoriumId, description })

  form.value = { title: '', auditoriumId: 0, description: '' }
  router.push('/')
}
</script>

<template>
  <section>
    <h1>Создание брони</h1>
    <form @submit.prevent="onCreate">
      <label for="title">Тема, 5–80 символов</label>
      <input id="title" v-model="form.title" name="title" autofocus>
      <p v-if="errors.title" class="error">{{ errors.title }}</p>

      <label for="auditoriumId">Номер аудитории</label>
      <input id="auditoriumId" v-model.number="form.auditoriumId" name="auditoriumId" type="number">
      <p v-if="errors.auditoriumId" class="error">{{ errors.auditoriumId }}</p>

      <label for="description">Описание, 10–500 символов</label>
      <textarea id="description" v-model="form.description" name="description"></textarea>
      <p v-if="errors.description" class="error">{{ errors.description }}</p>

      <button type="submit">Создать</button>
    </form>
  </section>
</template>

<style scoped>
.error {
  margin: 0;
  color: #e5484d;
  font-size: 0.85rem;
}
</style>