<template>
  <section>
    <h1>Вход</h1>
    <form @submit.prevent>
      <label for="login">Логин</label>
      <input id="login" name="login" autocomplete="username">

      <label for="password">Пароль</label>
      <input id="password" name="password" type="password" autocomplete="current-password">

      <button type="submit">Войти</button>
    </form>
  </section>
</template>