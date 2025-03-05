import { Router } from "express"

const router = Router()

router.get("/home", (req, res) => {
    res.send("<h1>Olá mundo</h1>")
    console.log('acessando pagina home')
})

export default router;