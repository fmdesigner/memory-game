/*Finalizar*/
function finalizar() {
  clearInterval(cronometro);
  if (nivelAtual < niveis.length - 1) {
    document.querySelector('#nivel').classList.add('active');
    document.querySelector('.mesa').style.display = 'none';  
    document.querySelector('.frases').style.display = 'none';
      
  } else {
    document.querySelector('#endGame').classList.add('active');
    document.querySelector('.mesa').style.display = 'none';  
    document.querySelector('.frases').style.display = 'none';
  }
}

/*Game Over*/
function gameOver() {
    document.querySelector('#gameOver').classList.add('active');
    document.querySelector('.mesa').style.display = 'none';  
    document.querySelector('.frases').style.display = 'none';
    clearInterval(cronometro);
}

/*Fime Over*/
function timeOver() {
    document.querySelector('#timeOver').classList.add('active');
    document.querySelector('.mesa').style.display = 'none';  
    document.querySelector('.frases').style.display = 'none';
    clearInterval(cronometro);
}

