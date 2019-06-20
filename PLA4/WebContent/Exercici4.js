/**
 Donada una cadena de caràcters, escriure un programa que digui la posició
 de la primera lletra A dintre de la cadena
 */



var posA = 0;										// es crea una variable per guardar la primera vegada que troba la A a la cadena
function buscarA(cadena){							// variable per buscar A a la cadena
	for (var i = 0; i < cadena.length; i++ ){		// la variable i recorre tots els caracters de la cadena
		if (cadena[i] == "A") {						// si la posició en la que estem és igual a A hi sumem 1 a la variable countA
			 posA = i;
			 break;									// la funció break serveix per acabar el programa quan entrem a la condició la primera vegada.
		}else{										// si el caràcter de la cadena que estem mirant no és A, el valor de countA es manté igual
			 posA;
		}
	}
	return posA;									// tornem el valor de countA al acabar la funció
}