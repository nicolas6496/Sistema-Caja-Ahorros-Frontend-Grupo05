import { useState } from 'react'
import { solicitarCredito } from '../services/api'

function CreditoPage() {
  const [idSocio, setIdSocio] = useState('')
  const [montoSolicitado, setMontoSolicitado] = useState('')
  const [plazoMeses, setPlazoMeses] = useState('')
  const [motivo, setMotivo] = useState('')
  const [cargando, setCargando] = useState(false)
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const manejarEnvio = async (evento) => {
    evento.preventDefault()
    setCargando(true)
    setResultado(null)
    setError('')

    const datosCredito = {
      idSocio: Number(idSocio),
      montoSolicitado: Number(montoSolicitado),
      plazoMeses: Number(plazoMeses),
      motivo,
    }

    try {
      const respuesta = await solicitarCredito(datosCredito)

      setResultado({
        mensaje: respuesta.mensaje,
        idSolicitud: respuesta.idSolicitud,
        estado: respuesta.estado,
      })

      setIdSocio('')
      setMontoSolicitado('')
      setPlazoMeses('')
      setMotivo('')
    } catch (errorPeticion) {
      console.error('Error al solicitar el crédito:', errorPeticion)

      setError(
        errorPeticion.message || 'No se pudo enviar la solicitud de crédito',
      )
    } finally {
      setCargando(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <section className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Caja de Ahorros
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Solicitud de crédito
          </h1>

          <p className="mt-2 text-slate-600">
            Completa los datos necesarios para solicitar un crédito.
          </p>
        </div>

        {resultado && (
          <div className="mb-6 rounded-lg border border-green-200 bg-green-100 p-4 text-green-800">
            <p className="font-semibold">{resultado.mensaje}</p>

            {resultado.idSolicitud && (
              <p className="mt-2">
                <span className="font-semibold">ID de solicitud:</span>{' '}
                {resultado.idSolicitud}
              </p>
            )}

            {resultado.estado && (
              <p className="mt-1">
                <span className="font-semibold">Estado:</span>{' '}
                {resultado.estado}
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
              htmlFor="idSocioCredito"
              className="mb-2 block font-semibold text-slate-700"
            >
              ID del socio
            </label>

            <input
              id="idSocioCredito"
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
              htmlFor="montoSolicitado"
              className="mb-2 block font-semibold text-slate-700"
            >
              Monto solicitado
            </label>

            <input
              id="montoSolicitado"
              type="number"
              min="1"
              step="0.01"
              value={montoSolicitado}
              onChange={(evento) =>
                setMontoSolicitado(evento.target.value)
              }
              placeholder="Ejemplo: 5000.00"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="plazoMeses"
              className="mb-2 block font-semibold text-slate-700"
            >
              Plazo en meses
            </label>

            <input
              id="plazoMeses"
              type="number"
              min="1"
              max="60"
              step="1"
              value={plazoMeses}
              onChange={(evento) => setPlazoMeses(evento.target.value)}
              placeholder="Ejemplo: 24"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="motivoCredito"
              className="mb-2 block font-semibold text-slate-700"
            >
              Motivo del crédito
            </label>

            <textarea
              id="motivoCredito"
              rows="4"
              value={motivo}
              onChange={(evento) => setMotivo(evento.target.value)}
              placeholder="Ejemplo: Mejoras del hogar"
              required
              className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <button
            type="submit"
            disabled={cargando}
            className="w-full rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400"
          >
            {cargando ? 'Enviando...' : 'Enviar solicitud'}
          </button>
        </form>
      </section>
    </main>
  )
}

export default CreditoPage