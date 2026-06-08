// let numeroBig = 12345678901234567890n
// console.log(numeroBig)

// let big = BigInt(78)
// console.log(big)


// const hugeHex = BigInt("0x1fffffffffffff");

// comparação com == e ===(estrita)

// let n = 10n 
// let m = 10
// console.log(n==m)
// console.log(n===m)

// opercaoes com BigInt
// let n = 900719925740995n
// let m = 3n
// let resultado = n + m // +,-,*,%,/,**
// console.log(resultado)

// metodos estaticos uteis: BigInt.asIntN e BigInt.asUintN
// console.log(BigInt.asIntN(2, 5n))
// console.log(BigInt.asUintN(2, 5n))

//Determinar fatorial de um bigInt

// function fatorialBigInt(n){
//     if(n < 0 )
//         throw new Error("Fatorial não definido para negativo")
//     let resultado = 1n
//     for(let i = 2n ; i <= n; i++){
//         resultado *= i
//     }
//     return resultado
        
// }
// console.log(fatorialBigInt(25n))

// calculos financeiro com bigInt (evitar perda de precisao)

// funcao somar valores

// function somarValores(...valores){
//     let totalCentavos = 0n
//     for(const valor of valores){
//         //converter para centavo e bigint
//         const centavos = BigInt(Math.round(valor*100))
//         totalCentavos += centavos
//     }
//     // Retorna reais / dolar
//     return Number(totalCentavos) / 100
// }

// // uso
// const total = somarValores(1.0, 0.2, 100000000000.99)
// console.log("Total:",total)

// Cálculo Modular Grande (criptografia)
// funcao exponencial moddular (base**exp % mod)
// Função de exponenciação modular (base^exp % mod)
// function modPow(base, exp, mod) {
//   if (mod === 0n) throw new Error("Módulo não pode ser zero");
//   let resultado = 1n;
//   base = base % mod;

//   while (exp > 0n) {
//     if (exp % 2n === 1n) {
//       resultado = (resultado * base) % mod;
//     }
//     exp = exp / 2n;
//     base = (base * base) % mod;
//   }
//   return resultado;
// }
// // Exemplo: (123456789^987654321) % 1000000007
// const base = 123456789n;
// const exp = 987654321n;
// const mod = 1000000007n;

// console.log("Resultado:", modPow(base, exp, mod)); 


let numBig =12333344444444444444444444444444444444444444444343434423232424242
4242
let ouBig =  3342443434242244342424242323232323232324242

let converter= BigInt(numBig + ouBig)
console.log(converter)

