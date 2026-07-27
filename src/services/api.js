const esperar = (tiempo = 700) =>
  new Promise((resolve) => setTimeout(resolve, tiempo))

export async function registrarDeposito(datosDeposito) {
  await esperar()

  console.log('Depósito simulado:', datosDeposito)

  return {
    ok: true,
    mensaje: 'Depósito registrado correctamente',
  }
}

export async function consultarSaldo() {
  await esperar()

  return {
    numero: '0001234567',
    titular: 'Franklin Tandazo',
    saldo: 1250.75,
  }
}

export async function solicitarCredito(datosCredito) {
  await esperar()

  console.log('Crédito simulado:', datosCredito)

  return {
    ok: true,
    mensaje: 'Solicitud de crédito enviada correctamente',
  }
}