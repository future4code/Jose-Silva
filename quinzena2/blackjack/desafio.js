console.log("Olá Usuário, Bem-vindo ao BlackJack!");

let carta1Usuario = comprarCarta();
let novaCartaUsuario = comprarCarta();
let carta1Pc = comprarCarta();
let carta2Pc = comprarCarta();
let novaCartaPc = comprarCarta();

let pontuacaoUsuario = carta1Usuario.valor + novaCartaUsuario.valor;
let pontuacaoPc = carta1Pc.valor + carta2Pc.valor;



if((carta1Usuario.value + novaCartaUsuario.value) == 22 || 
(carta1Pc.value + carta2Pc.value) == 22 ) {
   console.log(`@Usuario - Cartas iniciais: ${carta1Usuario.texto} e ${novaCartaUsuario.texto}`)+
   console.log(`#PC cartas iniciais: ${carta1Pc.texto} e ${carta2Pc.texto}`) 

confirm("Quer iniciar uma nova rodada?")
console.log(" Press 'F5'!!!  Sorteie novamente")
}
else if (confirm("Quer iniciar uma nova rodada?")){
 console.log(`@Usuario - Cartas iniciais: ${carta1Usuario.texto} e ${novaCartaUsuario.texto}`)+
  console.log("Total Usuario:", pontuacaoUsuario) +
 console.log(`#PC - Carta1 : ${carta1Pc.texto}`) 


 while(pontuacaoUsuario < 22 && confirm("Quer comprar mais uma carta?")){

      novaCartaUsuario = comprarCarta();
      pontuacaoUsuario+=novaCartaUsuario.valor 
      console.log("Nova Carta comprada Usuario:", novaCartaUsuario.texto , novaCartaUsuario.valor)
      console.log("Total Usuário:", pontuacaoUsuario)

   
 } if(pontuacaoUsuario > 21){
   console.log("Usuario Perdeu")
 } else {
      while (pontuacaoPc <= 21 && pontuacaoPc < pontuacaoUsuario){
      if(pontuacaoPc <= 21){
      novaCartaPc = comprarCarta();
      pontuacaoPc+=novaCartaPc.valor;
      console.log(`#PC cartas iniciais: ${carta1Pc.texto} e ${carta2Pc.texto}`) 
      console.log("Nova carta comprada Pc:",  novaCartaPc.texto )
      console.log("Total PC:", pontuacaoPc) 
   }
   }
}

      


      
     
 
   /* 
   
      } */
         
  
  

  if(pontuacaoUsuario > pontuacaoPc && pontuacaoUsuario < 22 || pontuacaoPc > 21){
      console.log("Úsuario Venceu")

   }else if(pontuacaoUsuario > 21 || pontuacaoPc > pontuacaoUsuario) 
   {
      console.log(`#PC cartas iniciais: ${carta1Pc.texto} e ${carta2Pc.texto}`) 

      console.log("PC venceu ")

   } else {
      console.log(`#PC cartas iniciais: ${carta1Pc.texto} e ${carta2Pc.texto}`) 

      console.log("Empate")

   } 
    
} else {
 console.log("O jogo acabou!");
}

   
