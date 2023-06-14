import { Request, Response } from "express"
import AtividadeDB from "../../Frameworks/db/models/Atividade"
import { Atividade } from "domains/models/implementacao/Atividade"

export const getAtividadeDBList = async (res: Response) => {
  const AtividadeDBListFromDB = await AtividadeDB.findAll()
  return res.send(AtividadeDBListFromDB)
}

export const getAtividadeDBFiltro = async (req: Request, res: Response) => {
  const { condition } = req.params
  const AtividadeDBListFromDB = await AtividadeDB.findAll({
    where: {
      concluido: condition,
    },
  })
  return res.send(AtividadeDBListFromDB)
}

export const getAtividadeDB = async (id: string, res: Response) => {
  const AtividadeDBListFromDB = await AtividadeDB.findOne({
    where: {
      id: id,
    },
  })
  return res.send(AtividadeDBListFromDB)
}

export const criarAtividade = async (atividade: Atividade) => {
  const atividadeIncluida = await AtividadeDB.create({
    descricao: atividade.descricao,
    concluido: false,
    dataCriacao: new Date(),
    dataConclusao: null,
  })
  return atividadeIncluida
}
export const postAtividadeDB = async (req: Request, res: Response) => {
  await AtividadeDB.create({
    descricao: req.body.desc,
    concluido: false,
    dataCriacao: new Date(),
    dataConclusao: null,
  })
  return getAtividadeDBList(res)
}

export const putAtividadeDB = async (req: Request, res: Response) => {
  const { id } = req.params
  await AtividadeDB.update(
    {
      descricao: req.body.desc,
    },
    {
      where: {
        id: id,
      },
    }
  )
  return getAtividadeDB(id, res)
}

export const putAtividadeDBConcluida = async (req: Request, res: Response) => {
  const { id } = req.params
  await AtividadeDB.update(
    {
      concluido: true,
      dataConclusao: new Date(),
    },
    {
      where: {
        id: id,
      },
    }
  )
  return getAtividadeDB(id, res)
}

export const deleteAtividadeDB = async (req: Request, res: Response) => {
  const { id } = req.params
  await AtividadeDB.destroy({
    where: {
      id: id,
    },
  })
  return getAtividadeDBList(res)
}
