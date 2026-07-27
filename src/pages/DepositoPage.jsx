import { useState } from 'react'

function DepositoPage() {
  const [numeroCuenta, setNumeroCuenta] = useState('')
  const [monto, setMonto] = useState('')
  const [descripcion, setDescripcion] = useState('')

  const manejarEnvio = (evento) => {
    evento.preventDefault()

    const datosDeposito = {
      numeroCuenta,
      monto: Number(monto),
      descripcion,
    }

    console.log('Datos para Anthony:', datosDeposito)
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <section className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Caja de Ahorros
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Registrar depósito
          </h1>

          <p className="mt-2 text-slate-600">
            Ingresa los datos necesarios para realizar el depósito.
          </p>
        </div>

        <form className="space-y-6" onSubmit={manejarEnvio}>
          <div>
            <label
              htmlFor="numeroCuenta"
              className="mb-2 block font-semibold text-slate-700"
            >
              Número de cuenta
            </label>

            <input
              id="numeroCuenta"
              type="text"
              value={numeroCuenta}
              onChange={(evento) => setNumeroCuenta(evento.target.value)}
              placeholder="Ejemplo: 0001234567"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="monto"
              className="mb-2 block font-semibold text-slate-700"
            >
              Monto del depósito
            </label>

            <input
              id="monto"
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
              htmlFor="descripcion"
              className="mb-2 block font-semibold text-slate-700"
            >
              Descripción
            </label>

            <textarea
              id="descripcion"
              rows="4"
              value={descripcion}
              onChange={(evento) => setDescripcion(evento.target.value)}
              placeholder="Detalle opcional del depósito"
              className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Registrar depósito
          </button>
        </form>
      </section>
    </main>
  )
}

export default DepositoPage