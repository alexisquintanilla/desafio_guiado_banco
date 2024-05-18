import { TransferenciaModel } from "../models/transferencia.model.js";

const getTransferenciasById = async (req, res) => {
    try {
        const { id } = req.params
        const transferencias = await TransferenciaModel.findCuentaId(id)
        return res.json(transferencias)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

export const TransferenciaController = {
    getTransferenciasById
}