import { AtividadeOuput } from "../AtividadeOutput"

export class ListarTodasAtividadesOutput {
  public atividades: object[] = []

  constructor(ArrayAtividade: any) {
    for (let index = 0; index < ArrayAtividade.length; index++) {
      const atividade = new AtividadeOuput(ArrayAtividade[index])
      this.atividades.push(atividade)
    }
  }
}
