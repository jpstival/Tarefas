import { Atividade } from "domains/models/implementacao/Atividade"

export class CriarAtividadeOuput {
  public id_atividade: number
  public tarefa: string
  public status: boolean
  public criacao: Date
  public conclusao: Date | null

  constructor(atividade: Atividade) {
    this.id_atividade = atividade.id
    this.tarefa = atividade.descricao
    this.status = atividade.concluido
    this.criacao = new Date(atividade.dataCriacao)
    this.conclusao = atividade.dataConclusao
      ? new Date(atividade.dataConclusao)
      : null
  }
}
