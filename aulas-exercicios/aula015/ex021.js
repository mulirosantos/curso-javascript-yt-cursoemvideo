let num = [1,2,3,5,4 ,6]
num.push(4)
num.push(9)
num.push(5)

//console.log(num)

/* num[3] = 10
num.push(4)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`) */


/* for(let pos = 0; pos < num.length; pos++){
    //console.log(num[pos])
    console.log(`A posição ${pos} tem valor = ${num[pos]}`)
} */

for(let pos in num){
    //console.log(num[pos])
    console.log(`A posição ${pos} tem valor = ${num[pos]}`)
}
