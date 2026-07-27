import { useEffect, useState } from 'react'
import { consultarSaldo } from '../services/api'

function SaldoPage() {
  const [cuenta, setCuenta] = useState({
    numero: '',
    titular: '',
    saldo: 0,
  })

  const [cargando, setCargando] = useState(false)
  const [mensaje, setMensaje] = useState('')

  const cargarSaldo = async () => {
    setCargando(true)
    setMensaje('')

    try {
      const datos = await consultarSaldo()
      setCuenta(datos)
      setMensaje('Saldo actualizado correctamente')
    } catch (error) {
      console.error(error)
      setMensaje('No se pudo consultar el saldo')
    } finally {
      setCargando(false)
    }
  }

  useEffect(() => {
    cargarSaldo()
  }, [])

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <section className="mx-auto max-w-xl">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Caja de Ahorros
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Consulta de saldo
          </h1>

          <p className="mt-2 text-slate-600">
            Revisa la información disponible de la cuenta.
          </p>
        </div>

        <article className="rounded-2xl bg-gradient-to-br from-blue-800 to-blue-600 p-8 text-white shadow-lg">
          <p className="text-sm text-blue-100">Saldo disponible</p>

          <p className="mt-3 text-4xl font-bold">
            ${cuenta.saldo.toFixed(2)}
          </p>

          <div className="mt-8 border-t border-blue-400 pt-5">
            <p className="text-sm text-blue-100">Titular</p>
            <p className="font-semibold">{cuenta.titular}</p>

            <p className="mt-4 text-sm text-blue-100">
              Número de cuenta
            </p>

            <p className="font-semibold">{cuenta.numero}</p>
          </div>
        </article>

        {mensaje && (
          <p className="mt-4 rounded-lg bg-green-100 px-4 py-3 text-center font-medium text-green-800">
            {mensaje}
          </p>
        )}

        <button
          type="button"
          onClick={cargarSaldo}
          disabled={cargando}
          className="mt-6 w-full rounded-lg bg-white px-6 py-3 font-semibold text-blue-800 shadow transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {cargando ? 'Actualizando...' : 'Actualizar saldo'}
        </button>
      </section>
    </main>
  )
}

export default SaldoPage