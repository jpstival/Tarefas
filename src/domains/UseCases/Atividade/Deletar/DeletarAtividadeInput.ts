import { ListarAtividadeById } from "../../../../Core/Repositorios/AtividadesRep"
import { Request } from "express"

export async function DeletarAtividadeInput(pRequest: Request) {
  if (
    !Number.isInteger(Number(pRequest.params.id)) ||
    Number(pRequest.params.id) === 0
  ) {
    throw new Error("Identificador de atividade não enviado ou invalido!")
  } else {
    const atividadeEncontrada = await ListarAtividadeById(pRequest.params.id)
    if (atividadeEncontrada === null) {
      throw new Error("Atividade não localizada para exclusão!")
    } else {
      return atividadeEncontrada
    }
  }
}
