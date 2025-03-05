import { Router } from "express";

const router = Router();

let pessoas = [
    {nome: "Breno", idade: 31},
    {nome: "Samara", idade: 28},
    {nome: "Sôfia", idade: 0.7},
]

router.get("/", (req, res) => {
    res.status(200).send(pessoas)
})

router.post("/", (req, res) => {
    const novaPessoa = {nome: req.body.nome, idade:+req.body.idade};
    pessoas.push(novaPessoa)
    res.status(201).send(pessoas)
})

router.delete("/:id", (req, res) => {
    const indice = +req.params.id
    const dadosAtualizados = pessoas.filter((pessoas, i) => i !== indice)
    if(dadosAtualizados.length === pessoas.length){
        res.status(406).send(pessoas)
    } else {
        pessoas = [...dadosAtualizados]
        res.status(200).send(pessoas)
    }
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