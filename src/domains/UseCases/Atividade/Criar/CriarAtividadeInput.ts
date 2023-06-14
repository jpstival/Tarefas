import { Request } from "express"

export class CriarAtividadeInput {
  public descricao = ""

  constructor(pRequest: Request) {
    this.descricao = pRequest.body.descricao
    if (!!this.descricao === false) {
      throw new Error("Descrição não pode ser vazia1")
    }
  }
}
