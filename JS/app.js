var sentence = prompt("ingrese una frase");// creamos nuestro comando prompt
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" ; //declaramos nuestra variable alphabet cuyos elemntos son las letras del alfabeto.
var position = alphabet.indexOf(alphabet[i]);
var division1 = (position + 33)%52// declaramos la variable divison1 que nosa da el residuo de dicha division.
var division2=  52*q +residue// declaramos la variable division2 en la que ingresamos los componentes de una division .
 while(i < sentence.length)// un ciclo while para que procedimiento se repita hasta que culmine las letras de la frase

   for(i=0;i<52;i++) {//aqui comenzamos con for para que recorra toso los elementos de nuestra variable principal alphabet.

       if(sentence[i] == alphabet[i]){//la condicional nos sirve para ver que  si la primera letra de la frase ingresada es igual a la letra en nuestra variable alphabet
        return position;// si se cumple entonces nos retornará position que en si es la posicion de la primera letra de la frase esto se repite con cada letra gracias a for
     }
     }
      if ( q => 1  ) { // esta otra condicional para ver las restricciones del cociente.
     return [residue+1]//nos retorna la letra en residue aumentado en 1 .

  }         else {

       return position; //sino solo nos retorna la posicion de la letra.
  }
 }
var rest =(position + 34)// La cual ingresaremos en una variable.
console.log([rest])// nos muestra la letra en rest.
