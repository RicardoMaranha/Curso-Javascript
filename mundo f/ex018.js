let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let resposta = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }

}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1 ){
        return true
    } else{
        return false
    }

}

function adicionar(){
    
    if (isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    } else{
        window.alert('Valor inválido ou já está na lista!!!')
    }
    num.value = ''
    num.focus()
    
}
function finalizar(){
    if (valores == 0){
        window.alert('Adicione algum valor!!!!')
    }
    else{
        let soma = valores.reduce(function(soma, i){
            return soma + i
        })
        valores.sort()
        ultima_pos = valores.length - 1
        let media = soma / valores.length
        resposta.innerHTML = `
        <p>Ao todo temos ${valores.length} numeros cadastrados</p>
        <p>Maior valor ${valores[ultima_pos]}</p>
        <p>Menor valor ${valores[0]}</p>
        <p>A soma dos valores é ${soma}</p>
        <p>A media é ${media}.`
    }
    

}