function calculate(){
    var start = document.getElementById('start')
    
    var end = document.getElementById('end')
    var step = document.getElementById('step')
    var res = document.querySelector('div#result')
    if(end.value.length == 0 || start.value.length == 0 || step.value.length == 0){ //check if the values aren't null
        res.innerHTML = "Impossível calcular!"
        window.alert("[ERROR]Por favor, preencha os dados corretamente!")
    }else{
            res.innerHTML = "Contando: <br>"
            inum = Number(start.value)
            endnum = Number(end.value)
            stnum = Number(step.value)
            if(stnum <= 0 ){ //check if step is not zero
                alert("[ERROR] Invalid step, will consider step = 1 !")
                stnum = 1
            }
            if(inum > endnum){ //contagem decrescente
                for(var c = inum; c >= endnum; c -= stnum){
                    if(c != endnum){
                        res.innerHTML += `${c}\u{1F449}`
                    }else{
                        res.innerHTML += `${c}`
                    }
                }
            }else{//contagem crescente
                for(var c = inum; c <= endnum; c += stnum){
                    if(c != endnum){
                        res.innerHTML += `${c}\u{1F449}`
                    }else{
                        res.innerHTML += `${c}`
                    }
                }
                
            }
            res.innerHTML += `\u{1F3c1}\u{1F913}`
        }
        

}