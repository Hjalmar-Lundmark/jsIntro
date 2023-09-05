let name = "Hjalmar";
console.log(typeof(name));
const greeting = `Hej ${name}`;
console.log(greeting);
const greeting2 = "hej " + name;
console.log(greeting2);
console.log(`hej3 ${name}`);
console.log(typeof(typeof(name)))

let age = 19;
console.log(typeof(age));
let x = Number.MAX_VALUE;
console.log(x);
let y = Number.MAX_SAFE_INTEGER;
console.log(y);
console.log(name + x);
let z = Number.MAX_VALUE*2;
console.log(z + ' ' + typeof(z));
console.log(isNaN(z));

cl("Hej");

function cl (val) {
    console.log(val)
}