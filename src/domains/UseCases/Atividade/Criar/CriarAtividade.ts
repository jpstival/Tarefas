import { CriarAtividadeInput } from "./CriarAtividadeInput"
import { CriarAtividadePost } from "../../../../Core/Repositorios/AtividadesRep"
import { Atividade } from "../../../models/implementacao/Atividade"
import { AtividadeOuput } from "../AtividadeOutput"

export async function CriarAtividade(
  pInput: CriarAtividadeInput
): Promise<AtividadeOuput> {
  const NovaAtividade = new Atividade({ descricao: pInput.descricao })
  const atividadeDB = await CriarAtividadePost(NovaAtividade)
  return new AtividadeOuput(atividadeDB)
}
