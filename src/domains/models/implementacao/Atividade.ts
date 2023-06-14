import { IAtividade } from "../interfaces/Atividade"

export class Atividade implements IAtividade {
  public descricao = ""
  public concluido = false
  public dataCriacao = new Date()
  public dataConclusao: Date | null = null

  constructor(pValues?: Partial<IAtividade>) {
    if (pValues === undefined) {
      return
    }
    this.descricao = pValues.descricao ? pValues.descricao : this.descricao
    this.concluido = pValues.concluido ? pValues.concluido : this.concluido
    this.dataCriacao = pValues.dataCriacao
      ? pValues.dataCriacao
      : this.dataCriacao
    this.dataConclusao = pValues.dataConclusao
      ? pValues.dataConclusao
      : this.dataConclusao
  }
}
