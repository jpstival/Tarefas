import { TodasAtividadesGet } from "../../../../Core/Repositorios/AtividadesRep"
import { ListarTodasAtividadesOutput } from "./ListarTodasAtividadesOutput"

export async function TodasAtividades(): Promise<any> {
  const todasAtividades = await TodasAtividadesGet()
  return new ListarTodasAtividadesOutput(todasAtividades)
}
