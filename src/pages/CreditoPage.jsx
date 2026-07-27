import { useState } from 'react'

function CreditoPage() {
  const [monto, setMonto] = useState('')
  const [plazo, setPlazo] = useState('')
  const [tipoAmortizacion, setTipoAmortizacion] = useState('francesa')
  const [motivo, setMotivo] = useState('')

  const manejarEnvio = (evento) => {
    evento.preventDefault()

    const datosCredito = {
      monto: Number(monto),
      plazo: Number(plazo),
      tipoAmortizacion,
      motivo,
    }

    console.log('Datos para Anthony:', datosCredito)
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

        <form className="space-y-6" onSubmit={manejarEnvio}>
          <div>
            <label
              htmlFor="monto"
              className="mb-2 block font-semibold text-slate-700"
            >
              Monto solicitado
            </label>

            <input
              id="monto"
              type="number"
              min="1"
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
              htmlFor="plazo"
              className="mb-2 block font-semibold text-slate-700"
            >
              Plazo en meses
            </label>

            <input
              id="plazo"
              type="number"
              min="1"
              max="60"
              value={plazo}
              onChange={(evento) => setPlazo(evento.target.value)}
              placeholder="Ejemplo: 12"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="tipoAmortizacion"
              className="mb-2 block font-semibold text-slate-700"
            >
              Tipo de amortización
            </label>

            <select
              id="tipoAmortizacion"
              value={tipoAmortizacion}
              onChange={(evento) => setTipoAmortizacion(evento.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            >
              <option value="francesa">Amortización francesa</option>
              <option value="alemana">Amortización alemana</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="motivo"
              className="mb-2 block font-semibold text-slate-700"
            >
              Motivo del crédito
            </label>

            <textarea
              id="motivo"
              rows="4"
              value={motivo}
              onChange={(evento) => setMotivo(evento.target.value)}
              placeholder="Describe brevemente para qué necesitas el crédito"
              required
              className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Enviar solicitud
          </button>
        </form>
      </section>
    </main>
  )
}

export default CreditoPage