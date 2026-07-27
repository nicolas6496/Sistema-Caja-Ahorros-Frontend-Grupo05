# Requerimientos del Frontend - Sistema de Cajas de Ahorro
## 1. Requerimientos Funcionales

### 1.1 Pantalla de Registro de Depósito
- El usuario debe poder ingresar el ID del socio.
- El usuario debe poder ingresar el monto a depositar.
- El usuario debe poder agregar una descripción opcional.
- Al enviar el formulario, se debe consumir el endpoint POST /api/transacciones/deposito.
- Se debe mostrar un mensaje de éxito con el nuevo saldo y el ID de transacción.
- Se debe mostrar un mensaje de error en caso de falla.

### 1.2 Pantalla de Consulta de Saldo
- El usuario debe poder ingresar el ID del socio.
- Al presionar "Consultar", se debe consumir el endpoint GET /api/socios/{id}/saldo.
- Se debe mostrar el nombre del socio y su saldo disponible.
- Se debe manejar errores (socio no encontrado, etc.).

### 1.3 Pantalla de Solicitud de Crédito
- El usuario debe poder ingresar el ID del socio.
- El usuario debe poder ingresar el monto solicitado.
- El usuario debe poder ingresar el plazo en meses.
- El usuario debe poder ingresar el motivo del crédito.
- Al enviar, se debe consumir el endpoint POST /api/creditos/solicitud.
- Se debe mostrar el ID de solicitud y el estado "Pendiente".
- Manejo de errores.

## 2. Requerimientos No Funcionales
- La interfaz debe ser responsive (adaptable a móvil y escritorio).
- Los tiempos de respuesta deben ser menores a 2 segundos.
- La aplicación debe estar construida con React y Tailwind CSS.
- Debe existir navegación clara entre las tres pantallas.
- Los mensajes de error deben ser legibles para el usuario final.
- El código debe estar documentado y versionado en GitHub.

## 3. Mockups
Los mockups de las tres pantallas se encuentran en la carpeta /docs/mockups/.
