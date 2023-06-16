import { AtividadeOutput } from "../AtividadeOutput"
import { AtualizarAtividadeDB } from "../../../../Core/Repositorios/AtividadesRep"
import { Atividade } from "../../../../domains/models/implementacao/Atividade"

export async function AtualizarAtividade(
  pInput: Atividade
): Promise<AtividadeOutput> {
  const atividadeDB = await AtualizarAtividadeDB(pInput)
  return new AtividadeOutput(atividadeDB)
}
