let valor1 = document.getElementById('n1')
let valor2 = document.getElementById('n2')
let resposta = document.querySelector('#res')


function validar(n1, n2){
    if(n1.length > 0 && n2.length > 0 ){
        return true
    }else{
        return false
    }    
}



function enviar(){
    if(!validar(valor1.value, valor2.value)) {
        alert('Por Favor Preencha os campos corretamente!')
        resposta.innerHTML = ''

    }else if(Number(valor2.value) > Number(valor1.value)){
        alert('Parabéns! Formulário validado com Sucesso! ')
        resposta.style.color = 'green'
        resposta.innerHTML = `Você digitou ${valor1.value} para o valor A! </br>`
        resposta.innerHTML += `Você digitou ${valor2.value} para o valor B! </br>`
        resposta.innerHTML += `O valor B é maior que o valor A!`

    }else{
        resposta.style.color = 'red'
        resposta.innerHTML = `O valor informado de A precisa ser menor que o valor de B`
    }
    

}

