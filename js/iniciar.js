/*Iniciar*/
function iniciar() {
    movimentos = 0;
    repartirCards(niveis[nivelAtual].cards);
        
    document.querySelector('.frases').style.display = 'flex';
    document.querySelector('.mesa').style.display = 'flex';
    document.querySelector('#mov').innerText = '00';
    document.querySelector('#minutos').innerText = '00';
    document.querySelector('#segundos').innerText = '00';
    

    maxContador();
    cardsVisible();
    
    /*Oculta os modais*/
    modais.forEach((modal) => {
        modal.classList.remove('active');
    })
    
    /*Adiciona evento click nos cards*/
    document.querySelectorAll('.card').forEach((elemento) => {
        elemento.addEventListener('click', descobrir);
    })


}

/*Cards visiveis antes de começar*/
function cardsVisible() {

    document.querySelectorAll('.card').forEach((elemento) => {
        elemento.classList.add('active');
    })
    
    setTimeout(() => {
        fraseh3.innerText = '3';
    }, 500)

    setTimeout(() => {
        fraseh3.innerText = '2';
    }, 1000)

    setTimeout(() => {
        fraseh3.innerText = '1';
    }, 1500)
    
    setTimeout(() => {
        fraseh3.innerText = 'Jogar!';
        document.querySelectorAll('.card').forEach((elemento) => {
            elemento.classList.remove('active');
        })
        iniciarCronometro();
    }, 2000)

}


/*Reiniciar*/
function reiniciar() {
    nivelAtual = 0;
    atualizaNivel();
    iniciar();
    segundos = 60;
    minutos = 0;
    document.querySelector('#nivel').style.display = '';
}

/*Botões Iniciar, Reiniciar, Avançar e Continuar*/

document.querySelector('.start').addEventListener('click', iniciar);
document.querySelector('#avancar').addEventListener('click', novoNivel);
document.querySelectorAll('.reestart').forEach((btn) => {
    btn.addEventListener('click', reiniciar);
})

document.querySelectorAll('.continuar').forEach((btn) => {
    btn.addEventListener('click', continuarNivel);
})

