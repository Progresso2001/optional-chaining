const person = {
    name: "Dylan",
    profission: "Software Enginner",
    address: {
        city: "Luanda",
        zona: "Kapalanga",
        curse: {
            type:"JavaScript", id: 2,
            skill:["futebol", "andebol"]
        }
    },
    salario:{
        categoria: "Programador",
        mesada: undefined
    }
}

const acessInfor = person.name && person.address.city
// com encadeamento
const acessInfor =  person.address?.curse?.skill[0]
console.log(acessInfor)

// Gerando valor nao definido (undefined)

const propIndefinido =  person.car
console.log(propIndefinido)

// usando  ?? e ||

const versalario = person.salario ?? "5000kz"
const versalario = person.salario?.categoria || "5000kz"
console.log("Bonus do salario:",versalario)

