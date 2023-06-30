function contar() {
    let txt1 = document.getElementById('txtn1');
    let txt2 = document.getElementById('txtn2');
    let txt3 = document.getElementById('txtn3');
    let res = document.getElementById('res');

    if (txt1.value.length == 0 || txt2.value.length == 0 || txt3.value.length == 0) {
        res.innerHTML = '[ERRO] Impossivel conta'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(txt1.value);
        let f = Number(txt2.value);
        let p = Number(txt3.value);

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                if (c !== f) {
                    res.innerHTML += `${c} \u{1F449} `;
                } else {
                    res.innerHTML += `${c} &#x1F3C1;`; // Adiciona um emoji ao último número
                }
            } 
        } else {
            for (let c = i; c >= f; c -= p) {
                if (c !== f) {
                    res.innerHTML += `${c} \u{1F449} `;
                } else {
                    res.innerHTML += `${c} &#x1F3C1;`; // Adiciona um emoji ao último número
                }
            }
        }
    }
    
}