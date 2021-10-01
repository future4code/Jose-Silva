/* 
1)
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item,index,array)
  }) */

 //No console.log(item,index,array) :
 // (item)imprime Os objetos do array com seus nomes e respectivos apelidos...
 // (index)imprime a posição deste objeto no array
 // (array)imprime O array inteiro

 //2##############

 /* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB) */

  //Novo Array com todos os nome da lista de objetos de Usuarios
  
  //3)####################

/*   const usuarios = [
   { nome: "Amanda Rangel", apelido: "Mandi" },
   { nome: "Laís Petra", apelido: "Laura" },
   { nome: "Letícia Chijo", apelido: "Chijo" },
 ]
 
 const novoArrayC = usuarios.filter((item, index, array) => {
    return item.apelido !== "Chijo"
 })
 
 console.log(novoArrayC)
 */
 //Traz os Objetos que não possuem apelido de Chijo

 //#####______________//////////______________////////////

 //1)

 const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

// a) Crie um novo array que contenha apenas o nome dos doguinhos

// const nomePets = pets.map((item) => {
//    return item.nome
// })

// console.log(nomePets);


//b) Crie um novo array apenas com os [cachorros salsicha]


// const petsSalsichas = pets.filter((item) => {
//    return item.raca === "Salsicha"
// })

// console.log(petsSalsichas);

/* c) Crie um novo array que possuirá mensagens para enviar para
 todos os clientes que são poodles. A mensagem deve ser: 
 "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!" */

// const petsPoodles = pets.filter((item) => {
//    return item.raca === "Poodle"
// })

// const msgPoodles = petsPoodles.map((item) =>{
//    let mensagem = "Você ganhou um cupom de desconto de 10% para tosar o/a: ";
//    return mensagem + item.nome 
// })

// console.log(msgPoodles);


/* 2) ------------------   */ 

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]



// a) Crie um novo array que contenha apenas o nome de cada item

// const nomeProdutos = produtos.map((item) => {
//    return item.nome
// })

// console.log(nomeProdutos);

//b) Crie um novo array que contenha um objeto com o nome
// e o preço de cada item, aplicando 5% de desconto em todos eles

// const prodSemCateg = produtos.map((item) => {
//    delete item.categoria;
//    return item
// })

// const desconto5 = prodSemCateg.map((item) =>{
//    let desconto;
//    desconto = (item.preco * 0.050)
//    item.preco = item.preco - desconto;
//    return item
// })
// console.log(desconto5)

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// const prodBebidas = produtos.filter((item) => {
//     return item.categoria === "Bebidas"
//     })

//     console.log(prodBebidas)
//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
/* const prodYpe = produtos.filter((item) => {
   if(item.nome.includes("Ypê")){
      return item
   }
   })
   console.log(prodYpe) */

   // e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]".
   // Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

  

   const prodYpeFrase = produtos.map((item) => {
      if(item.nome.includes("Ypê")){
         
      
         item = `Compre ${item.nome} por ${item.preco}`

         return item
      }else { return item}
      })
      
      console.log(prodYpeFrase) 