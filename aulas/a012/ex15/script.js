function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ ERRO ] Verifica a caixa de números a baixo.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement("img");
        img.setAttribute('id', 'foto');
        

        if (fsex[0].checked){
            
            if (idade >= 0 && idade < 12) {
                genero = 'um menino';
                img.setAttribute('src', '../imagens/menino.png');
            } else if (idade < 21) {
                genero = 'um jovem';
                img.setAttribute('src', '../imagens/adolecenteM.png');
            } else if (idade < 50){
                genero = 'um homem';
                img.setAttribute('src', '../imagens/homem.png');
            } else {
                genero = 'um idoso';
                img.setAttribute('src', '../imagens/velho.png');
            }
        } else {

            if (idade >= 0 && idade < 12) {
                genero = 'uma menina';
                img.setAttribute('src', '../imagens/menina.png');
            } else if (idade < 21) {
                genero = 'uma jovem';
                img.setAttribute('src', '../imagens/adolecenteF.png');
            } else if (idade < 50){
                genero = 'uma mulher';
                img.setAttribute('src', '../imagens/mulher.png');
            } else {
                genero = 'uma idosa';
                img.setAttribute('src', '../imagens/velha.png');
            }

        }
        res.style.textAlign = 'center';
        res.innerHTML = `<h3>Detectamos ${genero} com ${idade} anos</h3>`;
        res.appendChild(img);
    }
} 