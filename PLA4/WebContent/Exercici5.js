/**
 Fer extensiu l'exercici 4 permetent que l'usuari introdueixi la lletra a buscar 
 */




var posA = 0;																				// es crea una variable per guardar la primera vegada que troba la A a la cadena
var caracterUsuari = prompt ("Introdueix la lletra a buscar (en majuscules) : ", " "); 		// es crea variable que contindrà la lletra que l'usuari escriurà

function buscarA(cadena){																	// variable per buscar A a la cadena
	for (var i = 0; i < cadena.length; i++ ){												// la variable i recorre tots els caracters de la cadena
		if (cadena[i] == caracterUsuari) {													// si la posició en la que estem és igual a A hi sumem 1 a la variable countA
			 posA = i;
			 break;
		}else{																				// si el caràcter de la cadena que estem mirant no és A, el valor de countA es manté igual
			 posA;
		}
	}
	return posA;																			// tornem el valor de countA al acabar la funció
}