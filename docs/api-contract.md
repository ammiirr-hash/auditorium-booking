# ЛР2. API-контракт — Бронь аудитории

## 1. Назначение

API используется Vue-клиентом для взаимодействия с сервером ASP.NET Core.

Клиент не обращается к PostgreSQL напрямую.

Основной ресурс API:

`/api/bookings`

## 2. Статусы Booking

- `New` — новая бронь
- `InProgress` — бронь в работе
- `Closed` — бронь завершена
- `Cancelled` — бронь отменена

## 3. Методы API

| Метод | Путь | Назначение |
|---|---|---|
| `GET` | `/api/bookings` | Получить список броней |
| `GET` | `/api/bookings/{id}` | Получить одну бронь |
| `POST` | `/api/bookings` | Создать бронь |
| `PATCH` | `/api/bookings/{id}/assignee` | Назначить исполнителя |
| `PATCH` | `/api/bookings/{id}/status` | Изменить статус |
## 4. Таблица API

| Метод и путь | Тело запроса | Успешный ответ | Возможная ошибка |
|---|---|---|---|
| `GET /api/bookings` | — | `200`, массив броней или `[]` | — |
| `GET /api/bookings/{id}` | — | `200`, объект брони | `404` |
| `POST /api/bookings` | `title`, `auditoriumId`, `description` | `201`, созданная бронь | `400` |
| `PATCH /api/bookings/{id}/assignee` | `assigneeUserId` | `200`, обновлённая бронь | `404` |
| `PATCH /api/bookings/{id}/status` | `status` | `200`, обновлённая бронь | `404`, `409` |

### Важные правила

- При создании клиент не передаёт `id`.
- При создании клиент не передаёт `number`.
- При создании статус автоматически устанавливается в `New`.
- При создании исполнитель может отсутствовать.
- Назначение исполнителя и изменение статуса выполняются разными `PATCH`.
- `DELETE` в API не используется.
- Отмена брони выполняется через статус `Cancelled`.
- Если список броней пуст, сервер возвращает `200` и `[]`, а не `404`.
## 5. Примеры запросов и ответов

### 5.1. Создание брони

Запрос:

```http
POST /api/bookings
Content-Type: application/json
{
  "title": "Защита курсовой работы",
  "auditoriumId": 2,
  "description": "Бронирование аудитории для защиты курсовой работы"
}
201 Created
{
  "id": 17,
  "number": "B-017",
  "title": "Защита курсовой работы",
  "auditoriumId": 2,
  "description": "Бронирование аудитории для защиты курсовой работы",
  "status": "New",
  "assigneeUserId": null
}
PATCH /api/bookings/17/assignee
Content-Type: application/json
{
  "assigneeUserId": 5
}
200 OK
{
  "id": 17,
  "number": "B-017",
  "assigneeUserId": 5
}
PATCH /api/bookings/17/status
Content-Type: application/json
{
  "status": "InProgress"
}
200 OK
{
  "id": 17,
  "number": "B-017",
  "status": "InProgress"
}
GET /api/bookings
200 OK
[
  {
    "id": 17,
    "number": "B-017",
    "title": "Защита курсовой работы",
    "auditoriumId": 2,
    "status": "InProgress",
    "assigneeUserId": 5
  }
]
200 OK
[]
## 6. Получение одной брони

Запрос:

```http
GET /api/bookings/17
200 OK
{
  "id": 17,
  "number": "B-017",
  "title": "Защита курсовой работы",
  "auditoriumId": 2,
  "description": "Бронирование аудитории для защиты курсовой работы",
  "status": "InProgress",
  "assigneeUserId": 5
}
404 Not Found
