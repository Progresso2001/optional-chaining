const pessoa = {nome:"DevJocas"}
const usuarioVisitado = new WeakSet()
usuarioVisitado.add(pessoa)
console.log(usuarioVisitado.has(pessoa))

pessoa= null //o objecto pode sair da memoria se nao houver referencia
