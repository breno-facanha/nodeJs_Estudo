import path from "path"
import { Router } from "express"

const router = Router()
router.get("/teste", (req, res) => {
    res.json(123)
})

router.get("/objeto", (req, res) => {
    const obj = [
    {
        id: 1,
        name: "Breno",
        email: "breno@gmail.com"
    },
    {
        id: 2,
        name: "Breno2",
        email: "breno2@gmail.com"
    },

]
    res.json(obj)
    console.log('acessando pagina objeto')
})

router.get("/pagina", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "/", "assests", "pagina.html"))
    
})

export default router;