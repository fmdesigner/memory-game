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
    
    var nivelTexto = nivelAtual;
    if (nivelTexto < 10) {
        nivelTexto = '0' + nivelTexto;
    }
    document.querySelector('.nivel-text').innerText = nivelTexto;
    document.querySelector('.gameOver').style.display = 'none';
    
    
    iniciar();

    
}