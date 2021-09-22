// 1


//Matheus Nachtergaele
//Virginia Cavendish
//canal: "Globo", horario: "14h"



// 2

// vai ser impresso cada um dos 3 objetos (cachorro,gato,tartaruga)
/* {nome: 'Juca', idade: 3, raca: 'SRD'}
{nome: 'Juca', idade: 3, raca: 'SRD'}
{nome: 'Juca', idade: 3, raca: 'SRD'} */

/* Spread / (...) = "pega todos as propriedades e valores do objeto, 
permite definir um número indefinido de parâmetros para uma função".
No exemplo acima gato e tartaruga estão trazendo 
propriedades e valores de outro objeto. */

//3

/* false = pq a propriedade backender foi setada como false...
undefined = pq nao foi definida ainda a propriedade altura para essa pessoa...

A função minhaFunção espera receber o nome de um objeto e uma propriedade,
no primeiro consolelog funcionou, no segundo nao pq a propriedade altura nao existe */


// 1- a) #################################

/* const amigo = {nome: "Edmundo", 
apelidos: ["Ed","Animal","Goleador"]
}

const nomeApelido = (obj) => {
return console.log(`Eu sou ${obj.nome}, mas pode me chamar de: 
${obj.apelidos[0]},${obj.apelidos[1]} ou ${obj.apelidos[2]}`)
}

nomeApelido(amigo);
//b)

const amigo2 = {...amigo, 
apelidos: ["Matador","AuAuAu","camisa7"]
}

nomeApelido(amigo2) */

//2
/* const pessoa1 = {
	nome: "Baianinho de Mauá", 
    idade: 37, 
	profissao: "Jogador de Sinuca"
}

const pessoa2 = {
	nome: "Michael de Teixeira de Freitas", 
    idade: 28, 
	profissao: "Jogador de Sinuca"
}

const pessoas = (obj) => {
    let x = [obj.nome, obj.nome.length , obj.idade, 
      obj.profissao, obj.profissao.length]
    return console.log(x);  
  }


pessoas(pessoa1);
pessoas(pessoa2); */

//3
/* let carrinho = [];

const sacola1 = {
    nome: "Maça",
    disponibilidade: true,
}
const sacola2 = {
    nome: "Pera",
    disponibilidade: true,
}
const sacola3 = {
    nome: "Uva - verde",
    disponibilidade: true,
}

const recebeSacolas = (fruta1,fruta2,fruta3) =>{
carrinho.push(fruta1,fruta2,fruta3);
return console.log(carrinho);
}

recebeSacolas(sacola1,sacola2,sacola3); */

// 1 ######## desafio ####################

/* const usuario = () => {
    let nome = prompt("Digite seu nome: ")
    let idade = prompt("Digite sua idade: ")
    let  profissao = prompt("Digite sua profissao:  ")

    const objUsuario = {
        nome,
        idade,
        profissao
    }
    return console.log(objUsuario), console.log("tipo: ", typeof objUsuario) 
}
usuario();
 */


