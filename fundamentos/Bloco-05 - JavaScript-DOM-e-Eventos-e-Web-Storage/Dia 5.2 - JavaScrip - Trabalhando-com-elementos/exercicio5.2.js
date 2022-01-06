//1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let body = document.querySelector('body')

let tagH1 = document.createElement('h1')
// Mostrando no console tag criada.
// console.log(tagH1); 

let textDentroDoH1 = document.createTextNode('H1 criado pelo JS')

tagH1.appendChild(textDentroDoH1)


body.appendChild(tagH1)
// adicionar mais de uma class na mesma tag pelo JS
tagH1.className = 'h1class h2class02'

// adicionar id pelo JS
// tagH1.id = "h1class01"

// adicionar class pelo JS
// tagH1.classList.add('hiclass')

//-------------------------------------------------------
//2 Adicione a tag main com a classe main-content como filho da tag body;

let tagMain = document.createElement('main')
tagMain.classList.add('main-content')
body.appendChild(tagMain)

//-------------------------------------------------------
//3 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let tagSection = document.createElement('section')
// console.log(tagSection)
tagSection.className = 'center-content'
tagMain.appendChild(tagSection)

//-------------------------------------------------------
//4 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let tagP = document.createElement('p')
tagSection.appendChild(tagP)

//-------------------------------------------------------
//5 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let tagSectionTwo = document.createElement('section')
tagSectionTwo.className = 'left-content'
tagMain.appendChild(tagSectionTwo)

//-------------------------------------------------------
//6 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let tagSectionThreen = document.createElement('section')
tagSectionThreen.classList.add('right-content')
// console.log(tagSectionThreen);
tagMain.appendChild(tagSectionThreen)

//-------------------------------------------------------
//7 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

let tagImg = document.createElement('img')
tagImg.src ='https://picsum.photos/200'
tagImg.classList.add('small-image')
tagSection.appendChild(tagImg)

//-------------------------------------------------------
//8 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let listaAlfabeto = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']

let tagOl = document.createElement('ul')
tagSectionThreen.appendChild(tagOl) 
let tagLi = document.createElement('li')

for (let position = 0; position < 10; position += 1) {
    let tagLi = document.createElement('li')
    tagSectionThreen.appendChild(tagLi)

}

let lis = listaAlfabeto = tagLi.createTextNode


for (let lista of listaAlfabeto) {
    listaAlfabeto[lista] += lis
}


//-------------------------------------------------------
//9 Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
let tagH3 = document.createElement('h3')
let tagH3Two = document.createElement('h3')
let tagH3Threen = document.createElement('h3')

tagMain.appendChild(tagH3)
tagMain.appendChild(tagH3Two)
tagMain.appendChild(tagH3Threen)