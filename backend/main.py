from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Sistema de Cajas de Ahorro API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

socios = {
    125: {"nombre": "Socio de prueba", "saldo": 1000.00},
    1025: {"nombre": "Juan Pérez", "saldo": 1500.00},
}

contador_transacciones = 3000
contador_creditos = 5000

class DepositoRequest(BaseModel):
    idSocio: int
    monto: float
    descripcion: str = ""

class CreditoRequest(BaseModel):
    idSocio: int
    montoSolicitado: float
    plazoMeses: int
    motivo: str

@app.get("/")
def inicio():
    return {"mensaje": "API del Sistema de Cajas de Ahorro funcionando"}

@app.post("/api/transacciones/deposito")
def registrar_deposito(datos: DepositoRequest):
    global contador_transacciones

    if datos.idSocio not in socios:
        raise HTTPException(status_code=404, detail="Socio no encontrado")

    if datos.monto <= 0:
        raise HTTPException(status_code=400, detail="El monto debe ser mayor que cero")

    socios[datos.idSocio]["saldo"] += datos.monto
    contador_transacciones += 1

    return {
        "mensaje": "Depósito registrado correctamente",
        "idTransaccion": contador_transacciones,
        "nuevoSaldo": socios[datos.idSocio]["saldo"],
    }

@app.get("/api/socios/{idSocio}/saldo")
def consultar_saldo(idSocio: int):
    if idSocio not in socios:
        raise HTTPException(status_code=404, detail="Socio no encontrado")

    return {
        "idSocio": idSocio,
        "nombre": socios[idSocio]["nombre"],
        "saldoDisponible": socios[idSocio]["saldo"],
    }

@app.post("/api/creditos/solicitud")
def solicitar_credito(datos: CreditoRequest):
    global contador_creditos

    if datos.idSocio not in socios:
        raise HTTPException(status_code=404, detail="Socio no encontrado")

    if datos.montoSolicitado <= 0:
        raise HTTPException(status_code=400, detail="El monto solicitado debe ser mayor que cero")

    if datos.plazoMeses < 1 or datos.plazoMeses > 60:
        raise HTTPException(status_code=400, detail="El plazo debe estar entre 1 y 60 meses")

    contador_creditos += 1

    return {
        "mensaje": "Solicitud de crédito registrada correctamente",
        "idSolicitud": contador_creditos,
        "estado": "Pendiente",
    }