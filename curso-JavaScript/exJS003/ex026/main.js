let data = []
let num = document.getElementById('txtnum')
let lista = document.querySelector('select#datatab')
let res = document.querySelector('p#res')

function isNum(n){
    if (Number(n) >=1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true

    }else{
        return false
    }

}


function add(){    
    if(isNum(num.value) && !inLista(num.value, data)){
        //alert("Tudo ok!")
        data.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        //res.innerHTML = ''
    } else{
        window.alert("Valor inválido ou já existente")
    }
    num.value = ''
    num.focus()
    
}
function final(){
    if(data.length == 0){
        window.alert("Por favor, adicione valores para finalizar!")
    } else{
        let total = data.length
        let maior = data[0]
        let menor = data[0]//quando houver um único valor ele sempre será o maior e o menor
        let soma = 0
        let med = 0
        for( let pos in data){
            soma += data[pos]
            if(data[pos]> maior){
                maior = data[pos]
            }
            if(data[pos] < menor){
                menor = data[pos]
            }
            
        }
        med = soma / total
        res.innerHTML = `Ao todo temos ${total} de números cadastrados!<br><br>`
        res.innerHTML += `O Maior valor informado foi ${maior}<br><br>`
        res.innerHTML += `O Menor valor informado foi ${menor}<br><br>`
        res.innerHTML += `A soma de todos os valores informado foi ${soma}<br><br>`
        res.innerHTML += `A média de todos os valores informado foi ${med}`

    }

}