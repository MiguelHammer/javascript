function carregar() {
    var msg = document.querySelector('div#msg');
    var img = document.querySelector('img#imagem');
    var data = new Date();
    var hora = data.getHours();


    msg.innerHTML = `<h1>Agora são ${hora} horas </h1>`;

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = '../imagens/dia.png'
        document.body.style.background = 'lightblue'
    } else if (hora >= 12 && hora <= 18){
        //Boa tarte
        img.src = '../imagens/tarde.png'
        document.body.style.background = '#b9846f'
    } else{
        //Boa noite
        img.src = '../imagens/noite.png'
        document.body.style.background = 'rgba(1, 1, 137, 1)'
    }
}   