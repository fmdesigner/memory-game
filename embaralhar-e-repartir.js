/* Embaralhar Cards */
function embalharCards (cards) {
   var resultado;
   var totalCards = cards.concat(cards);    

   resultado = totalCards.sort(function() {
       return 0.5 - Math.random();
   })
   return resultado;

}
 

/* Repartir Cards */
function repartirCards(cards) {

    const mesa = document.querySelector('#mesa');
    const cardsEmbaralhados = embalharCards(cards);
    mesa.innerHTML = '';

    /* Cria cada um dos cards */
    cardsEmbaralhados.forEach((item) => {
        const cardHtml = document.createElement('div');
        cardHtml.innerHTML = '<div class="card" data-valor="' + item + '"><div class="card_container"> <img src=" ' + item + ' "></div></div>';
        mesa.appendChild(cardHtml);
    });
}
    