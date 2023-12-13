`use strict`

let plate = 'GSB-2995';
let post = plate.indexOf('-');

let numeros = plate.substring (post+1);

alert (numeros);