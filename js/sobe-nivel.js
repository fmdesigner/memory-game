function sobeNivel() {
    nivelAtual++;
}

function atualizaNivel() {
    var nivelTexto = nivelAtual + 1;
    if (nivelTexto < 10) {
        nivelTexto = '0' + nivelTexto;
    }
    document.querySelector('.nivel-text').innerText = nivelTexto;
    fraseh3.innerText = '';
    
}

function novoNivel() {
    sobeNivel();
    atualizaNivel();
    iniciar();
    document.querySelector('.mesa').style.display = 'flex';  
    document.querySelector('#nivel').classList.remove('active');
    
} 

function continuarNivel() {
    
    var nivelTexto = nivelAtual + 1;
    if (nivelTexto < 10) {
        nivelTexto = '0' + nivelTexto;
    }
    document.querySelector('.nivel-text').innerText = nivelTexto;
    document.querySelector('.gameOver').classList.remove('active');
    document.querySelector('#nivel').classList.remove('active');
    document.querySelector('#nivel').style.display = '';
    document.querySelector('#endGame').style.display = '';
    
    
    iniciar();

    
}