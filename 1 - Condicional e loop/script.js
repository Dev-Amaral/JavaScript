// conteudo
// variaveis var, let, const
// number, string, boolean, undefined, null
// incremento e decremento
// operadores logicos
// estrutura condicional
// operador ternario
// for while, do while


// exibir dados
// alert("Hello World!");

// document.write("Olá mundo!"); // exibir dentro da pagina
// console.log("Davi Amaral de Souza Cardoso");   // no console do terminal do browser

// DECLARAÇÃO DE VARIAVEIS
/*
var - let - const
var -> pode ser redeclarada e reatribuida
let -> nao pode ser redeclarada mas pode ser reatribuida
const -: ne, declarada nem atribuida
*/

// var x = 20;
// console.log(x)
// x = 30;
// console.log(x)
// let y = 90
// const m =78;
// console.log(m)


// // tipos de dados no JS 
// console.log("TIPO DE DADOS NO JS")

// let NUM = 90;
// let string = "hello"
// let bool = true;
// let nulo = null;
// let undef;

// console.log( typeof num);
// console.log( typeof string);
// console.log( typeof bool);
// console.log( typeof undef);

// // atribuiçao de valores
// var num1= 20;
// var num2 = 30;
// console.log(num1)

// // incremento e decremento

// let w = 20;
// console.log(++w) //21
// console.log(--w) //20

// // OPERADORES LOGICO

// console.log("OPERADORES RELACIONAIS")

let num1= 1;
let num2 = 15;

console.log(num1== num2)
console.log(num1!= num2)
console.log(num1===num2)
console.log(num1 <= num2)


console.log("operados logicos")
console.log(!(num1 === num2));
console.log((num1 !=num2) && (num1===num2));
console.log((num1 === num2) || (num1 != num2))

console.log("Estrutura condicional");
if(num1 != num2){
    console.log("São diferentes");
}else{
    console.log("são iguais")
}

//operador terminal
console.log("OPERADOR TERNARIO")
let n1 = (num1 < num2) ? "SIM" : "NÃO";
console.log(n1)


if(num1>num2){
    console.log("Num1 > Num2")
} else if(num1<num2){
    console.log("Num1 < Num2")
} else{
    console.log("num1 = num2")
}

console.log("SWITCH")

let fruta = "uva"

switch(fruta){
    case "uva":
        console.log("é uma uva")
        break;
    case "pera":
        console.log("É uma pera")
        break;
    default:
        console.log("Procure outra fruta")
}

let i=1;
while(i<10){
    console.log(i)
    i++;
}