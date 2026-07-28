export function validarIdSocio(valor) {
  const idSocio = Number(valor)

  if (!Number.isInteger(idSocio) || idSocio <= 0) {
    return 'El ID del socio debe ser un número entero mayor que cero'
  }

  return ''
}

export function validarMonto(valor, nombreCampo = 'monto') {
  const monto = Number(valor)

  if (!Number.isFinite(monto) || monto <= 0) {
    return `El ${nombreCampo} debe ser mayor que cero`
  }

  if (!/^\d+(\.\d{1,2})?$/.test(String(valor).trim())) {
    return `El ${nombreCampo} debe tener como máximo dos decimales`
  }

  return ''
}

export function validarPlazoMeses(valor) {
  const plazoMeses = Number(valor)

  if (!Number.isInteger(plazoMeses) || plazoMeses < 1 || plazoMeses > 60) {
    return 'El plazo debe ser un número entero entre 1 y 60 meses'
  }

  return ''
}

export function validarMotivo(valor) {
  if (!valor.trim()) {
    return 'Debes ingresar el motivo del crédito'
  }

  return ''
}
