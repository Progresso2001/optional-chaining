

const dadoUser = new WeakMap()
let userDado = {nome:"DevJocas"}
dadoUser.set(userDado, {token:"123abc"})


console.log(dadoUser.get(userDado))

userDado = null;

const dadoSecreto = new WeakMap()
let user = {nome:"DevJocas"}
dadoSecreto.set(user, {acessLevel: "admin"})
console.log(dadoSecreto.get(user))
user= null 

// usando em funcao
function myWeakMap(){
    // let looseMap = new WeakMap()
    // looseMap.set({}, 'DevJocas')
    // looseMap.set({}, 'Programador')
    // looseMap.set({}, 'JavaScript')
    // console.log(looseMap)

    let nomeUser = new WeakMap()
    let userNome = {nome:'DevJocas'}
    nomeUser.set(userNome, {profissao: "Programador"})
    console.log(nomeUser.get(userNome))
    console.log(nomeUser.has(userNome))
}
myWeakMap()

// Usando Referencia Forte e fraca

let dog = {nome:'Mica'}
const pets = [dog] //Referencia dog
dog = null
console.log(pets)


