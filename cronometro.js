function iniciarCronometro() {

    segundos = niveis[nivelAtual].segundos;
    minutos = niveis[nivelAtual].minutos;
    var segundosTexto;
    var minutosTexto; 

    function atualizaCronometro() {
        
        segundos--;
        if (segundos < 0) {
            segundos = 59;
            minutos--;
        }
        
        if (minutos < 0) {
            segundos = 0;
            minutos = 0;
            clearInterval(cronometro);
            timeOver();
        }
        
        segundosTexto = segundos;
        minutosTexto = minutos;
        
        if (segundos < 10) {
            segundosTexto = '0' + segundos;
        }
        if (minutos < 10) {
            minutosTexto = '0' + minutos;
        }
        document.querySelector('#minutos').innerText = minutosTexto;
        document.querySelector('#segundos').innerText = segundosTexto;
    }
    cronometro = setInterval(atualizaCronometro, 1000);
}

/* Contador de movimentos */
function atualizaContador() {
    var movimentosText;
    movimentos++;
    movimentosText = movimentos;
    
    if(movimentos > niveis[nivelAtual].maxMovimentos){
        gameOver();
        return;
    }
    if(movimentos < 10) {
        movimentosText = '0' + movimentos;
    }
    
    document.querySelector('#mov').innerText = movimentosText;
}

function maxContador() {
    var movimentosMaxText = niveis[nivelAtual].maxMovimentos;
    var fraseText = niveis[nivelAtual].frase;
    
    if(movimentosMaxText < 10) {
        movimentosMaxText = '0' + movimentosMaxText;
    }
    document.querySelector('#mov-total').innerText = movimentosMaxText;
    document.querySelector('.frases h2').innerText = fraseText;
}