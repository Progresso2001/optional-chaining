

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
