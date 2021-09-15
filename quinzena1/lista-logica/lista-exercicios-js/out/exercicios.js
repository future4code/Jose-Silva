// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')
  return console.log(Number(num1) + Number(num2))
}


// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

 return console.log(mensagem)
}


/* imprimeMensagem();
 */

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const altura = prompt('Digite a altura')
  const largura = prompt('Digite a largura')

  return console.log(altura * largura);

}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = prompt('Digite a ano Atual')
  const anoNasc = prompt('Digite a ano de Nascimento')

  return console.log(anoAtual - anoNasc);

}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const pesoKg = prompt('Digite seu peso(Kg)')
  const altMetro = prompt('Digite sua altura(m)')
  const imc = pesoKg / (altMetro * altMetro);

  return console.log(imc);

}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt('Digite seu nome')
  const idade = prompt('Digite sua idade')
  const email = prompt('Digite seu email')

  return console.log
  (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);

}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const cor1 = prompt('Digite sua cor favorita')
  const cor2 = prompt('Digite sua segunda cor favorita')
  const cor3 = prompt('Digite sua terceira cor favorita')

  const arrayCores = [];
  arrayCores.push(cor1,cor2,cor3);
  return console.log(arrayCores);

}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const palavra = prompt('Digite uma palavra:')
  return console.log(palavra.toUpperCase());

}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custoTeatro = prompt('Digite o custo de um espetáculo de teatro')
  const ingressoTeatro = prompt('Digite o preço do ingresso: R$ ')

  let minimoIngressos = custoTeatro / ingressoTeatro;

  return console.log(minimoIngressos);

}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const string1 = prompt('Digite uma palavra:')
  const string2 = prompt('Digite outra palavra:')

  let comparaStrings = string1.length === string2.length ? true : false;

  return console.log(comparaStrings);

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const string1 = prompt('Digite uma palavra:')
  const string2 = prompt('Digite outra palavra:')

  let comparaStrings = string1.toUpperCase()
   ===  string2.toUpperCase() ? true : false;

   return console.log(comparaStrings);


}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = prompt('Digite a ano Atual')
  const anoNasc = prompt('Digite a ano de Nascimento')
  const anoEmissaoRg = prompt('Digite o ano em que sua carteira de identidade foi emitida')

  const idade = anoAtual - anoNasc;

  const renova = anoAtual - anoEmissaoRg;
  const resultado = (idade <=20 && renova >= 5) || 
  ((idade > 20 && idade <= 50) && renova >= 10 ) 
  || (idade > 50 && renova >= 15)
   return console.log(resultado);


}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const ano = prompt('Digite um ano')
  
  if (ano%400 == 0){
  return console.log(true)
  }
 else
  if(ano%4==0 && ano%100!=0){
   return console.log(true)
  }
  else {
  return console.log(false)
}

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const idade = prompt('Você tem no minímo 18 anos completo? ')
  const ensinoM = prompt('Você possui ensino médio completo?')
  const disp = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')

  const sim = "sim";

  if(idade == sim && ensinoM == sim && disp == sim){
    return console.log(true);
  }
  else{
    return console.log(false);
  }


}