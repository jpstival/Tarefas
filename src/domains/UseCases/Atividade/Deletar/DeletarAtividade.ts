import { Atividade } from "domains/models/implementacao/Atividade"
import { deletarAtividadeById } from "../../../../Core/Repositorios/AtividadesRep"

export async function DeletarAtividades(atividade: Atividade) {
  const deletedRows = await deletarAtividadeById(atividade.id)
  return deletedRows
}
