import Atividade from "../../Frameworks/db/models/Atividade"

export const getAtividadeList = async (res: any) => {
  const AtividadeListFromDB = await Atividade.findAll()
  return res.send(AtividadeListFromDB)
}

export const getAtividadeFiltro = async (req: any, res: any) => {
  const { condition } = req.params
  const AtividadeListFromDB = await Atividade.findAll({
    where: {
      concluido: condition,
    },
  })
  return res.send(AtividadeListFromDB)
}

export const getAtividade = async (id: number, res: any) => {
  const AtividadeListFromDB = await Atividade.findOne({
    where: {
      id: id,
    },
  })
  return res.send(AtividadeListFromDB)
}

export const postAtividade = async (req: any, res: any) => {
  await Atividade.create({
    descricao: req.body.desc,
    concluido: false,
    dataCriacao: new Date(),
    dataConclusao: null,
  })
  return getAtividadeList(res)
}

export const putAtividade = async (req: any, res: any) => {
  const { id } = req.params
  await Atividade.update(
    {
      descricao: req.body.desc,
    },
    {
      where: {
        id: id,
      },
    }
  )
  return getAtividade(id, res)
}

export const putAtividadeConcluida = async (req: any, res: any) => {
  const { id } = req.params
  await Atividade.update(
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
  return getAtividade(id, res)
}

export const deleteAtividade = async (req: any, res: any) => {
  const { id } = req.params
  await Atividade.destroy({
    where: {
      id: id,
    },
  })
  return getAtividadeList(res)
}
