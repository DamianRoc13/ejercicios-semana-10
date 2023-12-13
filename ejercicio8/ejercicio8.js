`use strict`

let fila = 'LAB2#B';
let cod = 0;
let letra = fila.indexOf('#');

let siguienteLetra = fila.charCodeAt (letra+1); // devuelve el valor Unicode del carácter B

cod = siguienteLetra + 1;
alert("La siguiente fila es: " + String.fromCodePoint(cod)); //String.fromCodePoint(cod) devuelve en texto el UniCode sumado en cod


