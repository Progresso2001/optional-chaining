// import fetch  from "node-fetch";
const usuarios = await fetch("https://jsonplaceholder.typicode.com/users/1")

const res = usuarios

export { res }