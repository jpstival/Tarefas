import { Atividade } from "../../../../domains/models/implementacao/Atividade"
import { ListarAtividadeById } from "../../../../Core/Repositorios/AtividadesRep"
import { Request } from "express"

export async function AtualizarAtividadeInput(
  pRequest: Request
): Promise<Atividade> {
  if (
    !Number.isInteger(Number(pRequest.body.id)) ||
    Number(pRequest.body.id) === 0
  ) {
    throw new Error("Identificador de atividade não enviado ou invalido!")
  } else {
    const atividadeEncontrada = await ListarAtividadeById(pRequest.body.id)
    if (atividadeEncontrada === null) {
      throw new Error("Atividade não localizada para atualização!")
    } else {
      const atividade = new Atividade(pRequest.body)
      return atividade
    }
  }
}
