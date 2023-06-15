import { CriarAtividadeInput } from "./CriarAtividadeInput"
import { criarAtividade } from "../../../../Core/Repositorios/AtividadesRep"
import { Atividade } from "../../../models/implementacao/Atividade"
import { CriarAtividadeOuput } from "./CriarAtividadeOutput"

export async function CriarAtividade(
  pInput: CriarAtividadeInput
): Promise<CriarAtividadeOuput> {
  const NovaAtividade = new Atividade({ descricao: pInput.descricao })
  const atividadeDB = await criarAtividade(NovaAtividade)
  return new CriarAtividadeOuput(atividadeDB)
}
