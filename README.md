# 🏨 Aplicación de Gestión de Hoteles

Esta aplicación permite la gestión de hoteles y sus habitaciones. Está construida con:

- 🔙 **Backend**: PHP (Laravel)
- 🎨 **Frontend**: React
- 🗃️ **Base de datos**: PostgreSQL

---

## 📦 Requisitos

### Backend
- PHP >= 8.1
- Composer
- PostgreSQL
- Laravel
- Node.js (opcional, si usás Laravel Mix)

### Frontend
- Node.js >= 16
- npm o yarn

---

## 🚀 Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/CupajitaN/hoteles
cd backend-hoteles o frontend-hoteles
---
Back
---
composer install

cp .env.example .env

DB_CONNECTION=pgsql
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=nombre_bd
DB_USERNAME=usuario
DB_PASSWORD=contraseña

php artisan key:generate

php artisan migrate --seed

php artisan serve

---
Front
---
npm install

npm run dev


@Nicolas Cupajita - 2025

