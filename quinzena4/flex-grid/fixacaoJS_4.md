```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let count = 0;
    let x;

for(let i = 0; i < arrayDeNumeros.length; i++){
if(numeroEscolhido == arrayDeNumeros[i]){
  count = count + 1;
  x = 1;
}
}

if ( x == 1 ){
  return  console.log(`O número ${numeroEscolhido} aparece ${count}x`)

}else { return console.log("Número não encontrado")}
}
```



