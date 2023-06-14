import { Router } from "express"
import {
  deleteAtividade,
  getAtividade,
  getAtividadeFiltro,
  getAtividadeList,
  postAtividade,
  putAtividade,
  putAtividadeConcluida,
} from "../Core/Repositorios/AtividadesRep"

const routes = Router()

routes.get("/", (req, res) => {
  getAtividadeList(res)
})

routes.get("/filtro/:condition", (req, res) => {
  getAtividadeFiltro(req, res)
})

routes.get("/busca/:id", (req, res) => {
  const id = req.params.id
  getAtividade(id, res)
})

routes.post("/", (req, res) => {
  postAtividade(req, res)
})

routes.put("/atualiza/:id", (req, res) => {
  putAtividade(req, res)
})

routes.put("/conclui/:id", (req, res) => {
  putAtividadeConcluida(req, res)
})

routes.delete("/deleta/:id", (req, res) => {
  deleteAtividade(req, res)
})

export default routes
