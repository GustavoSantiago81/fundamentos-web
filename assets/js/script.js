
/* 
Case Sensitive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nomeg: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()                   melhor prática
*/


let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txt.innerHTML= 'Nome Inválido'
    } else {
        txt.innerHTML = 'Nome Válido!'
    }
}