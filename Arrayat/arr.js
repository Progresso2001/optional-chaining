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

const linguagens = ['Python', "Golang", "C++","C#", "JavaScript"]

function retornarUltimoValor(index){
    return index.at(-1)
}
// Pegar o valor
const valorUltimo = retornarUltimoValor(linguagens) 
console.log("Retorno do ultimo valor:",valorUltimo)


