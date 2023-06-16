import { TodasAtividades } from "../../../domains/UseCases/Atividade/Listar/ListarTodasAtividades"
import { CriarAtividade } from "../../../domains/UseCases/Atividade/Criar/CriarAtividade"
import { CriarAtividadeInput } from "../../../domains/UseCases/Atividade/Criar/CriarAtividadeInput"
import { Request, Response } from "express"
import { DeletarAtividadeInput } from "../../../domains/UseCases/Atividade/Deletar/DeletarAtividadeInput"
import { DeletarAtividades } from "../../../domains/UseCases/Atividade/Deletar/DeletarAtividade"
import { AtualizarAtividadeInput } from "../../../domains/UseCases/Atividade/Atualizar/AtualizarAtividadeInput"
import { AtualizarAtividade } from "../../../domains/UseCases/Atividade/Atualizar/AtualizarAtividade"

export async function ListarTodasAtividadesController(
  pResponse: Response
): Promise<Response> {
  const listaAtividades = await TodasAtividades()
  return pResponse.send(listaAtividades.atividades)
}

export async function CriarAtividadeController(
  pRequest: Request,
  pResponse: Response
): Promise<Response> {
  try {
    const input = new CriarAtividadeInput(pRequest)
    const atividade = await CriarAtividade(input)
    return pResponse.json(atividade)
  } catch (error: any) {
    if (error) {
      return pResponse.status(400).send(error.message)
    } else {
      return pResponse.status(500).send("Ocorreu um erro inesperado")
    }
  }
}

export async function DeletarAtividadeController(
  pRequest: Request,
  pResponse: Response
): Promise<Response> {
  try {
    const input = await DeletarAtividadeInput(pRequest)
    const output = await DeletarAtividades(input)
    if (output > 0) {
      return pResponse.status(200).send(output + " atividade foi removida.")
    } else {
      return pResponse
        .status(400)
        .send(output + "Nenhuma atividade foi removida.")
    }
  } catch (error: any) {
    if (error) {
      return pResponse.status(400).send(error.message)
    } else {
      return pResponse.status(500).send("Ocorreu um erro inesperado")
    }
  }
}

export async function AtualizarAtividadeController(
  pRequest: Request,
  pResponse: Response
): Promise<Response> {
  try {
    const input = await AtualizarAtividadeInput(pRequest)
    const atividade = await AtualizarAtividade(input)
    return pResponse.json(atividade)
  } catch (error: any) {
    if (error) {
      return pResponse.status(400).send(error.message)
    } else {
      return pResponse.status(500).send("Ocorreu um erro inesperado")
    }
  }
}
