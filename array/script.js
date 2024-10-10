// // definindo array
// let colors = ['Vermelho', 'verde','azul', 'amarelo']
// document.write(colors)

// // acessar array utilizando o indice
// document.write("<br>"+ colors[1]+"<br>")

// // quantos elementos tem determinado array
// document.write("tamanho do array: "+colors.length)

// // manipulação de arrays
// const frutas = ['Maça','banana','pera']
// document.write("<br>"+frutas+"<br>")

// // adicionar um item no final do array
// frutas.push("abacate")
// document.write(frutas)

// // adicionar um elemento no inicio do array
// frutas.unshift("caqui")
// document.write("<br>"+frutas)

// //remover o primeiro elemento do array
// frutas.shift();
// document.write("<br>"+frutas)

// //remover um elemento do array usando o indice
// // frutas.splice(2,2)
// console.log("<br>"+frutas)

// //separar itens do array
// document.write("<br>"+frutas.join(' - '))

// for(let i = 0; i<frutas.length; i++){
//     document.write("<br>"+frutas[i]+"<br>")
//     // document.write(`Indice: ${i} - valor: ${frutas[i]}<br>`)
// }

// // forEach
// let carros =['corsa', 'onix', 'gol','prisma','ford-ka']

// carros.forEach((valor, indice) => {
//         document.write(`Indice: ${indice} - valor: ${valor}<br>`)
// })

// let vetor =[1,2,3]
// function inverterArray(vetor){
//     for(let i = vetor.length -1 ; i>=0; i--){
//         document.write(vetor[i]);
//     }
// }

// inverterArray(vetor)


// let vetor2 = [4,8,7]
// function maiorValor(vetor2){
//     let maior = 0
//     for (let i = 0; i<vetor2.length; i++){
//         if(vetor2[i]>= maior){
//             maior=vetor2[i]
//         }
//     }
//     document.write(maior)
// }
// maiorValor(vetor2)

let vetor3 =[1,3,3,6,7,8,8]

function removerDuplicatas(vetor3){
    for (let i = 0; i<vetor3.length; i++){
        for (let j = 0; j<vetor3.length; j++){
        if(vetor3[j] == vetor3[i]){
            vetor3.splice(j,1)
        }
        }   
    }
}

removerDuplicatas(vetor3)
document.write(vetor3)