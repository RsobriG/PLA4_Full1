/**
 Exercici 2 extensiu; el usuari introdueix la cadena de caràcters i el caràcter a buscar
 */


var countA = 0;																			// es crea variable per saber les vegades que es repeteix la lletra introduida per l'usuari
var cadenaUsuari = prompt ("Introdueix una cadena (en majuscules): "," ") 				// es demana una cadena on es guarda a cadenaUsuari
var caracterUsuari = prompt ("Introdueix la lletra a buscar (en majuscules): "," ")		// es demana la lletra a buscar i es guarda a caracterUsuari

function buscarA(cadenaUsuari){																// variable per buscar la lletra a la cadena
	for (var i = 0; i < cadenaUsuari.length; i++ ){											// la variable i recorre tots els caracters de la cadena
		if (cadenaUsuari[i] == caracterUsuari) {												// si la posició en la que estem és igual a la lletra intrduida per l'usuari hi sumem 1 a la variable countA
			 countA ++;
		}else{	
			 countA;																	// si el caràcter de la cadena que estem mirant no és la lletra introduida, el valor de countA es manté igual
		}
	}
	return countA;																		// tornem el valor de countA al acabar la funció
}