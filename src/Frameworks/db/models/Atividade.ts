import { Model, DataTypes } from "sequelize"
import { sequelize } from "../config/database"
class Atividade extends Model {}

Atividade.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    descricao: DataTypes.TEXT,
    concluido: DataTypes.BOOLEAN,
    dataCriacao: DataTypes.DATE,
    dataConclusao: DataTypes.DATE,
  },
  {
    tableName: "atividade",
    timestamps: false,
    sequelize,
  }
)

export default Atividade
