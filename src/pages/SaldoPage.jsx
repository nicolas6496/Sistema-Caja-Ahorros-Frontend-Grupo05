import { useState } from 'react'
import { consultarSaldo } from '../services/api'
import { validarIdSocio } from '../utils/validaciones'

function SaldoPage() {
  const [idSocio, setIdSocio] = useState('')
  const [cuenta, setCuenta] = useState(null)
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')

  const manejarConsulta = async (evento) => {
    evento.preventDefault()
    setCuenta(null)
    setError('')

    const errorValidacion = validarIdSocio(idSocio)

    if (errorValidacion) {
      setError(errorValidacion)
      return
    }

    setCargando(true)

    try {
      const datos = await consultarSaldo(Number(idSocio))
      const saldoDisponible = Number(datos.saldoDisponible)

      if (!Number.isFinite(saldoDisponible)) {
        throw new Error('El servidor devolvió un saldo inválido')
      }

      setCuenta({
        idSocio: datos.idSocio,
        nombre: datos.nombre,
        saldoDisponible,
      })
    } catch (errorPeticion) {
      console.error('Error al consultar el saldo:', errorPeticion)
      setError(errorPeticion.message || 'No se encontró información del socio')
    } finally {
      setCargando(false)
    }
  }

  return (
    <main className="px-4 py-10">
      <section className="mx-auto max-w-xl">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Caja de Ahorros
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Consulta de saldo
          </h1>

          <p className="mt-2 text-slate-600">
            Ingresa el ID del socio para consultar su saldo disponible.
          </p>
        </div>

        <form
          onSubmit={manejarConsulta}
          noValidate
          className="mb-6 rounded-2xl bg-white p-6 shadow-lg"
        >
          <label
            htmlFor="idSocioSaldo"
            className="mb-2 block font-semibold text-slate-700"
          >
            ID del socio
          </label>

          <input
            id="idSocioSaldo"
            type="number"
            min="1"
            step="1"
            value={idSocio}
            onChange={(evento) => setIdSocio(evento.target.value)}
            placeholder="Ejemplo: 1025"
            required
            disabled={cargando}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-100"
          />

          <button
            type="submit"
            disabled={cargando}
            className="mt-5 w-full rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400"
          >
            {cargando ? 'Consultando...' : 'Consultar saldo'}
          </button>
        </form>

        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-100 p-4 text-red-800">
            <p className="font-semibold">Error</p>
            <p className="mt-1">{error}</p>
          </div>
        )}

        {cuenta ? (
          <article className="rounded-2xl bg-gradient-to-br from-blue-800 to-blue-600 p-8 text-white shadow-lg">
            <p className="text-sm text-blue-100">Saldo disponible</p>

            <p className="mt-3 text-4xl font-bold">
              ${cuenta.saldoDisponible.toFixed(2)}
            </p>

            <div className="mt-8 border-t border-blue-400 pt-5">
              <p className="text-sm text-blue-100">ID del socio</p>
              <p className="font-semibold">{cuenta.idSocio}</p>

              <p className="mt-4 text-sm text-blue-100">Nombre</p>
              <p className="font-semibold">{cuenta.nombre}</p>
            </div>
          </article>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
            Ingresa el ID del socio para mostrar la información.
          </div>
        )}
      </section>
    </main>
  )
}

export default SaldoPage
