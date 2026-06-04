// usando Array.at()
const nomes = ["Ana", "devJocas", "Miguel", 'dru' ]
const primeiroNome = nomes.at(0)
console.log(primeiroNome)
const segundoNome = nomes.at(1)
console.log(segundoNome)
const nomeComecadoDoLadoDireito = nomes.at(-1)
console.log(nomeComecadoDoLadoDireito)
const nomesDesordenado = [ "Bento", "Miguel", 'dru', "Ana"]
const organizarArray = nomesDesordenado.sort()
console.log(organizarArray.at(0))

// indice nao existente

const indeceNotExist = nomes.at(1)
if(indeceNotExist === undefined){
    console.log("Indice nao existe")
}else{
    const converterNome = indeceNotExist.charAt(0).toUpperCase() + indeceNotExist.slice(1)
   
        console.log("Nome: ", converterNome)
}

// // Exemplos
const linguagens = ['Python', "Golang", "C++","C#", "JavaScript"]

function retornarUltimoValor(index){
    return index.at(-1)
}
// Pegar o valor
const valorUltimo = retornarUltimoValor(linguagens) 
console.log("Retorno do ultimo valor:",valorUltimo)

// comparando metodos

const colors = ["green", "red", "blue"]
// Usando a prop length
const lengthColor = colors[colors.length-2]
if(lengthColor === undefined){
    console.log("Inserir numero menor que o tamanho")
}else{
    console.log("Valor certo: ", lengthColor)

}

// metodo slice(start, end)

const sliceWay = colors.slice(-2,-1)
console.log(sliceWay[0])

// usando o at()
const atWay =  colors.at(-2)
console.log(atWay)

const colors = ["green", "red", "blue", "pink"]
const valorIndex = -2
const acessarValor = colors.at(valorIndex)
console.log(acessarValor)
// ou
const valorTamanho = colors[colors.length + valorIndex]
console.log(valorTamanho)