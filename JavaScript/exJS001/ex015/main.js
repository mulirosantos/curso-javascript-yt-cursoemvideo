
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora}h. `
    if(hora >= 6 && hora < 12){
        //bom dia!
        img.src = './img/manha.png'
        msg.innerHTML += "<strong>Bom Dia!</strong>"
        document.body.style.backgroundColor = "#DBD167"
    }else if (hora <= 18){
        //boa tarde!
        img.src = './img/tarde.png'
        msg.innerHTML += "<strong>Boa Tarde!</strong>"
        document.body.style.backgroundColor = "#DB852A"
    }else{
        //boa noite!
        img.src = './img/noite.png'
        msg.innerHTML += "<strong>Boa Noite!</strong>"
        document.body.style.backgroundColor = "#282033"
    }
}
