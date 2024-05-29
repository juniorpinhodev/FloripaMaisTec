function calculo_inss(grossPay) {
    const CEILING = 908.85;
    let inss = 0;
  
    if (grossPay <= 1412) {
      inss = grossPay * (7.5 / 100);
    } else if (grossPay >= 1412.01 && grossPay <= 2666.68) {
      inss = grossPay * (9 / 100);
    } else if (grossPay >= 2666.69 && grossPay <= 4000.03) {
      inss = grossPay * (12 / 100);
    } else {
      inss = grossPay * (14 / 100);
    }
  
    if (inss >= CEILING) inss = CEILING;
  
    return inss;
  }
  
  module.exports = calculo_inss;