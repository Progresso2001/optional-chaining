// const mapa = new Map()
// mapa.set("nome", "DevJocas")
// mapa.set('id:1', {nome:"DevJocas", idade:22})
// mapa.set(45, "Javascript")
// console.log(mapa)




// console.log(mapa.has(45))
// if(mapa.has(45)){
//     console.log("Contem:", mapa.get(45))
// }

// console.log(mapa.has('id:1'))
// if(mapa.has('id:1')){
//     console.log("Dados:", JSON.stringify(mapa.get('id:1')))
// }

// usando o iteracao
const usuario = new Map()
// usuario.set("nome", "DevJocas")
usuario.set("profisao","Analista de dados")
// console.log(usuario.delete("nome"))
// console.log(usuario)

for(const [chave, valor] of usuario.entries()){
    console.log(`${chave}: ${valor}`)
}