/**
 Fer un programa que guardi en una llista les posicions de totes les lletres A 
 d'una cadena i en acabar en mostri cada una de les posicions trobades
 */

var posA = [0,0,0,0,0,0,0,0,0,0];				// array para guardar las posiciones en los caràcteres encontrados
var j = "";										// variable para indicar la posición donde esta la letra encontrada

function buscarA(cadena){						//realizamos la función buscar la letra A en la cadena
	for (var i=0; i<cadena.length; i++){		// recorrem cada caràcter de la cadena
		if (cadena[i] == "A") {					// comparem cada caràcter que recorrem amb la lletra A
			j++;								// afegim una unitat per posar la posició de la lletra A trobada
			posA[j] = i;						// guardem a la posició j de posA el numero de la posició de la lletra A trobada a la cadena
		}else{
			posA;								//en cas de no trobar una A, la posA es manté igual que abans
		}
			
	}
	return posA;
}

