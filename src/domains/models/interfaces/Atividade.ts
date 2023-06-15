export interface IAtividade {
  id: number
  descricao: string
  concluido: boolean
  dataCriacao: Date
  dataConclusao: Date | null
}
