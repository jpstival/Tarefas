import AtividadeDb from "Frameworks/db/models/Atividade"
import { CriarAtividadeInput } from "./CriarAtividadeInput"
import { criarAtividade } from "Core/Repositorios/AtividadesRep"
import { Atividade } from "domains/models/implementacao/Atividade"

export async function CriarAtividade(
  pInput: CriarAtividadeInput
): Promise<AtividadeDb> {
  const NovaAtividade = new Atividade({ descricao: pInput.descricao })
  const AtividadeDB = await criarAtividade(NovaAtividade)
  return AtividadeDB
}
