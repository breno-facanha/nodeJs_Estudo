import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    res.send("Aqui existem produtos")
})

router.get("/cozinha", (req, res) => {
    const prods = ["Colher", "Garfo", "Panela", "Detergente"]
    res.send(prods)
})

router.get("/banheiro", (req, res) => {
    const prods = ["Sabonete", "Shampoo", "Escova de Dentes", "Pasta"]
    res.send(prods)
})

export default router