/**
 Donada una cadena de caracters que estara definida dintre del programa, 
 escriure un programa que conti el numero de vegades que apareix 
 la lletra A  en mostri el resultat
 */
var countA = 0;										// es crea variable per saber les vegades que es repeteix la lletra A
function buscarA(cadena){							// variable per buscar A a la cadena
	for (var i = 0; i < cadena.length; i++ ){		// la variable i recorre tots els caracters de la cadena
		if (cadena[i] == "A") {						// si la posició en la que estem és igual a A hi sumem 1 a la variable countA
			 countA ++;
		}else{
			 countA;								// si el caràcter de la cadena que estem mirant no és A, el valor de countA es manté igual
		}
	}
	return countA;									// tornem el valor de countA al acabar la funció
}