// logical OR assignment
// falsy values : 0, "", false, NaN, undefined, null
let c = ""
c ||= "Texto padrao"
console.log(c)
let num = 9
num ||="Tem novo numero"
console.log(num)

let valor = undefined;
valor ||= "Inserir valor";
console.log(valor)

let config = null;
config ??= { apiUrl: 'https://api.exemplo.com' };
console.log(config); 

const nome = "DevJocas"
nome ??= "Programador"
console.log(nome)

// &&=(Logical AND ASSIGNMENT) - QUANDO o valor é truthy(verdadeiro)
// &&= Equivalente a: x&&= y->x&& (x=y)

let userAtivo = true
userAtivo &&= false
console.log(userAtivo)

// truthy (qualquer número diferente de 0 é truthy)
let a = 5
a &&= 10
console.log(a)

let myName = 8
myName &&= "devjocas"
console.log("Nome do Programador:",myName.toUpperCase())

// usandoo &&= para verificar objectos e gerar saida 
let pessoa ={
    nome:"DevJocas", 
    curso: {
        curso_A: "JavaScript",
        profissao: undefined, 
        salario: 30
    }
}
console.log(pessoa?.curso?.curso_A)

// 1- Alternativa: usar sem o ?. (encadeamento logico)
pessoa.curso.salario &&= 200000
console.log("Novo salario: ",pessoa.curso.salario)

// 2- Alternativa: Verificar antes de atribuir

if(pessoa?.curso?.salario){
    pessoa.curso.salario &&= 4000
}
console.log(pessoa)
console.log("Salario aumentado:", pessoa.curso.salario)
// 2- Alternativa:Usar ??= se quiser definir valor padrão
// Define apenas se for null/undefined
pessoa.curso ??= {};
pessoa.curso.salario ??= "valor";
console.log(pessoa)


// usandoo ||= para verificar objectos e gerar saida 

pessoa.curso.profissao ||= "Prograamdor JavaScript"
console.log(pessoa)

// ??= (Atribuição de coalescencia nula)-> null/undefined

let a = 0
a ??=30
console.log(a)
let valor  = 0
valor ??= 200
 console.log(valor) //0 pois (0 nao é null ou undefined)

let dizerOla = undefined
dizerOla ??= "Ola pessoal!"
console.log(dizerOla)

let pessoa ={
nome:"DevJocas", 
curso: {
    curso_A: "JavaScript",
    profissao: undefined, 
    salario: 40
    }
}
pessoa.curso.profissao ??= "Analista de Dados"
console.log(pessoa.curso.salario)
console.log(pessoa)

// nota: usando o if bloqueia a execução do ??= e retorna null ou undefined
// ou seja nao é aconselhavel o uso o if em ??=
let pessoa ={
nome:"DevJocas", 
curso: {
    curso_A: "JavaScript",
    profissao: undefined,  // ← valor é undefined e null 
    salario: 40
    }
}
if(pessoa?.curso?.salario){  // ← null é falsy! condição é FALSE
    pessoa.curso.salario ??= "Analista de Dados"
}