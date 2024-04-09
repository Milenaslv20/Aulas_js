document.write("ola mundo"); //print que aparecera na pagina
console.log("ola mundo"); //print que aparecera no console do inspecionamento
//alert("ola mundo"); //alerta no inicio da pagina

//comentario em linha
/*comentario em bloco*/


//---conceitos de variaveis js---
let mensagem = "mensagem" // let = var (variavel)
let mensagem_2 = 'mensagem 2'
let peso = 60.6
let teste = true
let num = 10
let teste_2 = null //undefined/ ""/ 0/ false para dizer que a variável não tem valor definido ainda
teste_2 = "conteúdo"

const TAXA = 5.0 //geralmente se nomeia constantes com letras maiusculas

/*
   var (escopo global) - escopo fora do bloco a variável poderá ser usada fora do bloco e podem ser usadas antes de sua declaração.
   let (escopo local) - escopo restrito ao bloco, a variável só poderá ser usada dentro do bloco que ela foi declarada e só podem ser
 utilizadas após sua declaração.
   const (não permitindo reatribuição e nem redeclaração) - constante, só pode ser utilizada tambem dentro do bloco não podendo
 ser redefinida.
   
   conclusão - evite usar var

   declarações - mensagem_2(snake case)/mensagemDois(cammel case)
*/
//escrevendo o conteudo das variaveis e constantes
document.write("<p> mensagem: " + mensagem + "<br>") //concatenação
document.write(`mensagem 2: ${mensagem_2} <p>`) //template string


//operações e operadores
/*
   adição: +
   subtração: -
   divisão: /
   multuplicação: *
   mod: %

   igual: == (só compara se o conteúdo é igual)
   identico: === (compara se o tipo e o conteúdo são iguais)
   diferente de: != (compara o conteúdo)
   não é identico: !== (compara o tipo e conteudo)

   and: &&
   or: ||
   not: ! 
*/

let num_1 = 40
let num_2 = 5
let num_3 = 50
let num_4 = "50"

document.write("<b>Operações e operadores <br></b>")
document.write(`numero 1: ${num_1}<br>`)
document.write(`numero 2: ${num_2}<br>`)
document.write(`numero 3: ${num_3}<p>`)

document.write(`numero 1 + numero 2 = ${num_1 + num_2}<br>`)
document.write(`${num_1} + ${num_2} = ${num_1 + num_2}<p>`)

document.write(`-Var num_3: ${num_3}<br>`) 
document.write(`tipo: ${typeof num_3}<p>`)

document.write(`-Var num_4: ${num_4}<br>`) 
document.write(`tipo: ${typeof num_4}<p>`)

document.write(`num_3 = = num_4?: ${num_3 == num_4}<br>`)
document.write(`num_3 = = = num_4?: ${num_3 === num_4}<p>`)
document.write(`num_3 != num_4?: ${num_3 != num_4}<br>`)
document.write(`num_3 != = num_4?: ${num_3 !== num_4}<p>`)


document.write("<b>Operadores</b><br>")
let a = true
let b = false


