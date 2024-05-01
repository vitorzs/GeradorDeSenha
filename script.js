//declaração de variaveis do HTML
let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")
let sizePassword = document.querySelector("#size")
let password = document.querySelector("#password")
let containerPassword = document.querySelector("#container-password")

// declaração de variávies do próprio Java
let caracteresDisponiveis = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
let novaSenha = ""

// Colocando o valor atual do slider na descrição em cima, porém sem dinamicidade
sizePassword.innerHTML = sliderElement.value

// Função pra mudar o valor atual do slider na descrição em cima conforme o "oninput", gerando dinamicidade
slider.oninput = function(){
    sizePassword.innerHTML = this.value
} 



//função de gerar senha final
function generatePassword(){

    let finalPassword = ""

//FOR cuida do tamanho da senha
//faz com que o procedimento seja repetido até chegar no número passado pelo usuário no slider.
    for(let i = 0; i < sliderElement.value; ++i){

        let caractereEscolhido = Math.floor(Math.random() * caracteresDisponiveis.length)
        finalPassword += caracteresDisponiveis.charAt(caractereEscolhido)
        
    }
    // hide foi uma classe colocado no Container do Password, no Css colocamos Display none.
    //Com esse comando removemos essa classe
    containerPassword.classList.remove("hide")
    password.innerHTML = finalPassword
    senhaCopiada = finalPassword

}

function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(senhaCopiada)
}