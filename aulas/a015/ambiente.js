let num = [5, 9, 3, 7, 6, 2, 1];
num.sort();
console.log(`( ${num} )`)
console.log(`O vetor tem ${num.length} elementos`);
console.log(`Esses são os elementos: ${num}`);
console.log(`Vamos organizar: ${num.sort()}`);
let pos = num.indexOf(4); // o -1 significa: Ele pesquisou dentro do Vetor, mas não achou

if ( pos == -1) {
    console.log('Não encontrei esse número');
} else {
    console.log(`Está na posição ${pos}`);
}

