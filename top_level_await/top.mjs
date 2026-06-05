import { res  } from "./level.js";
const user = res;
const meuUser = user.json()
.then(res=>res)
.then(data=>console.log("Dado acessado: ",data))
.catch(e=>console.error("Erro:", e.message))

// Usando o bloco try e catch
try{
    const userNovo = await user.json()
    if(res.ok){
        console.log("Requisicao feita com sucesso: ",res.status)
        const data = userNovo
        console.log(data)
        console.log("Nome da empresa:",userNovo.company?.name)
    }
}
catch(e){
    console.error("Erro: ", e.message)
}


import { usuarios } from "./level.mjs";

const saidaUser = await usuarios
console.log("User: ",saidaUser) 

import { res } from "./level.mjs"

const dadoUser =  res
try{
    const userNovo = await dadoUser.json()
    if(res.ok){
        console.log("Dados novos:",res.statusText)
        const data = userNovo
        console.log(data)
        
    }
}
catch(e){
    console.error("Erro: ", e.message)
}

