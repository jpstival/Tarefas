import AtividadeDB from "../../Frameworks/db/models/Atividade"
import { Atividade } from "../../domains/models/implementacao/Atividade"

//Lista todas as atividades
export const TodasAtividadesGet = async () => {
  const atividadeListFromDB = await AtividadeDB.findAll()
  return atividadeListFromDB
}

/*
 * Cria uma nova atividade no banco
 */
export const CriarAtividadePost = async (
  atividade: Atividade
): Promise<Atividade> => {
  const atividadeIncluida = await AtividadeDB.create({
    descricao: atividade.descricao,
    concluido: false,
    dataCriacao: new Date(),
    dataConclusao: null,
  })

  return atividadeIncluida.dataValues
}

export const ListarAtividadeById = async (id: string): Promise<Atividade> => {
  const atividadeDB = await AtividadeDB.findOne({
    where: {
      id: id,
    },
  })
  return atividadeDB ? atividadeDB.dataValues : null
}

export const DeletarAtividadeById = async (id: number) => {
  const atividadeDB = await AtividadeDB.destroy({
    where: {
      id: id,
    },
  })
  return atividadeDB
}

export const AtualizarAtividadeDB = async (atividade: Atividade) => {
  console.log(atividade.id)
  console.log(atividade.descricao)
  await AtividadeDB.update(
    {
      descricao: atividade.descricao,
    },
    {
      where: {
        id: atividade.id,
      },
    }
  )
  return ListarAtividadeById(atividade.id.toString())
}

// export const getAtividadeDBFiltro = async (req: Request, res: Response) => {
//   const { condition } = req.params
//   const AtividadeDBListFromDB = await AtividadeDB.findAll({
//     where: {
//       concluido: condition,
//     },
//   })
//   return res.send(AtividadeDBListFromDB)
// }

// export const postAtividadeDB = async (req: Request, res: Response) => {
//   await AtividadeDB.create({
//     descricao: req.body.desc,
//     concluido: false,
//     dataCriacao: new Date(),
//     dataConclusao: null,
//   })
//   return getAtividadeDBList(res)
// }

// export const putAtividadeDB = async (req: Request, res: Response) => {
//   const { id } = req.params
//   await AtividadeDB.update(
//     {
//       descricao: req.body.desc,
//     },
//     {
//       where: {
//         id: id,
//       },
//     }
//   )
//   return getAtividadeDB(id, res)
// }

// export const putAtividadeDBConcluida = async (req: Request, res: Response) => {
//   const { id } = req.params
//   await AtividadeDB.update(
//     {
//       concluido: true,
//       dataConclusao: new Date(),
//     },
//     {
//       where: {
//         id: id,
//       },
//     }
//   )
//   return getAtividadeDB(id, res)
// }
