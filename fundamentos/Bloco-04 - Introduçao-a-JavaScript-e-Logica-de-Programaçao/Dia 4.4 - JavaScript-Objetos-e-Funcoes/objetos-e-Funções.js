let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };


// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

console.log('------------- Exercicio 1 - CONCLUIDO -------------');


console.log('Bem-Vinda,' + ' ' + info.personagem + '!')

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

console.log('------------- Exercicio 2 - CONCLUIDO -------------');


// info['recorrente'] = 'Sim'
// ou
info.recorrente = 'Sim' 
console.log(info);

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

console.log('------------- Exercicio 3 - CONCLUIDO -------------');


for (const key in info) {
    console.log(key);
  
}

// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

console.log('------------- Exercicio 4 - CONCLUIDO -------------');



for (const key in info) {
    console.log(info[key]);
    
}

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

let infoSecond = {
    personagem: 'Margarida e Tio Patinhas',
    origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas',
    recorrente: 'Ambos recorrentes'
  };

  console.log('------------- Exercicio 5 - CONCLUIDO -------------');

  for (const key in infoSecond) {
    console.log(infoSecond[key]);
  }



//6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

console.log('------------- Exercicio 6 - CONCLUIDO -------------');


let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };


   
   console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' +  leitor.livrosFavoritos[0].titulo);


//7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:

console.log('------------- Exercicio 7 - CONCLUIDO -------------');

leitor.livrosFavoritos[1] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
  }

//   for (const key in leitor) {
//     console.log(leitor[key]);
// }

  console.log(leitor.livrosFavoritos[1]);


//8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

console.log('------------- Exercicio 8 - Não CONCLUIDO -------------');

let total = 0
for (const key of leitor) {
    total += key.nome
    

}

console.log(total);