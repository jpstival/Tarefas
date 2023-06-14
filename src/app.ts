import * as express from "express"
import route from "./Frameworks/routes"

const app = express()
app.use(express.json())

app.use("/", route)
// app.get("/", (req, res) => {
//   res.status(200).json({
//     ok: true,
//     msg: "hi from my method",
//   })
// })

app.listen(3333, () => "server running on port 3333")

export default app
