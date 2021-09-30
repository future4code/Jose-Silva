console.log("Olá Usuário, Bem-vindo ao BlackJack!");
const carta = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
console.log("Cartas e valores:")
for(let i = 0; i < carta.length; i++) {
   if (carta[i] === "A") {
      valor = 11
    } else if (carta[i]  === "J" || carta[i]  === "Q" ||carta[i]  === "K") {
      valor = 10
    } else { // Se nao for uma das letras, só converte a string para número
      valor = Number(carta[i])
    }
    
 console.log(`${carta[i]} vale: ${valor}`)

}

let carta1Usuario = comprarCarta();
let novaCartaUsuario = comprarCarta();
let carta1Pc = comprarCarta();
let carta2Pc = comprarCarta();
let novaCartaPc = comprarCarta();
let pontuacaoUsuario = carta1Usuario.valor + novaCartaUsuario.valor;
let pontuacaoPc = carta1Pc.valor + carta2Pc.valor;

// se as duas cartas forem Az(11) - Mostra as cartas e Reinicia o Jogo
if((carta1Usuario.value + novaCartaUsuario.value) == 22 || 
(carta1Pc.value + carta2Pc.value) == 22 ) {
   console.log(`@Usuario - Cartas iniciais: ${carta1Usuario.texto} e ${novaCartaUsuario.texto}`)+
   console.log(`#PC cartas iniciais: ${carta1Pc.texto} e ${carta2Pc.texto}`) 

console.log(" Press 'F5'!!!  Sorteie novamente")
} 
// se nao inicia a rodada  E se resposta: sim inicia / se nao finaliza (linha 84)
else if (confirm("Quer iniciar uma nova rodada?")){ 
   // mostra as cartas do usuario, pontuação e 1 carta do pc
 console.log(`@Usuario - Cartas iniciais: ${carta1Usuario.texto} e ${novaCartaUsuario.texto}`)+
  console.log("Total Usuario:", pontuacaoUsuario) +
 console.log(`#PC - Carta1 : ${carta1Pc.texto}`) 

   // enquanto a pontuacao do usuario < 22 e (+ carta?) é verdadeiro...
 while(pontuacaoUsuario < 22 && confirm("Quer comprar mais uma carta?")){
      //da mais uma carta para o usuario,seta a sua pontuação e mostra no console
      novaCartaUsuario = comprarCarta();
      pontuacaoUsuario+=novaCartaUsuario.valor 
      console.log("Nova Carta comprada Usuario:", novaCartaUsuario.texto , novaCartaUsuario.valor)
      console.log("Total Usuário:", pontuacaoUsuario)

 } if(pontuacaoUsuario > 21){
    // se a pontuacao do usuario passa de 21 ja perdeu...
   console.log("Usuario Perdeu")
 } else {
      // se nao enquanto a pontuacao do pc <= 21 e pontuacao do pc < que a do usuario
      while (pontuacaoPc <= 21 && pontuacaoPc < pontuacaoUsuario){
      if(pontuacaoPc <= 21){
         // se true da mais uma carta para o pc,seta pontuaçao e mostra no console
      novaCartaPc = comprarCarta();
      pontuacaoPc+=novaCartaPc.valor;
      console.log(`#PC cartas iniciais: ${carta1Pc.texto} e ${carta2Pc.texto}`) 
      console.log("Nova carta comprada Pc:",  novaCartaPc.texto )
      console.log("Total PC:", pontuacaoPc) 
   }
   }
}
  if(pontuacaoUsuario > pontuacaoPc && pontuacaoUsuario < 22 || pontuacaoPc > 21){
     //usuario vence se sua pontuacao é maior que do pc e sua pontuacao é menor que 22
     // ou quando a pontuação do pc ultrapassa 21
      console.log("Úsuario Venceu")

   }else if(pontuacaoUsuario > 21 || pontuacaoPc > pontuacaoUsuario) 
   {
      //pontuacao do usuario maior que 21 ou pontuacaoPC maior - PC GANHA
      //mostra as cartas do pc
      console.log(`#PC cartas iniciais: ${carta1Pc.texto} e ${carta2Pc.texto}`) 

      console.log("PC venceu ")

   } else { 
      // se nenhuma das possibilidades acima deu empate.
      //mostra as cartas do pc
      console.log(`#PC cartas iniciais: ${carta1Pc.texto} e ${carta2Pc.texto}`) 

      console.log("Empate")
   } 
} else {
 console.log("O jogo acabou!");
}

   
