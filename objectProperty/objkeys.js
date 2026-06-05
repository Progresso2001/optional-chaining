// const valor ={
//     a:'nome',
//     b:34,
//     c:false
// }
// console.log(Object.keys(valor))

// // Basic array
// const arr = ["a", "b", "c"];
// console.log(Object.keys(arr)); // ['0', '1', '2']

// // Array-like object
// const obj = { 0: "a", 1: "b", 2: "c" };
// console.log(Object.keys(obj)); // ['0', '1', '2']

// // Array-like object with random key ordering
// const anObj = { 100: "a", 2: "b", 7: "c" };
// console.log(Object.keys(anObj)); // ['2', '7', '100']

// // getFoo is a non-enumerable property
// const myObj = Object.create(
//   {},
//   {
//     getFoo: {
//       value() {
//         return this.foo;
//       },
//     },
//   },
// );
// myObj.foo = 1;
// console.log(Object.keys(myObj));
// Usando Object.keys() em primitivas
// Strings have indices as enumerable own properties
console.log(Object.keys("JavaScript"))
// Other primitives except undefined and null have no own properties
console.log(Object.keys(100)); 