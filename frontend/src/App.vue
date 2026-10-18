<script setup>
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <AppHeader />
  <main>
    <router-view />
  </main>
</template>

<style>
:root {
  --accent: #4f7cff;
  --border: rgba(128, 128, 128, 0.35);
  --surface: rgba(128, 128, 128, 0.08);
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.5;
}

#app {
  max-width: 880px;
  margin: 0 auto;
  padding: 24px 20px 48px;
}

h1 {
  margin: 0 0 20px;
  font-size: 1.6rem;
}

button {
  padding: 9px 18px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
}

button:hover {
  background: var(--surface);
}

form {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 440px;
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
}

label {
  margin-top: 10px;
  font-size: 0.9rem;
  font-weight: 600;
}

input,
textarea {
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font: inherit;
}

input:focus,
textarea:focus {
  outline: 2px solid var(--accent);
  outline-offset: 1px;
}

textarea {
  min-height: 110px;
  resize: vertical;
}

form button[type='submit'] {
  margin-top: 16px;
  align-self: flex-start;
  border-color: var(--accent);
  background: var(--accent);
  color: #fff;
}

form button[type='submit']:hover {
  filter: brightness(1.1);
  background: var(--accent);
}
</style>