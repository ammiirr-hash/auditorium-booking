import { ref } from 'vue'

export const items = ref([
  { id: 1, number: 'B-001', title: 'Защита курсовой работы', auditoriumId: 2, status: 'New' },
  { id: 2, number: 'B-002', title: 'Лекция для первого курса', auditoriumId: 1, status: 'InProgress' }
])

let nextId = 3

export function addItem({ title, auditoriumId, description }) {
  const item = {
    id: nextId,
    number: `TMP-${nextId}`,
    title,
    auditoriumId,
    description,
    status: 'New'
  }
  nextId += 1
  items.value.push(item)
  return item
}