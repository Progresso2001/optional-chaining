// usando o operador ?. de encadeamento
const aventuras = {
    nome:"Ana",
    programador: {nome: "DevJocas"},
    dog: {nome:"Dylan"},
   
}
const catName = aventuras.cat?.nome
console.log(catName)
console.log(aventuras.dadoMetodoNaoExistente?.())


// Pegar a prop nome

let myMap = new Map()
myMap.set('foo', {nome:"DevJocas", desc: "JavaScript"});
let acessarNome= myMap.get("DevJocas")?.nome;
console.log(acessarNome)

// curto circuito
let potencialNull = null
let x = 0
let prop=potencialNull?.[x++];
console.log(prop)

let customer = {
  name: "Carl",
  details: {
    age: 82,
    location: "Paradise Falls", // endereço detalhado é desconhecido
    // address:{
    //     city:'uige',
    //     state: 'negage'
    // }
  },
};
let customerCity = customer.details?.address?.city;
let customerAge = customer.details?.age;

let customerCityA = customer.details?.address?.state;
console.log(customerCity)
console.log(customerCityA)
console.log(customerAge)

// … isso também funcional com encadeamento opcional em chamada de função
let duration = vacations.trip?.getTime?.();

// usando com ??
let funcionario = {
    nome:"DevJocas",
    des: {prof:"Programdoor"}
}
const funcCity =  funcionario?.city ?? "Cidade Desconhecida"
console.log(funcCity)

const nomePessoa ={
    nome: "Joaquim", 
    idade: 23,
    cidade: {
        local:"luanda",
        zona: "capalanga"
    }
}
// forma nao recomendada
const acessarLocal = nomePessoa.cidade && nomePessoa.cidade.local;

// forma recomendada 
const acessarLocal = nomePessoa?.[cidade]?.['local'] 
const acessarLocal = nomePessoa?.cidade?.['local'].toUpperCase()
ou 
const acessarLocal = nomePessoa?.cidade?.local

console.log(acessarLocal)

// funcao basica
let userAdmin = {
    admin(nome){
        return(`Hello i´m ${nome} `)
        
    }
}
// chamando a funcao
let userGuestAdmin = userAdmin.admin?.("DevJocas")
console.log(userGuestAdmin)

let invalidAdmin = userAdmin.admin?.type ?? "Propriedade type não definida"
console.log(invalidAdmin)


Callbacks
const url = ('https://jsonplaceholder.typicode.com')
function fetchDados(url, onSucess, onError){
    fetch(url)
        .then(res=>{
            if(res.ok){
                res.json()
                .then(dados=>{
                    onSucess?.(dados)
                })
            }
        })
        .catch(err=>{
            onError?.(err)
        })
}
fetchDados('https://jsonplaceholder.typicode.com/users/1',
    (dados) => {
    console.log('Dados recebidos:', dados);
    // console.log('Título:', dados.title);
    console.log('Título:', dados.address?.street);

  },
    (erro) => {
    console.error('Ocorreu um erro:', erro.message);
  }
)

// Alternativa mais limpa: usar async/await dentro do .then()
function fetchData(url, onSuccess, onError) {
  fetch(url)
    .then(async response => {
      try {
        if (response.ok) {
          const dados = await response.json();  // Aguarda a Promise
          onSuccess?.(dados);
        } else {
          onError?.(new Error('Resposta não OK: ' + response.status));
        }
      } catch (erroJson) {
        onError?.(erroJson);
      }
    })
    .catch(err => {
      onError?.(err);
    });
}
    