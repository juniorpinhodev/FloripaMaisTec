const calcINSS = require('./calculo_inss')
const calcIR = require('./calculo_imposto_renda')

function calculo_salario_liquido(grossPay) {

  const valueINSS = calcINSS(grossPay)
  const valueIR = calcIR(grossPay)
  const otherDiscounts = 0
  const liquidPay = Number(grossPay - valueINSS - valueIR - otherDiscounts).toFixed(2)

  return liquidPay
}

module.exports = calculo_salario_liquido