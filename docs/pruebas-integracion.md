# Pruebas de integración del frontend

## Preparación

1. Iniciar el backend FastAPI.
2. Crear `.env` a partir de `.env.example`.
3. Confirmar que `VITE_API_BASE_URL` contiene la URL del backend.
4. Ejecutar `npm install` y `npm run dev`.

## Casos mínimos

### Registrar depósito

- Probar un socio existente con monto positivo.
- Confirmar mensaje, ID de transacción y nuevo saldo.
- Probar ID cero, monto cero y socio inexistente.

### Consultar saldo

- Consultar un socio existente.
- Confirmar ID, nombre y saldo disponible.
- Probar un ID inválido y un socio inexistente.

### Solicitar crédito

- Probar un socio existente, monto positivo, plazo entre 1 y 60 y motivo.
- Confirmar mensaje, ID de solicitud y estado.
- Probar campos vacíos, monto cero y plazo fuera del rango.

## Evidencias sugeridas

- Captura del frontend mostrando una operación exitosa por cada servicio.
- Captura de un mensaje de validación.
- Captura de un error devuelto por el backend.
- Captura de la pestaña Network del navegador mostrando el método y el estado HTTP.
