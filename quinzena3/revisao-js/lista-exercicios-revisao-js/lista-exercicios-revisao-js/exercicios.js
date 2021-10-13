// EXERCÍCIO 01
let array1 = [5,5,3,0,1];

function inverteArray(array) {
  let teste = [];
  for (let i = array.length - 1; i >= 0; i--) {	
    teste.push(array[i]);
  }
  //console.log(teste)
return teste;
}

inverteArray(array1)

// EXERCÍCIO 02
let arrayPares = [1,2,3,4,5,6,8]
function retornaNumerosParesElevadosADois(array) {
  let saida = []
  for (let i = 0; i < array.length; i++) {
  if(array[i] % 2 == 0){
    saida.push(array[i] * array[i])
  }
  }
//console.log(saida)
return saida
}
retornaNumerosParesElevadosADois(arrayPares)

// EXERCÍCIO 03
let arrayPar = [10,20,2,3,5,11,12,13,14,15];
function retornaNumerosPares(array) {
  let saida = []
  for (let i = 0; i < array.length; i++) {
  if(array[i] % 2 == 0){
    saida.push(array[i])
  }
}
return saida

}
retornaNumerosPares(arrayPar)

// EXERCÍCIO 04
var arrMax = [1,0,2, 30,100,5,200,3,5,6,105,453,50,32];

function retornaMaiorNumero(array) {
  var max = array.reduce(function(a, b) {
    return Math.max(a, b);
  });
  //console.log(max);
  return max;
}
retornaMaiorNumero(arrMax)
// EXERCÍCIO 05

let arrQntElementos = [2,10,"oi", true, "hey",10, "20"]
function retornaQuantidadeElementos(array) {
  let elementos = 0;
  for (let x of array){
    elementos += 1;
  }
  //console.log(elementos);
return elementos
}
retornaQuantidadeElementos(arrQntElementos)

// EXERCÍCIO 06
const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2  //true
const booleano4 = !booleano3 
function retornaExpressoesBooleanas() {
  let arrB = []
  let v = new Boolean(true)
  let f = new Boolean(false)
  
  booleano1 && booleano2 && !booleano4 ? arrB.push(v) :  arrB.push(f);
  (booleano1 && booleano2) || !booleano3 ? arrB.push(v) :  arrB.push(f);
  (booleano2 || booleano3) && (booleano4 || booleano1) ? arrB.push(v) :  arrB.push(f);
  !(booleano2 && booleano3) || !(booleano1 && booleano3)? arrB.push(v) :  arrB.push(f);
  !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)? arrB.push(v) :  arrB.push(f);

  //console.log(arrB)
  return arrB


  

}

retornaExpressoesBooleanas()



// EXERCÍCIO 07
//let recebeNumero = prompt("Digite a quantidade de numeros pares: ")
function retornaNNumerosPares(n) {
  let numerosPares = [];
  for (let i = 0; numerosPares.length < n; i++) {
    // enquanto tamanho de numerosPares < numero inserido

      if (i % 2 == 0) {
          numerosPares.push(i);
          //tamanho de numerosPares é incrementado...
      }
  }
  //console.log(numerosPares);
  return numerosPares;

}

//retornaNNumerosPares(recebeNumero)

// EXERCÍCIO 08
// let lado1Tri = prompt("Digite a medida dos lados do triangulo (lado1):")
// let lado2Tri = prompt("Digite a medida dos lados do triangulo (lado2)")
// let lado3Tri = prompt("Digite a medida dos lados do triangulo (lado3)")

function checaTriangulo(a, b, c) {
  let resposta = "";
  a === b && b === c ? resposta = 'Equilátero' : a === b || a === c
    || b ===  c ? resposta = 'Isósceles' : resposta = 'Escaleno'
    return resposta;
}
//checaTriangulo(lado1Tri, lado2Tri,lado3Tri)
//console.log(checaTriangulo(lado1Tri,lado2Tri,lado3Tri))


// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let maior;
  let menor;
  let Y;
  if(num1 > num2){
    maior = num1;
    menor = num2;
  }else if(num2>num1){
    maior = num2
    menor = num1
  }else {
    maior = num1
    menor = num2
  }
  if(maior % menor == 0){
    Y = true
  }else{
    Y = false
  }
  const doisNumeros = {
    maiorNumero: maior,
    maiorDivisivelPorMenor: Y,
    diferenca: maior-menor
  }
  //console.log(doisNumeros)
  return doisNumeros
}

// EXERCÍCIO 10
const arr2 = [22,33,40,20,10]
function segundoMaiorEMenor(array) {
  const novoArr = []
  //retorna o maior/menor elemento do array
  let max = array.reduce(function(a, b) {return Math.max(a, b)});
  let min = array.reduce(function(a, b) {return Math.min(a, b) });

  //se o tamanho do array for maior que 2....
  if (array.length > 2) {
  for(let i = 0; i < array.length; i++){
    //varre o array de ponta a ponta
    while(array[i] == max || array[i] == min){
      // enquanto a posição da vez for igual o elemento max ou min
      array.splice(i, 1)
      // remove 1 elemento da posição[i] da vez 
    }
  }
// E captura novamente o maior e menor elemento

// Funcao para retornar o menor/maior valor de um array
  Array.min = function(array) {return Math.min.apply(Math, array);};
  Array.max = function(array) { return Math.max.apply(Math, array);};

     // console.log(array)
    //insiro no novo array as novas 1º maior e 1º menor que serão as 2º...
     novoArr.push(Array.max(array)); 
     novoArr.push(Array.min(array)); 

}else {
//se nao, array < 2 ... Insere no novo Array primeiro menor depois maior...
Array.min = function(array) {return Math.min.apply(Math, array);};
Array.max = function(array) {return Math.max.apply(Math, array);};
      //console.log(array)
     novoArr.push(Array.min(array)); 
     novoArr.push(Array.max(array)); 
}
     // console.log(novoArr)
     return novoArr //return novoArray com os 2º maior e 2º menor elemento do array
}
segundoMaiorEMenor(arr2)


// EXERCÍCIO 11
const arrOrd = [2,3,1,9,0,40]
function ordenaArray(array) {
  //Sort
  /* let novoA = []
  array.sort(function(a, b) {
    return a - b;
  })
  novoA = array;
  console.log(novoA)
  return novoA; */

 //____________________________________

  //BubbleSorte
  // Ele funciona por comparação repetida de elementos adjacentes e trocando-os se 
  // estiverem na ordem errada. As comparações repetidas borbulham o menor / maior
  //  elemento no final do array e, portanto, esse algoritmo é denominado bubble sort
  let novoA = [];
  let length = array.length;
  for (var i = 0; i < length; i++) { 
    for (var j = 0; j < (length - i - 1); j++) { 
             if(array[j] > array[j+1]) {
               var tmp = array[j]; 
          array[j] = array[j+1]; 
          array[j+1] = tmp; 
      }
  }        
}
// console.log(array)
novoA = array;
return novoA
}
ordenaArray(arrOrd)

// EXERCÍCIO 12

function filmeFavorito() {
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
  diretor: "David Frankel",
  atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
}
return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
  diretor: "David Frankel",
  atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
}
return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
const retangulo = {
  largura: lado1,
  altura: lado2,
  perimetro: 2 * (lado1 + lado2),
  area: (lado1 * lado2)
}
//console.log(retangulo)
return retangulo
}
//criaRetangulo(12,20)

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  
  const pessoa2 = {...pessoa };
  pessoa2.nome = "ANÔNIMO";
  return pessoa2
}

