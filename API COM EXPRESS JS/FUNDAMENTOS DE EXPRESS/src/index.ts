import express from "express"
import rotasBasico from "./routes/basico"
import rotasDiferentesRetornos from "./routes/diferentesRetornos"
import rotasAninhadas from "./routes/rotasAninhadas"
import statusHttp from "./routes/status"
import parametrosDeRota from "./routes/parametrosDeRota"
import parametrosDeQuery from "./routes/parametrosDeQuery"
const port = 3000
const app = express()

//middleware
// app.use( (req, res, next) => {
//     console.log(`Data: ${Date.now()}`)
//     next();
// })

app.use(rotasBasico)
app.use(rotasDiferentesRetornos)
app.use("/produtos", rotasAninhadas)
app.use(statusHttp)
app.use(parametrosDeRota)
app.use(parametrosDeQuery)






app.listen(port, () => `Servidor rodando na porta ${port}`)