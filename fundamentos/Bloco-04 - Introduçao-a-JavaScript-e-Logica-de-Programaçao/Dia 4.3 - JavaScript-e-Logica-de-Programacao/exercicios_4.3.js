// Exercicio 01 - CONCLUIDO

// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

let n = 5
let ns = ' *****'

if (n > 1) {
    for (let cont = 0; cont < n; cont++) {
        console.log(ns);  
    }

} else {
    console.log('deu errado');
}

//-----------------------------------------------------//
//Exercicio 02 - CONCLUIDO
// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let num = 5
let espac = ' '

if (num === 5) {
    for (let rept = 0; rept <= num; rept += 1) {
        espac += '*'
        console.log(espac);
    }
} else {
    console.log('Algo deu errado!!');
}

//-----------------------------------------------------//
//Exercicio 03
// Agora inverta o lado do triângulo. Por exemplo:

let valor = 5
let simbolo = ' *'

if (valor === 5) {
    for (let init = 0; init <= valor; init++) {
        simbolo += ' '
        console.log(simbolo);
        
        
    }   
}

//-----------------------------------------------------//


//-----------------------------------------------------//