// EXERCÍCIO 16A
const aPessoas = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]
function maioresDe18(arrayDePessoas) {

  const maiorIdade = arrayDePessoas.filter((item) =>{
    return item.idade >= 18
  })
 return maiorIdade
}
maioresDe18(aPessoas)

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const maiorIdade = arrayDePessoas.filter((item) =>{
    return item.idade < 18
  })
 return maiorIdade
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

  const x2 = array.map((item) =>{
    return item * 2
  })
 return x2
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const x2s = array.map((item) =>{
    let str = item * 2
     return String(str)
  })
  return x2s
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  
  const x2 = array.map((item) =>{
   return item % 2 === 0 ? `${item} é par` : `${item} é ímpar`
  })
  return x2
}

// EXERCÍCIO 18A



function retornaPessoasAutorizadas(pessoas) {

  const pessoasAut = pessoas.filter((item) =>{
      // se atender todos entra
     if(item.altura >= 1.5 && item.idade > 14 && item.idade < 60){
      return item
     }
    })
 // console.log(pessoasAut)
 return pessoasAut
  
}

// EXERCÍCIO 18B

function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasNAut = pessoas.filter((item) =>{
    // se algum bater não entra
    if(item.altura < 1.5 || item.idade <= 14 || item.idade > 60){
      return item
     }
    })
  
    console.log(pessoasNAut)
  
 return pessoasNAut
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  
  consultasNome.sort((a, b) => {
    return a.nome > b.nome ? 1 : -1;
  });

  return consultasNome
  
}

// EXERCÍCIO 19B
const consultas1 = [
  { nome: "João", dataDaConsulta: ("01/10/2021") },
  { nome: "Pedro", dataDaConsulta:("02/07/2021") },
  { nome: "Paula", dataDaConsulta: ("03/11/2021") },
  { nome: "Márcia",  dataDaConsulta: ("04/05/2021")}
]
function ordenaPorData(consultasData) {
  let dataConvertida;
  // função para formatar a data para ordenar.....
  function FormataStringData(data) {
    var dia  = data.split("/")[0];
    var mes  = data.split("/")[1];
    var ano  = data.split("/")[2];
  
    dataConvertida = ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);

    return dataConvertida;
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
  }

  for (var i = 0; i <consultasData.length; i++){
    //varre o vetor
    FormataStringData(consultasData[i].dataDaConsulta);
    //Invoca formataData passando as posições das datas
   consultasData[i].dataDaConsulta = dataConvertida
   //posições das datas recebem a data convertida
  }
 
  // função para ordenar as datas, depois de convertidas...
  consultasData.sort((a, b) => {
    
     return (b.dataDaConsulta) < (a.dataDaConsulta) ? 1 : -1;

  });

  //função para desconverter as datas para finalizar o exercício...
    let ndataConvertida;
   for (var j = 0; j <consultasData.length; j++){
    function nFormataStringData(data) {

    var ndia  = data.split("-")[0];
    var nmes  = data.split("-")[1];
    var nano  = data.split("-")[2];
  
    return ndataConvertida = nano + '/' + ("0"+nmes).slice(-2) + '/' + ("0"+ndia).slice(-4) ;

    }
    nFormataStringData(consultasData[j].dataDaConsulta);

    consultasData[j].dataDaConsulta = ndataConvertida;

  }
  
  console.log(consultasData);
  return consultasData
}
ordenaPorData(consultas1)
// EXERCÍCIO 20
const contas1 = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function calculaSaldo(contas) {

for(let i = 0; i < contas.length; i++) {
  //intera o vetor de ponta a ponta...
    let somar = contas[i].compras.reduce((soma, i) => {
      //somar recebe contas.compras da e soma suas posicões
      return (soma + i);
  },0);  
  
  //console.log(contas[i].saldoTotal = (contas[i].saldoTotal - somar))
//contas.saldoTotal vão recebendo novo valor = seu saldo antigo -menos as compras ja somadas
  contas[i].saldoTotal = (contas[i].saldoTotal - somar)
  // i inicia em 0 depois 1 ...
}
//console.log(contas)
//return o array com suas modificações
return contas
}
calculaSaldo(contas1)

