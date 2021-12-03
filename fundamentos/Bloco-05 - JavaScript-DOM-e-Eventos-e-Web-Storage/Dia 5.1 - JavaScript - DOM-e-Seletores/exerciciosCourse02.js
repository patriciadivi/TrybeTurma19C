// Alterando nome pelo getElementsByClassName
// getElementsByClassName("piloto-f1-atual")[0].innerText = "Stroll"
let pilotosDef1 = document.getElementsByClassName("piloto-f1-atual");

for (let i = 0; i < pilotosDef1.length; i += 1) {
    pilotosDef1[i].innerText = "Lewis Wanilton"
    
}