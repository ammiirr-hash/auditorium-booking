# ЛР2. Архитектура web-ИС — Бронь аудитории

## 1. Общая архитектура

Система состоит из трёх основных компонентов:

1. Vue 3 — клиентская часть.
2. ASP.NET Core — серверная часть и REST API.
3. PostgreSQL — база данных.

Взаимодействие выполняется последовательно:

`Vue 3 → ASP.NET Core → PostgreSQL`

Клиент Vue 3 не обращается к PostgreSQL напрямую.

## 2. Схема взаимодействия

```mermaid
flowchart LR
    V[Vue 3<br/>localhost:5173]
    A[ASP.NET Core<br/>localhost:5000]
    P[(PostgreSQL<br/>localhost:5432)]

    V -->|HTTP / REST API| A
    A -->|SQL / EF Core| P