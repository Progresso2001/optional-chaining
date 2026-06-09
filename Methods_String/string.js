// Usando os metodos de string
// Verificacao e busca
// 1-startsWith
const linguagem = "javascript"
if(linguagem.startsWith('j')){
    console.log("Começa com: ",linguagem[0])
}else{
    console.log("Nao comeca essa letra")
}
// 2-endsWith
console.log(linguagem.endsWith('pt'))
// 3-includes()
if(linguagem.includes("javascript")){
    console.log("Estou estudando:",linguagem)
}else{
    console.log("Não esta incluido este valor")
}
// 4-indexOf
console.log(linguagem.indexOf('p'))

// Manipulacao e transformacao
// 1-slice(startTransition, end) 
console.log(linguagem.slice(0, 4))
console.log(linguagem.slice(2))

// 2-toUpperCase()
console.log(linguagem.toUpperCase())
//converte Primeira String 
console.log(linguagem[0].toUpperCase() + linguagem.slice(1))

// 3-toLowerCase()
const valor = 'PYTHON'
console.log(valor.toLowerCase())
// 4-replace(busca, substituto)
const nome = 'devjocas'
console.log(nome.replace('dev', 'Dev'))
console.log(nome.replaceAll('devjocas', 'DevJocas'))
// 4-splice(separador)-transforma a string em um array
console.log(nome.splice)
// 5-split()
const abc = "a,b,c"
console.log(abc.split(','))

//Acesso e outro
// 1-charAt(index)
const nome = 'DevJocas'
console.log(nome.charAt(0))
// 2-length -> propriedade
console.log(nome.length)
// 3-repeat(n)
console.log(nome.repeat(2))

// Recuperando um caractere de string específico
console.log(nome[0])
// outra forma
const stringRecuperada =nome[nome.length -1]
console.log(stringRecuperada)
if(nome.indexOf('Dev') !== -1){
    console.log(nome.toLowerCase())
}

// capitalize() -> nao existe em javascript, de ser criada uma funcao 

const capitalizar = (str)=>{
    if(!str) return str
    return str.charAt(0).toUpperCase() + str.slice(1)
}
const capitalizada = capitalizar()
console.log(capitalizada)

// usando Array(desestruturacao)
const capitalize = (str, lowerRest = false) => {
  if (!str) return str;
  const [first, ...rest] = str;
  return (
    first.toUpperCase() +
    (lowerRest ? rest.join("").toLowerCase() : rest.join(""))
  );
};

console.log(capitalize("devJocas")) 
console.log(capitalize("devJocas", true))

// versao compacta(one-linear)

const capitalizar = ([first, ...rest]) =>
    first?.toUpperCase() + rest.join("");
console.log(capitalizar("devJocas"))

// Capitalizar uma letra em uma posição específica (índice)
const nome = 'Devjocas'
const jMaiuscula = nome.slice(0, 3) + nome.charAt(3).toUpperCase() + nome.slice(3+1)
console.log(jMaiuscula)

// Usando map() com destruturação (mais moderno)
const capt = (str,index) =>{
    if(!str || index < 0 || index >= str.length) return str
    const char = [...str] //converte str em array
    char[index] =char[index].toUpperCase()
    return char.join("")
}
console.log(capt("javascript", 2))

// Capitalizar uma letra em uma posição específica (índice) outra forma
const capitalizarAt = (str, index) =>{
    if(!str || index < 0 || index >= str.length)
        return str
    return str.slice(0,index) + str.charAt(index).toUpperCase()+str.slice(index+1)
}
console.log(capitalizarAt('javascript', 0))
console.log(capitalizarAt('javascript', 4))

// capitalizar todas as letras especifica ex: "a"

const capitalizarA =(str, letras) =>{
    if(!str || !letras) return str
    return str.split(letras).map(part=>part).join(letras.toUpperCase())
}

console.log(capitalizarA('javascript', "a"))
console.log(capitalizarA('devjocasssssss', "s"))

// usando o regex

const capitAt = (str, letra) =>{
     if(!str || !letra) return str
     const regex =  new RegExp(letra, 'gi')
    //  g->global e i->case-insensitev
    return str.replace(regex, letra.toUpperCase())
}
const maiuscula = capitAt('ola mundo', 'o')
console.log(maiuscula)




