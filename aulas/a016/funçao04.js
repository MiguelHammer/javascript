function fatoria(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatoria(5))

//5! = 5 * 4 * 3 * 2 * 1 = 120 