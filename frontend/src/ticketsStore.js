import { ref } from 'vue'

export const items = ref([
  { id: 1, number: 'B-001', title: 'Защита курсовой работы', auditoriumId: 2, status: 'New' },
  { id: 2, number: 'B-002', title: 'Лекция для первого курса', auditoriumId: 1, status: 'InProgress' }
])