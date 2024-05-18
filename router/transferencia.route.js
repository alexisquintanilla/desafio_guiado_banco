import { Router } from "express";
import { TransferenciaController } from "../controllers/transferencia.controller.js";

const router = Router()

router.get('/:id', TransferenciaController.getTransferenciasById)

export default router;