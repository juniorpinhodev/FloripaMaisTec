// Crie uma função que receba o valor de uma hora qualquer, e exibe no console uma mensagem de “bom dia”, “boa tarde” ou “boa noite”, de acordo com a hora passada.

function saudacao(hora) {
    if (hora >= 6 && hora < 12) {
      console.log("Bom dia!");
    } else if (hora >= 12 && hora < 18) {
      console.log("Boa tarde!");
    } else {
      console.log("Boa noite!");
    }
  }

  saudacao(8);
  
  
  //Neste outro eu utilizei new Date() para puxar a hora atual.
  function saudacao(hora) {
    if (hora >= 6 && hora < 12) {
      console.log("Bom dia!");
    } else if (hora >= 12 && hora < 18) {
      console.log("Boa tarde!");
    } else {
      console.log("Boa noite!");
    }
  }
  
  let horaAtual = new Date().getHours();
  saudacao(horaAtual);