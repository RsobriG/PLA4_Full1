/**
 Exercici 1 extensiu; si la lletra la introdueix l'usuari per teclat
 */

var countA = 0;															// es crea variable per saber les vegades que es repeteix la lletra introduida per l'usuari
var caracterUsuari = prompt ("Introdueix la lletra a buscar (en majuscules): "," ")
function buscarA(cadena){												// variable per buscar la lletra a la cadena
	for (var i = 0; i < cadena.length; i++ ){							// la variable i recorre tots els caracters de la cadena
		if (cadena[i] == caracterUsuari) {											// si la posició en la que estem és igual a la lletra intrduida per l'usuari hi sumem 1 a la variable countA
			 countA ++;
		}else{
			 countA;													// si el caràcter de la cadena que estem mirant no és la lletra introduida, el valor de countA es manté igual
		}
	}
	return countA;														// tornem el valor de countA al acabar la funció
}