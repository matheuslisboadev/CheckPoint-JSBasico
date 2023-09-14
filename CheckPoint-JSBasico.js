atividade 01

/* 1) Registro de idade no console: Sua tarefa é usar a função console.log()
para imprimir a sua idade no console do navegador. console.log() é
uma função do JavaScript usada para imprimir a saída em um
console, geralmente útil para depuração.*/

console.log("19 anos")

/*2) Registrar o número de semanas de programação: Agora, registre o
número de semanas que você programou usando a mesma função
console.log().*/

console.log("Em setembro, programei 3 semanas")

/*3) Usando comentários: Comentários são anotações que você pode
adicionar ao seu código que não são executadas. Use um comentário
de várias linhas (/* Comentário ) em seu código.*/

/*Corinthians*/

 /*4) Criando variáveis de diferentes tipos: JavaScript suporta vários tipos
de dados, incluindo números (number), texto (string), objetos
(object), etc. Sua tarefa é criar 5 variáveis de diferentes tipos de
dados.*/

var texto = "Senac"
var boolean = false
var number = 7
let nulo = null
const objeto = {
    nome: "senac",
    descricao: "faculdade"
}

/*5) Adicionando 3.5 à sua idade: O JavaScript permite operações
aritméticas como adição, subtração, etc. Adicione 3.5 à sua idade
usando um operador de adição (+) e registre o resultado com
console.log().*/ 

console.log(19 + 3.5 + " Anos")

/* 6) Quantos anos se passaram desde o pouso na lua em 1969: O objeto
Date em JavaScript é usado para trabalhar com datas. Sua tarefa é
obter o ano atual, subtrair 1969 dele e registrar o resultado.*/

console.log(2023 - 1969)

/*7) Divisão de números: Sua tarefa é dividir 65 por 240 e registrar o
resultado usando console.log().*/

console.log(65 / 240 )

/*8) Multiplicação de números: Multiplique 0.2708 por 100 e registre o
resultado. Esta é uma operação aritmética simples usando o
operador de multiplicação (*).*/

console.log(0.2708 * 100  )

/*Concatenação de strings: Em JavaScript, você pode concatenar (unir)
strings usando o operador de concatenação (+). Sua tarefa é
concatenar as strings 'Hello' e 'World' e registrar o resultado. */

console.log("Hello_" + "World")

/* 10) Concatenação de strings com espaço: Agora, concatene
'Hello' e 'World', mas certifique-se de incluir um espaço entre as duas
palavras. */

console.log("Hello " + "World")

/* 11) Usando a propriedade length: Em JavaScript, a propriedade
.length é usada para obter o número de caracteres em uma string.
Sua tarefa é registrar o número de caracteres na string 'Teaching the
world how to code' usando a propriedade .length. */

console.log('Teaching the world how to code'.length)

/* 12) Usando o método toUpperCase(): Este método é usado para
converter todas as letras de uma string para maiúsculas. Use o
método .toUpperCase() para converter a string 'Kaian Novais' em
maiúsculas e registre o resultado. */
const nome = 'Kaian Novais'
const nome_maiusculo = nome.toUpperCase()
console.log(nome_maiusculo)

/* 13) Removendo espaços em branco: O método .trim() é usado
para remover espaços em branco do início e do final de uma string.
Sua tarefa é remover os espaços em branco no início e no final da
string “ Professor Kaian Novais ” */
const frase = " Professor Kaian Novais  "
const frase_sem_espaço = frase.trim()
console.log(frase_sem_espaço);

/* 14) Gerando um número aleatório: A função Math.random() é
usada para gerar um número aleatório entre 0 (inclusive) e 1
(exclusive). Sua tarefa é gerar um número aleatório, multiplicá-lo por
100 e registrar o resultado. */

console.log(Math.floor(Math.random() * 100 ))

/* 15) Encontrando o próximo inteiro maior: O método Math.ceil() é
usado para arredondar um número para cima até o próximo número
inteiro maior. Sua tarefa é usar Math.ceil() com o número 43.8 e
registrar o resultado. */

console.log(Math.ceil(43.8))

/*16) Verificando se um número é um número inteiro: O método
Number.isInteger() é usado para determinar se um valor é um
número inteiro. Sua tarefa é verificar se o número 2017 é um número
inteiro e registrar o resultado. */
let numero = 2017
if (
    Number.isInteger((numero))    
)
 console.log(numero + " inteiro")
else {
    console.log(numero + " Não é inteiro")
}
