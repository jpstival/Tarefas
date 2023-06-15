import { CriarAtividade } from "../../../domains/UseCases/Atividade/Criar/CriarAtividade"
import { CriarAtividadeInput } from "../../../domains/UseCases/Atividade/Criar/CriarAtividadeInput"
import { Request, Response } from "express"

export async function CriarAtividadeController(
  pRequest: Request,
  pResponse: Response
): Promise<Response> {
  const input = new CriarAtividadeInput(pRequest)
  const atividade = await CriarAtividade(input)
  return pResponse.json(atividade)
}
