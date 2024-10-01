let amigo = {nome:'josé',idade:19, peso:80,
engordar(p=0){
    console.log('Engordou')
    this.peso += p 
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)