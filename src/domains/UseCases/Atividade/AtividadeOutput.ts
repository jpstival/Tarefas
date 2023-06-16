import { Atividade } from "domains/models/implementacao/Atividade"
import { DataFormatada } from "../../../Core/Utilitarios/TratarData"

export class AtividadeOutput {
  public id_atividade: number
  public tarefa: string
  public status: string
  public criacao: string
  public conclusao: string | null

  constructor(atividade: Atividade) {
    this.id_atividade = atividade.id
    this.tarefa = atividade.descricao
    this.status = atividade.concluido ? "Conluído" : "Aguardando"
    this.criacao = DataFormatada(new Date(atividade.dataCriacao), "")
    this.conclusao = atividade.dataConclusao
      ? DataFormatada(new Date(atividade.dataConclusao), "")
      : null
  }
}
