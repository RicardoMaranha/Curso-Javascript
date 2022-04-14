function calcular(){
    //variaveis
    let ano = new Date().getFullYear()
    let ano_nascimento = Number(document.getElementById('ano').value)
    let res = document.getElementById('res')
    let radsex = document.getElementsByName('radsex')
    let idade = 0
    let gen = ''
    let img = document.getElementById('imagem')


    if(ano_nascimento == 0 || ano_nascimento > ano){
        window.alert('Verifique os dados e tente novamente!!!')
    }
    else{
        idade = ano - ano_nascimento
    }
    if (radsex[0].checked){
        genero = 'Masculino'
        //bebe
        if(idade >= 0 && idade < 5){
            img.src = 'img/bebe.png' 

        }
        //Jovem Masculino
        else if(idade <= 21){
            img.src = 'img/jovem.png'
        }
        //Aduldo Masculino
        else if(idade <= 51){
            img.src = 'img/homen.png'
        }
        //Idoso Masculino
        else if(idade > 51){
            img.src = 'img/senhor.png'
        }
    }
    else if(radsex[1].checked){
        genero = 'Feminino'
        if(idade <= 5){
            img.src ='img/bebe.png'
        }
        else if(idade <= 21){
            img.src = 'img/jovemf.png'
        }
        else if(idade <= 51){
            img.src = 'img/mulher.png'
        }
        else if(idade > 51){
            img.src = 'img/senhora.png'
        }

    }

    res.innerHTML = `
    Você tem ${idade} anos<br>
    Sexo ${genero}`

}