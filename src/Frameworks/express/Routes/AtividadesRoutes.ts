import {
  CriarAtividadeController,
  ListarTodasAtividadesController,
  DeletarAtividadeController,
} from "../../../aplicacao/controllers/Atividade/AtividadeController"
import { Request, Response, Router } from "express"

const routes = Router()

routes.get("/", (_, res: Response) => {
  ListarTodasAtividadesController(res)
})

routes.post("/", (req: Request, res: Response) => {
  CriarAtividadeController(req, res)
})

routes.delete("/deleta/:id", (req: Request, res: Response) => {
  DeletarAtividadeController(req, res)
})

// routes.get("/filtro/:condition", (req, res) => {
//   getAtividadeFiltro(req, res)
// })

// routes.get("/busca/:id", (req, res) => {
//   const id = req.params.id
//   getAtividade(id, res)
// })

// routes.post("/", (req, res) => {
//   postAtividade(req, res)
// })

// routes.put("/atualiza/:id", (req, res) => {
//   putAtividade(req, res)
// })

// routes.put("/conclui/:id", (req, res) => {
//   putAtividadeConcluida(req, res)
// })

// routes.delete("/deleta/:id", (req, res) => {
//   deleteAtividade(req, res)
// })

export default routes
