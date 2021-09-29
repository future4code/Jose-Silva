//#####1

/* variavel valor é iniciada em 0;
Para ( var i inicializa em 0; até i < 5; i é incrementado de 1 em 1){
    é armazenado em valor o i da vez
    após as interações valor = 10;
}
mostra o valor final 10.
"O código esta armazenando em valor todos os valores de i da vez e somando."
*/

//##########2
// const lista recebe um vetor de numeros
    // criada a variavel numero para armazenar os elementos do vetor lista
    // e para cada elemento da lista
      // se o numero for maior que 18
        //imprime este numero 


//A) " O codigo esta verificando se no vetor de numeros existe algum numero maior que 18 "
// É impresso no console todos os numeros maiores que 18

//B) Não, para acessar o indice usando for, precisamos criar uma estrutura assim:
/* const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let i = 0; i < lista.length;i++) {
    //criado var i que esta representando indice do vetor [i]... 
    //até indice < menor que tamanho do vetor
    // imprime todos os elemento que possui indice console.log(lista[i])
    // imprime um indice especifico console.log(lista[3])
    if (lista[i] > 18) {
          console.log(`Maior que 18: ${lista[i]}`)
      }

} */

// ###3
// será impresso no console.log 4 linhas 
// sendo que a linha 1 contem 1 asterisco *
// a linha 2, 2 asteriscos **. e assim por diante até 4 linhas e ****.

/* const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))

let quantidadeAtual = 0;
//qA inicia em 0;
while(quantidadeAtual <= quantidadeTotal){
  //enquanto qA for menor igual do que a qT (digitada)
  let linha = "";
  //linha inicia vazia
  for(let asteriscos = 0; asteriscos < quantidadeAtual; asteriscos++){
    //asteriscos inicia em 0; enquanto asterisco for < qA ;incrementa asterisco de 1em1
    linha += "*"
    // adiciona em linha * e armazena.
  }
  console.log(linha)
  //mostra estado da linha após cada interações e enquanto qA <= qT 
  quantidadeAtual++
  //incrementa qA de 1 em 1 enquanto qA <= qT
} */

//______________________//_____________________

//#############  1)

/* let bichinhos = prompt("Quantos bichinhos de estimação vc tem ?");

let arrNomes = [];

if(bichinhos <= 0){
  console.log("Que pena! Você pode adotar um pet.")
}else {
for (let i = 0; i < bichinhos;i++) {
  let nome = prompt("Digite o nome dele(s):");
  arrNomes.push(nome);
}
console.log(arrNomes);
}
 */

//================#### 2

const arrayOriginal = [10, 11, 12, 15, 18, 19, 21, 23, 25, 247, 30];

/* const todos = (arr) =>{
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
}
todos(arrayOriginal); */

/* const todosDez = (arr) =>{
  Number(arr);
  for (let i = 0; i < arr.length; i++) {

    console.log(`${arr[i]} / 10 = ${arr[i]/10}`);
  }
  }
  todosDez(arrayOriginal); */

/*   const todosPares = (arr) =>{
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
     if(arr[i] % 2 === 0) {
       arr2.push(arr[i]);
       //console.log(arr2);
     }
    }
    console.log(arr2)

    }
    todosPares(arrayOriginal); */


    
/*  const todosString = (arr) =>{
   let arr2 = arr;
for (let i = 0; i < arr2.length; i++) {
  console.log(` O elemento do indice ${[i]} é ${arr2[i]}`);
}
console.log(arr2)
}
todosString(arrayOriginal); */

/*  const maiorEmenor = (arr) =>{
  var min = Math.min(...arr);
  var max = Math.max(...arr);
console.log(`Menor: ${min}\n Maior: ${max}`);
}
maiorEmenor(arrayOriginal);  */


// ####Desafios
/* const numeroPensado = Number(prompt("Player 1 digite o numero pensado:"))
console.log(" Vamos jogar! ")
let numero = Number(prompt("Adivinhe o número pensado:"));

let cont = 1;

while( numero != numeroPensado) {
   if( numero < numeroPensado)
   
   {
    cont++;
 
    console.log(" O número chutado foi:"+numero) 
   console.log("Errou. O número pensado é maior")
    numero = prompt("Adivinhe o número pensado:");
     }
   if( numero > numeroPensado)

     {     cont++;
      console.log(" O número chutado foi:"+numero) 
        console.log("Errou. O número pensado é menor")  
        numero = prompt("Adivinhe o número pensado:")
       }
 
   }

   if( numero == numeroPensado){
    console.log("Aêê...Acertou, tentativas:" +cont)
  }
    */

  /* let minimo = 0;
  let maximo = 100;
  let numeroAleatorio;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return numeroAleatorio = (Math.floor(Math.random() * (max - min)) + min);
  }

  getRandomInt(minimo,maximo);
  console.log(`Numero Aleatorio: ${numeroAleatorio}`)

let numeroPensado = Number(numeroAleatorio)
console.log(" Vamos jogar! ")
let numero = Number(prompt("Adivinhe o número pensado:"));

let cont = 1;

while( numero != numeroPensado) {
   if( numero < numeroPensado)

   { 
    cont++;
 
    console.log(" O número chutado foi:"+numero) 
   console.log("Errou. O número pensado é maior")
    numero = prompt("Adivinhe o número pensado:");
     }
   if( numero > numeroPensado)
     {    cont++;
      console.log(" O número chutado foi:"+numero) 
        console.log("Errou. O número pensado é menor")  
        numero = prompt("Adivinhe o número pensado:")
       }
 
   }

   if( numero == numeroPensado){
    console.log("Aêê...Acertou, tentativas:" +cont)
  }  */

    // criar uma função para gerar o numero aleatorio, pegar o resultado e inserir na
    // var antiga do exercicio anterior...
