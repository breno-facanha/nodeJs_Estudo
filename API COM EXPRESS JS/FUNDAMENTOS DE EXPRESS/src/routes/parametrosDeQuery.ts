import { Router } from "express";

const router = Router();

router.get("/cores", (req, res) => {
    let cores = ["Azul", "Vermelho", "Amarelo"]

    if(req.query.case === "upper"){
        cores = cores.map(cor => cor.toUpperCase())
    }

    if(req.query.case === "lower"){
        cores = cores.map(cor => cor.toLowerCase())
    }

    if(req.query.punct){
        cores = cores.map(cor => `${cor} ${req.query.punct}`)
    }

    if(req.query.filtro){
        cores = cores.filter( cor => cor.toLowerCase().includes(`${req.query.filtro}`))
    }

    if(req.query.ordem === 'asc'){
        cores.sort()
    }
    
    if(req.query.ordem === 'desc'){
        cores.sort().reverse()
    }

    res.status(200).send(cores)
})

export default router