const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'
).replace(/\/$/, '')

async function leerRespuesta(respuesta) {
  const tipoContenido = respuesta.headers.get('content-type') || ''

  if (tipoContenido.includes('application/json')) {
    return respuesta.json()
  }

  const texto = await respuesta.text()
  return texto ? { mensaje: texto } : {}
}

function obtenerMensajeError(datos, estado) {
  if (typeof datos?.detail === 'string') {
    return datos.detail
  }

  if (Array.isArray(datos?.detail)) {
    return datos.detail
      .map((detalle) => detalle.msg || 'Dato inválido')
      .join('. ')
  }

  if (typeof datos?.mensaje === 'string') {
    return datos.mensaje
  }

  if (typeof datos?.message === 'string') {
    return datos.message
  }

  return `La solicitud no pudo completarse (HTTP ${estado})`
}

async function peticionApi(ruta, opciones = {}) {
  let respuesta

  try {
    respuesta = await fetch(`${API_BASE_URL}${ruta}`, {
      ...opciones,
      headers: {
        Accept: 'application/json',
        ...(opciones.body ? { 'Content-Type': 'application/json' } : {}),
        ...opciones.headers,
      },
    })
  } catch {
    throw new Error(
      'No se pudo conectar con el servidor. Verifica que el backend esté encendido.',
    )
  }

  const datos = await leerRespuesta(respuesta)

  if (!respuesta.ok) {
    throw new Error(obtenerMensajeError(datos, respuesta.status))
  }

  return datos
}

export function registrarDeposito(datosDeposito) {
  return peticionApi('/api/transacciones/deposito', {
    method: 'POST',
    body: JSON.stringify(datosDeposito),
  })
}

export function consultarSaldo(idSocio) {
  return peticionApi(`/api/socios/${encodeURIComponent(idSocio)}/saldo`)
}

export function solicitarCredito(datosCredito) {
  return peticionApi('/api/creditos/solicitud', {
    method: 'POST',
    body: JSON.stringify(datosCredito),
  })
}
