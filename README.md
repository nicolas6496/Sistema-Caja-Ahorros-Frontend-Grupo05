# Frontend - Sistema de Gestión de Cajas de Ahorro

## Descripción

Este repositorio contiene el frontend del **Sistema de Gestión de Cajas de Ahorro**, desarrollado como parte de la Tarea Final de la asignatura Ingeniería de Software.

La aplicación utiliza **React**, **Vite** y **Tailwind CSS**, y se comunica con los servicios desarrollados previamente en el backend.

## Objetivo

Desarrollar una aplicación web que permita acceder a las principales funcionalidades del Sistema de Gestión de Cajas de Ahorro mediante una interfaz clara, organizada y fácil de utilizar.

## Funcionalidades

La aplicación incluye tres funcionalidades principales:

1. **Registrar depósito:** permite registrar un depósito para un socio.
2. **Consultar saldo:** permite consultar el saldo disponible mediante el ID del socio.
3. **Solicitar crédito:** permite registrar una solicitud de crédito.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- Tailwind CSS
- API REST
- Git
- GitHub

## Interfaces principales

El frontend está compuesto por las siguientes pantallas:

- Formulario de registro de depósitos.
- Vista de consulta de saldo.
- Formulario de solicitud de crédito.
- Navegación entre las tres pantallas principales.
- Mensajes visuales de éxito y error.
- Adaptación a diferentes tamaños de pantalla.

Los documentos de requerimientos y los mockups se encuentran dentro de la carpeta `docs`.

## Asignación de tareas

### Nicolás Ruiz

- Creación y configuración inicial del repositorio frontend.
- Organización de las ramas y tareas de seguimiento.
- Elaboración y actualización del archivo README.
- Revisión de la documentación del repositorio.
- Organización de la exposición.
- Consolidación del entregable final en PDF.

### Ezequiel Paredes

- Elaboración de los requerimientos funcionales.
- Desarrollo de los mockups de las tres interfaces.
- Organización de los documentos dentro de la carpeta `docs`.
- Apoyo en el seguimiento de las actividades del proyecto.

### Franklin Tandazo

- Diseño y maquetación de las interfaces con React y Tailwind CSS.
- Desarrollo visual del formulario de depósitos.
- Desarrollo visual de la consulta de saldo.
- Desarrollo visual del formulario de crédito.
- Adaptación de las interfaces a diferentes tamaños de pantalla.
- Preparación visual de mensajes de carga, éxito y error.
- Alineación de los campos de las interfaces con los contratos documentados del backend.

### Anthony Alvarado

- Desarrollo de la lógica del frontend.
- Integración de las interfaces con la API REST.
- Consumo de los servicios de depósito, saldo y crédito.
- Implementación de validaciones y mensajes de respuesta.
- Gestión de estados de carga, éxito y error.
- Pruebas de integración con el backend.

## Ejecución

Para instalar las dependencias:

```bash
npm install
```

Para iniciar el entorno de desarrollo:

```bash
npm run dev
```

Para comprobar la construcción del proyecto:

```bash
npm run build
```

Para ejecutar el análisis del código:

```bash
npm run lint
```

## Organización del repositorio

```text
├── docs/
│   ├── requerimientos.md
│   └── mockups/
├── src/
│   ├── pages/
│   └── services/
├── public/
├── .gitignore
├── index.html
├── package.json
└── README.md
```