function calculate(){
    let txtn = document.getElementById('txtn')
    let tab = document.getElementById('tabuada')
    let res = document.querySelector('div#res')
    if(txtn.value.length == 0){
        alert('Please, enter a number!')
    }else{
        let num = Number(txtn.value)
        let c = 0
        tab.innerHTML = ''
        while(c <=10){
            let item = document.createElement('option')
            item.text = `${num} X ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c ++

        }
    }
    
}