function calcular(){
    let num = Number(document.getElementById('num').value)
    let tab = document.getElementById('tabuada')
    tab.innerHTML = ''
    for (let c = 0; c <= 10; c++){
        let item = document.createElement('option')
        item.text = `${num} x ${c} = ${num * c}` 
        tab.appendChild(item)
    }
    
    //document.getElementById('res').innerHTML = resposta

}