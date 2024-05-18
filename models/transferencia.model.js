import { pool } from "../database/connection.database.js"

const findCuentaId = async (id) => {
    const query = {
        text: `
        SELECT * FROM TRANSFERENCIAS 
        WHERE 
        cuenta_origen = $1
        OR cuenta_destino = $1
        LIMIT 10
        `,
        values: [id]
    }
    const { rows } = await pool.query(query)
    return rows
}

export const TransferenciaModel = {
    findCuentaId
}