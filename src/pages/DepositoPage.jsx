import { useState } from 'react'
import { registrarDeposito } from '../services/api'

function DepositoPage() {
  const [idSocio, setIdSocio] = useState('')
  const [monto, setMonto] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [cargando, setCargando] = useState(false)
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const manejarEnvio = async (evento) => {
    evento.preventDefault()
    setCargando(true)
    setResultado(null)
    setError('')

    const datosDeposito = {
      idSocio: Number(idSocio),
      monto: Number(monto),
      descripcion,
    }

    try {
      const respuesta = await registrarDeposito(datosDeposito)

      setResultado({
        mensaje: respuesta.mensaje,
        idTransaccion: respuesta.idTransaccion,
        nuevoSaldo: respuesta.nuevoSaldo,
      })

      setIdSocio('')
      setMonto('')
      setDescripcion('')
    } catch (errorPeticion) {
      console.error('Error al registrar el depósito:', errorPeticion)

      setError(
        errorPeticion.message || 'No se pudo registrar el depósito',
      )
    } finally {
      setCargando(false)
    }
  }

  return (
   <main className="px-4 py-10">
      <section className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Caja de Ahorros
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Registrar depósito
          </h1>

          <p className="mt-2 text-slate-600">
            Ingresa los datos necesarios para registrar un depósito.
          </p>
        </div>

        {resultado && (
          <div className="mb-6 rounded-lg border border-green-200 bg-green-100 p-4 text-green-800">
            <p className="font-semibold">{resultado.mensaje}</p>

            {resultado.idTransaccion && (
              <p className="mt-2">
                <span className="font-semibold">ID de transacción:</span>{' '}
                {resultado.idTransaccion}
              </p>
            )}

            {resultado.nuevoSaldo !== undefined && (
              <p className="mt-1">
                <span className="font-semibold">Nuevo saldo:</span> $
                {Number(resultado.nuevoSaldo).toFixed(2)}
              </p>
            )}
          </div>
        )}

        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-100 p-4 text-red-800">
            <p className="font-semibold">Error</p>
            <p className="mt-1">{error}</p>
          </div>
        )}

        <form className="space-y-6" onSubmit={manejarEnvio}>
          <div>
            <label
              htmlFor="idSocioDeposito"
              className="mb-2 block font-semibold text-slate-700"
            >
              ID del socio
            </label>

            <input
              id="idSocioDeposito"
              type="number"
              min="1"
              step="1"
              value={idSocio}
              onChange={(evento) => setIdSocio(evento.target.value)}
              placeholder="Ejemplo: 1025"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="montoDeposito"
              className="mb-2 block font-semibold text-slate-700"
            >
              Monto del depósito
            </label>

            <input
              id="montoDeposito"
              type="number"
              min="0.01"
              step="0.01"
              value={monto}
              onChange={(evento) => setMonto(evento.target.value)}
              placeholder="0.00"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="descripcionDeposito"
              className="mb-2 block font-semibold text-slate-700"
            >
              Descripción
            </label>

            <textarea
              id="descripcionDeposito"
              rows="4"
              value={descripcion}
              onChange={(evento) => setDescripcion(evento.target.value)}
              placeholder="Ejemplo: Depósito mensual"
              className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <button
            type="submit"
            disabled={cargando}
            className="w-full rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400"
          >
            {cargando ? 'Registrando...' : 'Registrar depósito'}
          </button>
        </form>
      </section>
    </main>
  )
}

export default DepositoPage