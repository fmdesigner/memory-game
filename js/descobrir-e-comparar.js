/* Descobrir cards */
function descobrir() {

    var cardsDescobertos;
    var cardsPendentes;
    const totalDescobertas = document.querySelectorAll('.active:not(.acerto)');

    if (totalDescobertas.length > 1) {
        return;
    }

    this.classList.add('active');
    document.querySelector('#sonido-carta').cloneNode().play();
    cardsDescobertos = document.querySelectorAll('.active:not(.acerto)');

    if (cardsDescobertos.length < 2) {
        return;
    }

    /*Ativa a função de comparar*/
    comparar(cardsDescobertos);
    atualizaContador();
    
    /* Quando acabam os cards ativa a função de finalizar */
    cardsPendentes = document.querySelectorAll('.card:not(.acerto)');
    if (cardsPendentes.length === 0) {
        setTimeout(finalizar, 1000);
    }
}

/* Comparar os cards e ativa as funções de acerto e erro */
function comparar (cardsAComparar){

    if(cardsAComparar[0].dataset.valor === cardsAComparar[1].dataset.valor) {
        acerto(cardsAComparar);
    } else {
        erro(cardsAComparar);
    }
}