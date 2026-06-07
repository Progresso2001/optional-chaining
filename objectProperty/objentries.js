/*
O object.entries retorna uma array dos proprios chave e valores, 
enumeraveis de prop string-keyed de um dado objecto

*/

const valString = {nome:'devJocas',cidade:'Toronto',profissao:'Programador'}
const transEmaArray =  Object.entries(valString)
console.log(transEmaArray)

// usando o for...of
for(const [key, value] of Object.entries(valString)){
    console.log(`${key}: ${value}`)
}

const pessoa = {nome:"Pedro", idade:23}
for(let [key, value] of Object.entries(pessoa)){
    console.log("Chave: ", key + " \nvalor: ", value)
}

const arrayLike =  {0:"a", 1:"b", c:"d"}
console.log(Object.entries(arrayLike))

const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  },
);
myObj.foo = "bar";
console.log(Object.entries(myObj));

// Usando Object.entries() em primitivas

// Usando Object.entries() em primitivas
//1-String tem indece como enumeraveis da propria propriedade
const nome ="joaquim"
const arrayNome = Object.entries(nome)
console.log(arrayNome)

for(let [key, value] of Object.entries(nome)){
    console.log(`${key}: ${value}`)
}

//2-Outros primitivos exceptos undefined e null nao
//  tem propria propriedade e retorna array vazio
console.log(Object.entries(100))

// Conversão de um objeto em um mapa
const pessoa = {nome: "DevJocas", local: "Luanda"}
const map = new Map(Object.entries(pessoa))
console.log(map)

// Iterando através de um objeto

// Using for...of loop
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Using array methods
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key}: ${value}`); // "a 5", "b 7", "c 9"
});