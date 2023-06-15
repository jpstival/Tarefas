import moment = require("moment")

export function DataFormatada(data: Date, formato: string) {
  let dataFormatada = moment(data).format("DD/MM/YYYY HH:mm")
  if (!!formato === true) {
    dataFormatada = moment(data).format(formato)
  }
  return dataFormatada
}
