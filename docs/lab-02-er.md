# ЛР2. ER-модель — Бронь аудитории

## 1. Сущности

### Booking — бронь аудитории

Главная сущность процесса бронирования аудитории.

### Auditorium — аудитория

Справочник аудиторий, доступных для бронирования.

### User — пользователь

Пользователь системы: преподаватель, диспетчер или исполнитель.

## 2. Связи

* `Booking.auditoriumId` → `Auditorium.id`
* `Booking.assigneeUserId` → `User.id`

## 3. Статусы Booking

* `New`
* `InProgress`
* `Closed`
* `Cancelled`
## 4. Поля сущностей

### Booking

| Поле             | Тип     | Назначение                         |
| ---------------- | ------- | ---------------------------------- |
| `id`             | integer | Машинный идентификатор             |
| `number`         | string  | Человеческий номер брони           |
| `title`          | string  | Название брони                     |
| `auditoriumId`   | integer | Ссылка на аудиторию                |
| `description`    | string  | Описание бронирования              |
| `status`         | string  | Текущий статус брони               |
| `assigneeUserId` | integer | Ссылка на назначенного исполнителя |

### Auditorium

| Поле       | Тип     | Назначение                   |
| ---------- | ------- | ---------------------------- |
| `id`       | integer | Идентификатор аудитории      |
| `name`     | string  | Номер или название аудитории |
| `capacity` | integer | Вместимость аудитории        |

### User

| Поле   | Тип     | Назначение                 |
| ------ | ------- | -------------------------- |
| `id`   | integer | Идентификатор пользователя |
| `name` | string  | Имя пользователя           |
| `role` | string  | Роль пользователя          |
## 5. Ключи

### Booking

- `id` — PK
- `auditoriumId` — FK → `Auditorium.id`
- `assigneeUserId` — FK → `User.id`, может быть `NULL`

### Auditorium

- `id` — PK

### User

- `id` — PK
## 6. Связи

- Один `Auditorium` может иметь много `Booking`.
- Один `User` может создать много `Booking`.
- Один `User` может быть назначен исполнителем для многих `Booking`.
- У новой `Booking` исполнитель может отсутствовать.

## 7. Проверка 3НФ

Название аудитории хранится в сущности `Auditorium` один раз.  
Сущность `Booking` содержит только внешний ключ `auditoriumId`.

При переименовании аудитории изменяется одна запись в `Auditorium`, поэтому название аудитории не дублируется в каждой брони.

## 8. Итог

ER-модель состоит из трёх сущностей:

- `Booking` — основная сущность бронирования;
- `Auditorium` — справочник аудиторий;
- `User` — пользователь системы.

Связи между сущностями реализованы через внешние ключи `auditoriumId` и `assigneeUserId`.
## 9. ER-диаграмма

```mermaid
erDiagram
    AUDITORIUM ||--o{ BOOKING : "имеет"
    USER ||--o{ BOOKING : "создаёт"
    USER ||--o{ BOOKING : "исполняет"

    AUDITORIUM {
        int id PK
        string name
        int capacity
    }

    BOOKING {
        int id PK
        string number
        string title
        int auditoriumId FK
        string description
        string status
        int assigneeUserId FK
    }

    USER {
        int id PK
        string name
        string role
    }