const numeros = new Set()
numeros.add(1)
numeros.add(2)
numeros.add(2) //nao adiciona duplicata
numeros.add(3)
numeros.add(4)
numeros.add(5)
console.log(numeros.size)
console.log(numeros.has(3))
console.log(numeros.size)
console.log(numeros)

// Remover Duplicatas

const numerosArr =  [1,2,2,3,4,5]
const numeroUnicos = [...new Set(numerosArr)]
console.log(numeroUnicos)

Iterando

for(let valor of numerosArr){
    console.log(valor)
}

const objectos = new Set()
objectos.add("mesa")
objectos.add("janela")
for(const valor of objectos){
    console.log(valor)
}
// console.log(objectos)


