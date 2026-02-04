# 🏥 Clínica Azahares - Sistema de Gestión de Turnos

Sistema web integral de gestión de turnos médicos construido con **React** y **Vite**. Permite a pacientes reservar citas, a médicos gestionar su agenda, y a administradores supervisar toda la operación.

---

## 🌟 Características Principales

### Para Pacientes
- ✅ Registro e inicio de sesión
- 🔍 Búsqueda de médicos por especialidad
- 📅 Reserva de turnos con validación de disponibilidad en tiempo real
- 📋 Visualización de turnos programados
- 🚫 Prevención de reservas dobles en horarios ocupados

### Para Médicos
- 👨‍⚘ Registro con aprobación por administrador
- 📊 Panel de gestión de turnos
- ✅ Confirmación y cancelación de citas
- 🗑️ Eliminación de turnos cancelados

### Para Administradores
- 🔐 Panel de administración completo
- 👥 **CRUD de Médicos** (con aprobación/rechazo)
- 🏥 **CRUD de Pacientes**
- 📆 **CRUD de Turnos**
- 🏷️ **CRUD de Especialidades** (gestión dinámica de catálogo)

---

## 🛠️ Stack Tecnológico

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router DOM v6
- **Styling:** Styled Components
- **State Management:** Context API
- **Icons:** React Icons
- **Testing:** Vitest + Testing Library
- **Persistence:** LocalStorage (simulación de backend)

---

## 📋 Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn

---

## 🚀 Instalación y Ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/xxFranxx121/proyecto-clinica-rolling.git
cd "proyecto clinica"
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar en modo desarrollo
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### 4. Build para producción
```bash
npm run build
npm run preview
```

---

## 🧪 Testing

Ejecutar tests unitarios y de integración:
```bash
npm test
```

---

## 👤 Credenciales de Prueba

### Administrador
- **Email:** `admin@clinica.com`
- **Password:** `admin123`

### Médico (aprobado)
- **Email:** `dr.house@clinica.com`
- **Password:** `password`

### Paciente
- **Email:** `paciente@example.com`
- **Password:** `password`

> **Nota:** Los médicos nuevos deben ser aprobados por un administrador antes de poder operar.

---

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── admin/           # Componentes del panel de administración
│   ├── Layout.jsx
│   └── ProtectedRoute.jsx
├── context/             # Context API (State Management)
│   ├── AuthContext.jsx  # Autenticación y roles
│   └── DataContext.jsx  # Datos de aplicación (CRUD)
├── pages/               # Páginas principales (Rutas)
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── RegisterPatient.jsx
│   ├── RegisterDoctor.jsx
│   ├── AdminPanel.jsx
│   ├── DoctorPanel.jsx
│   ├── Especialidades.jsx
│   ├── Profesionales.jsx
│   ├── DetalleMedico.jsx
│   ├── MisTurnos.jsx
│   ├── AboutUs.jsx
│   └── NotFound.jsx
├── services/            # Mock data y servicios
│   └── mockData.js
├── styles/              # Temas y estilos globales
│   └── theme.js
├── App.jsx              # Componente raíz con routing
└── main.jsx             # Entry point
```

---

## 🔑 Funcionalidades Clave Implementadas

### ✅ Control de Disponibilidad
- Verificación robusta de turnos ocupados
- Conversión de tipos para comparación de IDs (evita bugs string/number)
- Deshabilita visualmente slots ocupados en el formulario

### ✅ Roles y Protección de Rutas
- `ProtectedRoute` HOC para control de acceso
- Redirección automática según rol del usuario
- Admin como "superusuario" con acceso total

### ✅ Aprobación de Médicos
- Flag `approved: false` por defecto en nuevos registros
- Panel de administración para aprobar/rechazar
- Filtrado automático: solo médicos aprobados aparecen en listados públicos

### ✅ Gestión Dinámica de Especialidades
- Admin puede agregar/eliminar especialidades
- Actualización en tiempo real en filtros de búsqueda
- Persistencia en localStorage

---

## 🎨 Highlights de UX/UI

- Diseño responsive y mobile-first
- Tema consistente con `styled-components`
- Indicadores visuales de estado (confirmado, pendiente, cancelado)
- Validación de formularios con mensajes de error claros
- Feedback inmediato en acciones CRUD

---

## 🐛 Bugs Conocidos Resueltos

### ❌ Problema: Doble Reserva de Turnos
**Causa:** Comparación incorrecta de IDs (string vs number)  
**Solución:** Conversión explícita a `Number()` en `checkAvailability`

### ❌ Problema: Médicos No Aprobados Aparecen en Listado
**Causa:** Falta de filtro por estado de aprobación  
**Solución:** Filtro `approved !== false` en `Profesionales.jsx`

---

## 🚧 Próximas Mejoras

- [ ] Integración con backend real (API REST)
- [ ] Notificaciones por email
- [ ] Historial médico completo
- [ ] Soporte multi-idioma
- [ ] Dashboard con gráficos y estadísticas

---

## 👨‍💻 Autor

**FranXx121**  
GitHub: [@xxFranxx121](https://github.com/xxFranxx121)

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

## 🙏 Agradecimientos

- Equipo de Rolling Code School
- Comunidad React
- Iconos por React Icons