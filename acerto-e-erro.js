/* Acerto */
function acerto(cards) {
    cards.forEach((item) => {
        item.classList.add('acerto');
    });
    
    document.querySelector('#sonido-acierto').play();
}

/* Erro */
function erro(cards) {
    cards.forEach((item) => {
        item.classList.add('erro');
    })

    setTimeout(function () {
        cards.forEach((item) => {
            item.classList.remove('active');
            item.classList.remove('erro');
        })

    }, 1000);

    document.querySelector('#sonido-error').play();
}


