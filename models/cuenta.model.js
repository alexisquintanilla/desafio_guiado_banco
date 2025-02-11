import { pool } from "../database/connection.database.js";

const findOneById = async (id) => {

    const query = {
        text: `
            SELECT * FROM CUENTAS WHERE ID = $1
        `,
        values: [id]
    }

    const { rows } = await pool.query(query)
    return rows[0]
}

export const CuentaModel = {
    findOneById
}