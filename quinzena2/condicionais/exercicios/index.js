//1#############

/* -Pede ao usuario que o numero que ele deseja Testar...
-convert para numero.
-Quer verificar se é par

b) par
c) impar */

//########### 2 ##################


/* A)Serve para o usuario inserir o nome de uma fruta (diferente 
das outras frutas padrões que custam R$5)
 e o sistema retorna o preço desta fruta.

B) O preço da fruta Maça é R$ 2,25 

C) Vai considerar o preço default para Pêra
*/

//##### 3 ###########

/* A)Pedindo para o usuario digitar o primeiro numero, convertendo para numero,
e armazenando esse numero na const numero.

b.1) 
Esse número passou no teste
b.2)
Como o numero não é maior que 0 e/ou positivo, NÃO ENTRA no if...
c)(SIM)
...Sendo assim nao vai rodar o primeiro console.log que esta dentro do escopo do if, 
até pq só rodaria se fosse verdadeira a condição.
E apesar do segundo console.log estar fora do escopo e nao depender
 de nenhuma condição, ele tenta
imprimi a let mensagem que esta dentro do escopo do if,
o sistema nao consegue enxergar...Sendo assim gera um erro */

/* #############################################################################
1) */
/* 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console
 se ele/ela pode dirigir (apenas maiores de idade).

    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast
     para number para isso.

    c) Agora veja se essa idade do usuário corresponde à idade
     mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`,
      caso contrário, imprima `"Você não pode dirigir."` */

     /*  const idade = Number(prompt("Qual sua idade?"))

      if(idade >= 18 && Number(idade) ) {
        console.log("Pode dirigir")
      }else if(!Number(idade)) {
          console.log("Digite apenas numeros")
      }else{
          console.log("Você ainda não pode dirigir")
      } */
      

/* #############################################################################
2) Agora faça um programa que verifica que turno do dia um aluno estuda. 
 Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno).
  Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". 
  Utilize o bloco if/else */

 /*  let turno = String(prompt(
"Qual turno vc estuda? 'M' (matutino) ou 'V'(Vespertino) ou 'N' (Noturno)"))

turno = turno.toLowerCase() ? turno.toUpperCase() : null;

if(Number(turno)) {
    console.log("NÃO DIGITE NÚMEROS. Digite apenas 'M','V' OU 'N'")
}else if(turno === "M" ) {
    console.log("Bom dia!")
  }else if (turno === "V") {
      console.log("Boa Tarde")
  }else if (turno === "N") { 
    console.log("Boa noite") }
    else  { 
        console.log("Tente novamente!")
  } 
 */

/*   ################ 3 #############################
  3. Repita o exercício anterior, mas utilizando a estrutura de
   `switch case` agora. */


  /*  let turno = String(prompt(
    "Qual turno vc estuda? 'M' (matutino) ou 'V'(Vespertino) ou 'N' (Noturno)"))
    
    turno = turno.toLowerCase() ? turno.toUpperCase() : null;

    switch (turno) {
        case "M":
            console.log("Bom dia!")

        break;
        case "V":
            console.log("Boa Tarde")

        break;
        case "N":
            console.log("Boa noite")
        break;
        default:
            console.log("Tente novamente!")

        break;
    } */

 //############ 4 #################################################################
 /* Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela
  só assistirá a um filme com você se ele for do gênero fantasia e 
  se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário
   qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso,
    então verifique se seu amigo ou amiga vai topar assistir o filme. 
    Caso positivo, imprima no console a mensagem: "Bom filme!", 
    caso contrário, imprima "Escolha outro filme :(" */

    /* let genero = prompt("Qual o Genêro do Filme? ")
    const valorIngresso = prompt("Qual valor do ingresso? R$: ")
    
    genero = genero.toLowerCase() ? genero.toUpperCase() : null;


    if(genero === "FANTASIA" && valorIngresso  < 15 ){
        console.log("Bom filme!")
    }else {
        console.log("Escolha outro Filme ;(")
    } */

 //   @@@@@@@@@@ DESAFIO @@@@@@@@

 //1

