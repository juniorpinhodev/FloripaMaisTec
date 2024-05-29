function calculo_imposto_renda(grossPay) {
    let IR = 0

    if (grossPay <= 2112.00) {
        IR = 0
    } else if (grossPay >= 2112.01 && grossPay <= 2826.65) {
        IR = grossPay * 0.075 - 158.40
    } else if (grossPay >= 2826.66 && grossPay <= 3751.05) {
        IR = grossPay * 0.15 - 370.40
    } else if (grossPay >= 3751.06 && grossPay <= 4664.68) {
        IR = grossPay * 0.225 - 651.73
    } else {
        IR = grossPay * 0.275 - 884.96
    }

    return IR
}

module.exports = calculo_imposto_renda