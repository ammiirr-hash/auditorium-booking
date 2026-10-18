<template>
  <section>
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
</template>