// const usuarios = await fetch("https://jsonplaceholder.typicode.com/users/1")

// const res = usuarios

// export { res }

// // Carregamento Dinâmico de Módules com Fallback
// // com suporte CommonJS module
// let module,
// try{
//     const moduloPrincipal = await import("https://cdn1.com/library.js")
//     console.log("Carregado CDN Principal")
// }
// catch{
//     const moduleSecundario = await import("https://cdn2.com/library.js")
//     console.log("Carregado CDN Secundario")
// }

// export const formatDate = moduloPrincipal.formatDate
// export const parseDate = moduloSecundario.parseDate


// let usuarios;
// export const fetchDados = async()=>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     usuarios = res.json()
//     return usuarios
// } 
// fetchDados()
// export { usuarios }

// // **************************************Investigando Funces IIFE**********************************
// const obterDados = async() =>{
//     const url = "https://jsonplaceholder.typicode.com/users/1"
//     const res = await fetch(url)
//     return res.json()
// }
// obterDados()
//     .then(res=>res)
//     .then(data=>console.log(data))
//     .catch(e=>console.error("ERRO:", e))

// // Passar parametro

// const obterDados = async(id) =>{
//     const url = `https://jsonplaceholder.typicode.com/users/${id}`
//     const res = await fetch(url)
//     return res.json()
// }
// obterDados(1)
//     .then(res=>res)
//     .then(data=>console.log(data))
//     .catch(e=>console.error("ERRO:", e))

// //  Função Anônima (expressão async function atribuída a variável)
// // Expressão async function atribuída a variável (função anônima nomeada pela variável)

// const buscarDados = async function(userId) {
//   try {
//     const resposta = await axios.get(`https://api.exemplo.com/users/${userId}`);
//     return resposta.data;
//   } catch (erro) {
//     console.error('Erro:', erro);
//     throw erro;
//   }
// };

// // OU com arrow function async (mais comum hoje)
// const buscarDados = async (userId) => {
//   const resposta = await axios.get(`https://api.exemplo.com/users/${userId}`);
//   return resposta.data;
// };

// // Função Anônima IIFE (Invocada Imediatamente)

// // IIFE async - executa imediatamente
// (async function() {
//   try {
//     const dados = await axios.get('https://api.exemplo.com/data');
//     console.log(dados.data);
//   } catch (erro) {
//     console.error(erro);
//   }
// })();

// // OU com arrow function
// (async () => {
//   const dados = await axios.get('https://api.exemplo.com/data');
//   console.log(dados.data);
// })();



const usuarios = await fetch("https://jsonplaceholder.typicode.com/users/1")
const res = usuarios

export { res }