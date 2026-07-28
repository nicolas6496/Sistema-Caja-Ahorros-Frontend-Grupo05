import { useState } from 'react'
import DepositoPage from './pages/DepositoPage'
import SaldoPage from './pages/SaldoPage'
import CreditoPage from './pages/CreditoPage'

function App() {
  const [pantalla, setPantalla] = useState('deposito')

  const renderizarPantalla = () => {
    if (pantalla === 'saldo') {
      return <SaldoPage />
    }

    if (pantalla === 'credito') {
      return <CreditoPage />
    }

    return <DepositoPage />
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-blue-900 px-4 py-4 text-white shadow-md">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-xl font-bold">
              Sistema de Cajas de Ahorro
            </h1>

            <p className="text-sm text-blue-200">
              Gestión de depósitos, saldos y créditos
            </p>
          </div>

          <nav className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setPantalla('deposito')}
              className={`rounded-lg px-4 py-2 font-semibold transition ${
                pantalla === 'deposito'
                  ? 'bg-white text-blue-900'
                  : 'bg-blue-800 text-white hover:bg-blue-700'
              }`}
            >
              Depósito
            </button>

            <button
              type="button"
              onClick={() => setPantalla('saldo')}
              className={`rounded-lg px-4 py-2 font-semibold transition ${
                pantalla === 'saldo'
                  ? 'bg-white text-blue-900'
                  : 'bg-blue-800 text-white hover:bg-blue-700'
              }`}
            >
              Saldo
            </button>

            <button
              type="button"
              onClick={() => setPantalla('credito')}
              className={`rounded-lg px-4 py-2 font-semibold transition ${
                pantalla === 'credito'
                  ? 'bg-white text-blue-900'
                  : 'bg-blue-800 text-white hover:bg-blue-700'
              }`}
            >
              Crédito
            </button>
          </nav>
        </div>
      </header>

      {renderizarPantalla()}
    </div>
  )
}

export default App