/*  let genero = prompt("Qual o Genêro do Filme? ")
    const valorIngresso = prompt("Qual valor do ingresso? R$: ")
    const lanche = prompt("Qual lanche vai comer? ")
    
    genero = genero.toLowerCase() ? genero.toUpperCase() : null;


    if(genero === "FANTASIA" && valorIngresso  < 15 ){
        console.log("Bom filme!");
        console.log(`Aproveite seu lanchinho: ${lanche}`)
    }else {
        console.log("Escolha outro Filme ;(")
    }  */

    //2
    /* 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um
     estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
     */
     const nomeC = prompt("Digite seu nome: ");
    const tipoJ = prompt
    ("Digite o tipo de Jogo:  'IN' indica internacional; e 'DO' indica doméstico; ");
    const etapaJ = prompt
    ("Digite a etapa do Jogo:  'SF' indica semi-final; 'DT' indica decisão de terceiro lugar; e 'FI' indica final");
    const categoriaJ = prompt("Digite a Categoria:  pode ser as opções 1, 2, 3 ou 4; ");
    const qtddIngressos = prompt("Digite quantos ingressos vc deseja:")

     console.log(`
    Dados do cliente: ${nomeC} \n
    Tipo do jogo:   ${tipoJ} \n
    Etapa do jogo: ${etapaJ} \n
    Categoria: ${categoriaJ} \n
    Quantidade de Ingressos: ${qtddIngressos} \n
    `)
    let ingresso;
    switch (tipoJ) {
        case "DO":
        if(etapaJ === "SF") {
            
       if(categoriaJ === "1"){
        ingresso = 1230
        console.log(`Valor do Ingressos:${ingresso} `)
       } else if (categoriaJ === "2"){
        ingresso = 880
        console.log(`Valor do Ingressos:${ingresso} `)
       }
       else if (categoriaJ === "3"){
        ingresso = 550
        console.log(`Valor do Ingressos:${ingresso} `)
        }
        else if (categoriaJ === "4"){
            ingresso = 220
            console.log(`Valor do Ingressos:${ingresso} `)
        } else { console.log("Erro")}

        }
        
        else if (etapaJ === "DT") {
            
            if(categoriaJ === "1"){
             ingresso = 660
             console.log(`Valor do Ingressos:${ingresso} `)
            } else if (categoriaJ === "2"){
             ingresso = 440
             console.log(`Valor do Ingressos:${ingresso} `)
            }
            else if (categoriaJ === "3"){
             ingresso = 330
             console.log(`Valor do Ingressos:${ingresso} `)
             }
             else if (categoriaJ === "4"){
                 ingresso = 170
                 console.log(`Valor do Ingressos:${ingresso} `)
             } else { console.log("Erro")}
     
             }
             
             else if (etapaJ === "FI") {
            
                if(categoriaJ === "1"){
                 ingresso = 1980
                 console.log(`Valor do Ingressos:${ingresso} `)
                } else if (categoriaJ === "2"){
                 ingresso = 1320
                 console.log(`Valor do Ingressos:${ingresso} `)
                }
                else if (categoriaJ === "3"){
                 ingresso = 880
                 console.log(`Valor do Ingressos:${ingresso} `)
                 }
                 else if (categoriaJ === "4"){
                     ingresso = 330
                     console.log(`Valor do Ingressos:${ingresso} `)
                 } else { console.log("Erro")}
         
                 }

        break;
        case "IN":
            if(etapaJ === "SF") {
            
                if(categoriaJ === "1"){
                 ingresso = 1230 * 4.10
                 console.log(`Valor do Ingressos:${ingresso} `)
                } else if (categoriaJ === "2"){
                 ingresso = 880 * 4.10
                 console.log(`Valor do Ingressos:${ingresso} `)
                }
                else if (categoriaJ === "3"){
                 ingresso = 550 * 4.10
                 console.log(`Valor do Ingressos:${ingresso} `)
                 }
                 else if (categoriaJ === "4"){
                     ingresso = 220 * 4.10
                     console.log(`Valor do Ingressos:${ingresso} `)
                 } else { console.log("Erro")}
         
                 }
                 
                 
                 else if (etapaJ === "DT") {
                     
                     if(categoriaJ === "1"){
                      ingresso = 660 * 4.10
                      console.log(`Valor do Ingressos:${ingresso} `)
                     } else if (categoriaJ === "2"){
                      ingresso = 440 * 4.10
                      console.log(`Valor do Ingressos:${ingresso} `)
                     }
                     else if (categoriaJ === "3"){
                      ingresso = 330 * 4.10
                      console.log(`Valor do Ingressos:${ingresso} `)
                      }
                      else if (categoriaJ === "4"){
                          ingresso = 170 * 4.10
                          console.log(`Valor do Ingressos:${ingresso} `)
                      } else { console.log("Erro")}
              
                      }
                      
                      else if (etapaJ === "FI") {
                     
                         if(categoriaJ === "1"){
                          ingresso = 1980 * 4.10
                          console.log(`Valor do Ingressos:${ingresso} `)
                         } else if (categoriaJ === "2"){
                          ingresso = 1320 * 4.10
                          console.log(`Valor do Ingressos:${ingresso} `)
                         }
                         else if (categoriaJ === "3"){
                          ingresso = 880 * 4.10
                          console.log(`Valor do Ingressos:${ingresso} `)
                          }
                          else if (categoriaJ === "4"){
                              ingresso = 330 * 4.10
                              console.log(`Valor do Ingressos:${ingresso} `)
                          } else { console.log("Erro")}
                  
                          }
        break;
        
        default:
            console.log("Tente novamente!")

        break;
    }

    console.log("VALOR TOTAL:", ingresso * qtddIngressos)