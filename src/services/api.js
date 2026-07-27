// Servicio temporal para visualizar las interfaces.
// Será reemplazado por la integración real con el backend.

const esperar = (tiempo = 700) =>
  new Promise((resolve) => setTimeout(resolve, tiempo))

export async function registrarDeposito(datosDeposito) {
  await esperar()

  console.log('Depósito simulado:', datosDeposito)

  if (
    !datosDeposito.idSocio ||
    datosDeposito.idSocio <= 0 ||
    !datosDeposito.monto ||
    datosDeposito.monto <= 0
  ) {
    throw new Error('Verifica el ID del socio y el monto ingresado')
  }

  return {
    ok: true,
    mensaje: 'Depósito registrado correctamente',
    idTransaccion: 3001,
    nuevoSaldo: 1700.75,
  }
}

export async function consultarSaldo(idSocio) {
  await esperar()

  if (!idSocio || idSocio <= 0) {
    throw new Error('Debes ingresar un ID de socio válido')
  }

  // Simulación de socio inexistente para probar el mensaje de error.
  if (Number(idSocio) === 9999) {
    throw new Error('No se encontró información para el socio ingresado')
  }

  return {
    idSocio: Number(idSocio),
    nombre: 'Juan Pérez',
    saldoDisponible: 1450.75,
  }
}

export async function solicitarCredito(datosCredito) {
  await esperar()

  console.log('Crédito simulado:', datosCredito)

  if (
    !datosCredito.idSocio ||
    datosCredito.idSocio <= 0 ||
    !datosCredito.montoSolicitado ||
    datosCredito.montoSolicitado <= 0 ||
    !datosCredito.plazoMeses ||
    datosCredito.plazoMeses <= 0 ||
    !datosCredito.motivo ||
    !datosCredito.motivo.trim()
  ) {
    throw new Error('Verifica los datos ingresados para la solicitud')
  }

  return {
    ok: true,
    mensaje: 'Solicitud de crédito enviada correctamente',
    idSolicitud: 5001,
    estado: 'En revisión',
  }
}