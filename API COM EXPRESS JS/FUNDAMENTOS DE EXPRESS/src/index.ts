import express from "express"
import rotasBasico from "./routes/basico"
import rotasDiferentesRetornos from "./routes/diferentesRetornos"
import rotasAninhadas from "./routes/rotasAninhadas"
import statusHttp from "./routes/status"
import parametrosDeRota from "./routes/parametrosDeRota"
import parametrosDeQuery from "./routes/parametrosDeQuery"
import metodo from "./routes/metodos"
const port = 3000
const app = express()

//middleware
// app.use( (req, res, next) => {
//     console.log(`Data: ${Date.now()}`)
//     next();
// })

//middleware para a leitura do body da requisição
app.use(express.urlencoded({extended: true}))

app.use(rotasBasico)
app.use(rotasDiferentesRetornos)
app.use("/produtos", rotasAninhadas)
app.use(statusHttp)
app.use(parametrosDeRota)
app.use(parametrosDeQuery)
app.use("/metodos", metodo)






app.listen(port, () => `Servidor rodando na porta ${port}`)