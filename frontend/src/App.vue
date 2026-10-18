<script setup>
import { ref } from 'vue'

const screen = ref('list')

const items = [
  { id: 1, number: 'B-001', title: 'Защита курсовой работы', auditoriumId: 2, status: 'New' },
  { id: 2, number: 'B-002', title: 'Лекция для первого курса', auditoriumId: 1, status: 'InProgress' }
]
</script>

<template>
  <header>
    <nav>
      <button type="button" @click="screen = 'list'">Список</button>
      <button type="button" @click="screen = 'new'">Создание</button>
      <button type="button" @click="screen = 'login'">Вход</button>
    </nav>
  </header>

  <main>
    <section v-if="screen === 'list'">
      <h1>Брони аудиторий</h1>
      <table>
        <thead>
          <tr>
            <th>Номер</th>
            <th>Тема</th>
            <th>auditoriumId</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.number }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.auditoriumId }}</td>
            <td>{{ item.status }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section v-else-if="screen === 'new'">
      <h1>Создание брони</h1>
      <form @submit.prevent>
        <label for="title">Тема, 5–80 символов</label>
        <input id="title" name="title" autofocus>

        <label for="auditoriumId">Номер аудитории</label>
        <input id="auditoriumId" name="auditoriumId" type="number">

        <label for="description">Описание, 10–500 символов</label>
        <textarea id="description" name="description"></textarea>

        <button type="submit">Создать</button>
      </form>
    </section>

    <section v-else-if="screen === 'login'">
      <h1>Вход</h1>
      <form @submit.prevent>
        <label for="login">Логин</label>
        <input id="login" name="login" autocomplete="username">

        <label for="password">Пароль</label>
        <input id="password" name="password" type="password" autocomplete="current-password">

        <button type="submit">Войти</button>
      </form>
    </section>
  </main>
</template>

<style scoped>
nav {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.4);
}

button {
  padding: 8px 16px;
  border: 1px solid rgba(128, 128, 128, 0.6);
  border-radius: 6px;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
}

button:hover {
  background: rgba(128, 128, 128, 0.2);
}

form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 400px;
}

label {
  margin-top: 8px;
  font-weight: 600;
}

input,
textarea {
  padding: 8px;
  border: 1px solid rgba(128, 128, 128, 0.6);
  border-radius: 6px;
  background: transparent;
  color: inherit;
  font: inherit;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

form button[type='submit'] {
  margin-top: 12px;
  align-self: flex-start;
}

table {
  width: 100%;
  max-width: 720px;
  border-collapse: collapse;
}

th,
td {
  padding: 10px 12px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.4);
  text-align: left;
}

th {
  background: rgba(128, 128, 128, 0.15);
}
</style>