import * as express from "express"
import route from "./Frameworks/express/Routes/AtividadesRoutes"

const app = express()
app.use(express.json())

app.use("/Atividade/", route)

app.listen(3333, () => "server running on port 3333")

export default app
