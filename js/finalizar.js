/*Game Over*/
function gameOver() {

  // console.log('game-over')
  
  document.querySelector('#gameOver').classList.add('active');
  document.querySelector('#nivel').style.display = 'none';
  document.querySelector('.mesa').style.display = 'none',
  document.querySelector('.frases').style.display = 'none',

  clearInterval(cronometro);
}

/*Finalizar*/
function finalizar() {

  clearInterval(cronometro);
  if (nivelAtual < niveis.length - 1) {
    document.querySelector('#nivel').classList.add('active');
    document.querySelector('.mesa').style.display = 'none';  
    document.querySelector('.frases').style.display = 'none';
    // console.log('finalizar')
  }
  else {
    document.querySelector('#endGame').classList.add('active');
    document.querySelector('.mesa').style.display = 'none';  
    document.querySelector('.frases').style.display = 'none';
  }
  
}


/*Fime Over*/
function timeOver() {
    document.querySelector('#timeOver').classList.add('active');
    document.querySelector('.mesa').style.display = 'none';  
    document.querySelector('.frases').style.display = 'none';
    clearInterval(cronometro);
}

