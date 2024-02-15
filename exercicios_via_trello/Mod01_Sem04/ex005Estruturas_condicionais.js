function verificarNumero(numero) {

    if (numero > 0) {
      console.log(`O número ${numero} é positivo.`);
    } else if (numero < 0) {
      console.log(`O número ${numero} é negativo.`);
    } else {
      console.log(`O número ${numero} é zero.`);
    }
  }
  
  verificarNumero(7);
  verificarNumero(-4);
  verificarNumero(0);