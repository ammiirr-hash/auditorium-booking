<script setup>
defineProps({
  items: { type: Array, required: true }
})
</script>

<template>
  <div class="wrap">
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
          <td>
            <span class="status" :class="'status-' + item.status.toLowerCase()">
              {{ item.status }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.wrap {
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: 12px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 12px 16px;
  text-align: left;
}

th {
  background: var(--surface);
  font-size: 0.85rem;
}

tbody tr + tr td {
  border-top: 1px solid var(--border);
}

tbody tr:hover {
  background: var(--surface);
}

.status {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
}

.status-new {
  background: rgba(79, 124, 255, 0.2);
  color: #4f7cff;
}

.status-inprogress {
  background: rgba(240, 160, 30, 0.2);
  color: #d98a00;
}

.status-closed {
  background: rgba(40, 170, 90, 0.2);
  color: #1f9d55;
}

.status-cancelled {
  background: rgba(128, 128, 128, 0.2);
  color: inherit;
}
</style>