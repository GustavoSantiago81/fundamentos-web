
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
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Nome Válido!'
        txt.style.color = "green"
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML= 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML= 'E-mail válido'
        txtEmail.style.color = 'green'
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "<h1>Digite no máximo 100 caracteres</h1>"
        txtAssunto.style.backgroundColor = 'red'
    }
}