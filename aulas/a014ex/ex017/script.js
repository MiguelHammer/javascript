function tabuada() {
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');
    tab.innerHTML = ''
    tab.style.display = 'block'

    if (num.value.length == 0){
        tab.style.display = 'none'
    } else {
        let n = Number(num.value);
        let c = 1;

        while ( c <= 10) {
           var item = document.createElement('option');
           item.text = `${n} * ${c} = ${n*c}`

           item.value = `tab_${c}`  //isso é mais pra PHP,para adcionar value 
           
           tab.appendChild(item);
           c++
        }
    }
}