let name = "Hjalmar"
let chars = [ ]
let revchars = "";
for (let i = 0; i < name.length; i++) {
    chars.push(name[i])
    revchars += (name[name.length-i-1])
}
console.log(revchars + "\n")

chars.forEach(c => {
    console.log(c);
})

let bw = chars.map(c => {
    return c+c;
});
console.log(chars + " och " + bw)

let q = [1, 5, 12, 22]

let init = 0;
let sum = q.reduce((accum, current) => 
    accum + current, init
);
console.log(sum)

let filter = q.filter(n => {
    return n !== 5;
})
console.log(filter);