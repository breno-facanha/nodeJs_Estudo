import { Router } from "express";

const router = Router();

router.get("/ok", (req, res) => {
    res.sendStatus(200)
})
router.get("/segredo", (req, res) => {
    res.status(401).send("Não autorizado")
})

export default router