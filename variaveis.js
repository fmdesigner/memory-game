/* Arrays com os cards */
var movimentos = 0;
var segundos;
var minutos;
var cronometro;
const modais = document.querySelectorAll('.modal');
const fraseh3 = document.querySelector('.frases h3');

const grupoCards = [["imgs/img-gato-1.png", "imgs/img-gato-2.png"], ["imgs/img-gato-3.png", "imgs/img-gato-4.png"], ["imgs/img-gato-5.png", "imgs/img-gato-6.png"]]

var nivelAtual = 0;
var niveis = [
    {
        cards: grupoCards[0],
        maxMovimentos: 3,
        minutos: 0,
        segundos: 30,
        frase: 'Encontre os pares dos gatinhos para passar de Nível!'
    },
    {
        cards: grupoCards[0].concat(grupoCards[1]),
        maxMovimentos: 8,
        minutos: 0,
        segundos: 60,
        frase: 'Nível 2! Encontre todos os pares!',
        
    },
    {
        cards: grupoCards[0].concat(grupoCards[1], grupoCards[2]),
        maxMovimentos: 12,
        minutos: 1,
        segundos: 30,
        frase: 'Nível final! Boa sorte!'
    }
];
