import { Atividade } from "domains/models/implementacao/Atividade"
import { DeletarAtividadeById } from "../../../../Core/Repositorios/AtividadesRep"

export async function DeletarAtividades(atividade: Atividade) {
  const deletedRows = await DeletarAtividadeById(atividade.id)
  return deletedRows
}
