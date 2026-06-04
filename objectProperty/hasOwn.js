 const  obj = {
     prop:"existe"
 }
 console.log(Object.hasOwn(obj, "prop"))
 const nome = {
     name: "DevJocas",
     city:"Luanda"
 }
 const verificarProp = Object.hasOwn(nome, "name")
 if(verificarProp === true){
     console.log("Tem a propriedade especifica")

 const valorAdicionado = {
     valor: true,
     pessoa: 1,
     contaRede: ["facebook", "whatsap"]
 }
 const propVerificada = Object.hasOwn(valorAdicionado, "contaRede")
 console.log(Object.hasOwn(valorAdicionado, "valor"))
 console.log(Object.hasOwn(valorAdicionado, "cidade"))
 console.log(propVerificada)
//  Verificar prop pertencentes
 const obj= {}
 obj.prop = "Existe"
 console.log(Object.hasOwn(obj, "prop"))
 console.log(Object.hasOwn(obj, "toString"))
 console.log(Object.hasOwn(obj, "data"))
 
 obj.exemplo = null
 console.log(Object.hasOwn(obj, "exemple"))

 obj.exemplo_1 = undefined
 console.log(Object.hasOwn(obj, "exemplo_1"))

//  Usar herança com o operador
 const pessoa = {nome: "Joaquim"}
 console.log("nome" in pessoa) 
 console.log("toString" in pessoa) 
 console.log("idade" in pess)

//  Iterando sobre prop de objectos
const pessoa ={
    nome: "DevJocas", 
    idade: 23
}
for(const dado in Object.keys(pessoa)){
    console.log(dado)
}
for(let i in pessoa){
    if(Object.hasOwn(pessoa, "nome")){
        console.log(i)
    }
}

// Verificar se um indice existe no array
console.log(Object.hasOwn(frutas, 3))
const frutas = ["Manga", "Banana", "Uva"]

// Casos problematicos para hasOwnProperty
console.log(Object.hasOwn(frutas, 2))
const chamar = {
    hasOwnProperty(){
    return false
        },
        nome: "Eu chamao-DevJocas"
    }
    if(Object.hasOwn(chamar, "nome")){
        console.log(chamar.nome)
    }

// Objeto sem protótipo - hasOwnProperty() falha!
const objSemProto = Object.create(null);
objSemProto.nome = 'Ana';

console.log(objSemProto.hasOwnProperty('nome')); // Erro: não existe
console.log(Object.hasOwn(objSemProto, 'nome'));        

// Iterando sobre propriedades de um objeto
const carro = { marca: 'Toyota', modelo: 'Corolla' };

for (let propriedade in carro) {
  console.log(propriedade);
}

// Com filtro para só propriedades próprias
for (let propriedade in carro) {
  if (Object.hasOwn(carro, propriedade)) {
    console.log(propriedade); 
  }
}
 }
