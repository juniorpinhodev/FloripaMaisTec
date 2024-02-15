//Use um switch para exibir mensagens diferentes com base em uma condição.

function escolherSaborPizza(numero) {
    switch (numero) {
      case 1:
        console.log("Você escolheu pizza de calabresa!");
        break;
      case 2:
        console.log("Você escolheu pizza de marguerita!");
        break;
      case 3:
        console.log("Você escolheu pizza de frango com catupiry!");
        break;
      case 4:
        console.log("Você escolheu pizza vegetariana!");
        break;
      default:
        console.log("Sabor de pizza inválido. Escolha entre 1 e 4.");
    }
  }
  
  escolherSaborPizza(1);