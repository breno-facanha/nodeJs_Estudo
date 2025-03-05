import { Router } from "express";

const router = Router();

const pessoas = [
    {nome: "Breno", idade: 31},
    {nome: "Samara", idade: 28},
    {nome: "Sôfia", idade: 0.7},
]

router.get("/", (req, res) => {
    res.status(200).send(pessoas)
})



router.get("/:id", (req, res) => {
    const indice = +req.params.id
    if(indice >= 0 && indice < pessoas.length){
        res.status(200).send(pessoas[indice])
    }else{
        res.status(204).send(pessoas)
    }
})

export default router;