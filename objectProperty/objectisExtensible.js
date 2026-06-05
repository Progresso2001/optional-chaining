// New objects are extensible.
const empty = {};
console.log(Object.isExtensible(empty)); // true

// They can be made un-extensible
Object.preventExtensions(empty);
console.log(Object.isExtensible(empty)); // false

// Sealed objects are by definition non-extensible.
const sealed = Object.seal({});
console.log(Object.isExtensible(sealed)); // false

// Frozen objects are also by definition non-extensible.
const frozen = Object.freeze({});
console.log(Object.isExtensible(frozen)); // false