 /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 */
// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

  function mudarTagP(){
    let mudandoTagP = document.getElementsByTagName('p')[0]
    mudandoTagP.innerHTML = "Daqui 2 anos, me vejo uma desenvolvedora web, já no mercado de trabalho e no nivel 'Pleno'. AMÉM!"
     mudandoTagP.style.color = 'red'
 }

mudarTagP()

//  Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
//  Crie uma função que mude a cor do quadrado vermelho para branco.
function mudarCor(){
    let mundandoCor = document.getElementsByClassName("main-content")
    let mundandoCor02 = document.getElementsByClassName("center-content")

    mundandoCor[0].style.backgroundColor = "rgb(76,164,109)"
    mundandoCor02[0].style.backgroundColor = "white"
}

mudarCor()


//  Crie uma função que corrija o texto da tag <h1>.
function mudaTexto(){
    let mudandoH1 = document.getElementsByClassName("title")

    mudandoH1[0].innerText = "Exercício 5.1 - JavaEscripito | DOM e seletores"
}

mudaTexto()

//  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function mundandoParaMaiúsculo(){
    let mudandoTagP02 = document.getElementsByTagName('p')[1]
    mudandoTagP02.innerText = "Olá Mundão!"

}

mundandoParaMaiúsculo()

//  Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function mostraTagsP(){
    let mostrandoP = document.getElementsByTagName('p')
    
    for (let i = 0; i < mostrandoP.length; i++) {
    console.log(mostrandoP[i]) 
    
    }
}

mostraTagsP()


