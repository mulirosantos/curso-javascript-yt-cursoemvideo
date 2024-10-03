function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('resultado')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("[ERROR] Verifique os dados e tente novamente!")

    } else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            gen = 'Homem'
            if(idade >= 0 && idade < 14){
                //criança
                img.setAttribute('src','./img/criancaH.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','./img/jovemH.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','./img/adultoH.png')
            }else{
                //idoso
                img.setAttribute('src','./img/idosoH.png')
            }
        }else if(fsex[1].checked){
            gen = 'Mulher'
            if(idade >= 0 && idade <12){
                //criança
                img.setAttribute('src','./img/criancaM.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','./img/jovemM.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','./img/adultoM.png')
            }else{
                //idoso
                img.setAttribute('src','./img/idosoM.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.append(img)
    }


}