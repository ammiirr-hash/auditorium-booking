<template>
  <header>
    <span class="brand">Бронь аудиторий</span>
    <nav>
      <router-link to="/">Список</router-link>
      <router-link to="/new">Создать</router-link>
      <router-link to="/login">Вход</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}

.brand {
  font-size: 1.15rem;
  font-weight: 700;
}

nav {
  display: flex;
  gap: 6px;
}

a {
  padding: 7px 14px;
  border-radius: 8px;
  color: inherit;
  text-decoration: none;
}

a:hover {
  background: var(--surface);
}

a.router-link-exact-active {
  background: var(--accent);
  color: #fff;
}
</style>