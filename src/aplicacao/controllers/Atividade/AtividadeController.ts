import { CriarAtividade } from "domains/UseCases/Atividade/Criar/CriarAtividade"
import { CriarAtividadeInput } from "domains/UseCases/Atividade/Criar/CriarAtividadeInput"
import { Request, Response } from "express"

export async function CriarAtividadeController(
  pRequest: Request,
  pResponse: Response
): any {
  const input = new CriarAtividadeInput(pRequest)
  const atividade = CriarAtividade(input)
  console.log(atividade)
  pResponse.status(200).json(atividade)
}
