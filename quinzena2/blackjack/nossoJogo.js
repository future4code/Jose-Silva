/* // EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
   console.log("Olá Usuário, Bem-vindo ao BlackJack!");

   const carta1Usuario = comprarCarta();
   const carta2Usuario = comprarCarta();
   const carta1Pc = comprarCarta();
   const carta2Pc = comprarCarta();

   if(confirm("Quer iniciar uma nova rodada?")){
    console.log(`Usuario - cartas: ${carta1Usuario.texto} e ${carta2Usuario.texto}`)+
     console.log("Pontuação: " + (carta1Usuario.valor + carta2Usuario.valor)) +
    console.log(`Computador - cartas: ${carta1Pc.texto} e ${carta2Pc.texto}`) +
    console.log("Pontuação: " + (carta1Pc.valor + carta2Pc.valor)) 

    if((carta1Usuario.valor + carta2Usuario.valor) > 
      (carta1Pc.valor + carta2Pc.valor)){
         console.log("Úsuario Venceu")
      }else if((carta1Usuario.valor + carta2Usuario.valor) < 
      (carta1Pc.valor + carta2Pc.valor)){
         console.log("PC Venceu")
      } else {
         console.log("Empate")
      } 
      
   } else {
    console.log("O jogo acabou!");
   }

       */