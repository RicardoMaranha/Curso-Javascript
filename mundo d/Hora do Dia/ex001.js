function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let f_hora = `${data.getHours()} horas e ${data.getMinutes()} minutos`
    //hora = 16 //horario manual
    msg.innerHTML = `Agora são ${f_hora}`
    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'img/manha.png'
        document.body.style.background = '#cbc29d'
    }
    else if(hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'img/tarde.png'
        document.body.style.background = '#ba9d8e'
    }
    else{
        //BOA NOITE
        img.src = 'img/noite.png'
        document.body.style.background = '#2f464e'
    }
    

}
