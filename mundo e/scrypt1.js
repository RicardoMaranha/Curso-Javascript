function contar(){
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let passo = Number(document.getElementById('passo').value)
    let res = document.getElementById('res')
    res.innerHTML = ''
   
    if(passo == 0){
        alert(`Valor do passo não pode ser 0`)
    }
    else if(num1 < num2){
        res.innerHTML = `Contando: `
        for(let c = num1; c <= num2; c += passo) {
            res.innerHTML += `
            ${c} \u{1F449} `;    
        }
    }
    else if(num1 > num2){
        for(let c = num1; c >= num2; c -= passo) {
            res.innerHTML += `
            ${c} \u{1F449} `;    
    }
    }
    res.innerHTML += ` \u{1F6A9} `
    c = 0
}