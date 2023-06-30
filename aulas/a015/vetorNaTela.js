let num = [5, 9, 3, 7, 6, 2, 1];
// num.sort();
console.log(`(${num})`)

/*
for (let pos = 0; pos < num.length; pos++) {
    console.log(`Posição ${pos}, tem o valor ${num[pos]}`)
}
*/

for (var pos in num){
    console.log(`Posição ${pos}, tem o valor ${num[pos]}`)
}