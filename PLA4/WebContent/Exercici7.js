/**
 Donada una cadena amb numeros de 0 a 9 es comptarà el numero de vegades que cada numero apareix i es 
 guardarà el resultat en una llista. La llista tindrà deu elements, 
 on el primer element serà el número de zeros trobats en la cadena, el segon, contindrà el numero de "1"s i així successivament
 */

var cadenaNumerica = prompt ("Intordueix una cadena de 0 a 9 (es poden repetir): ");
var llistaNumerica = [0,0,0,0,0,0,0,0,0,0];
var repeticions = 0;
var actualitzarValor = 0;

function ordenarCadenaNumerica (cadenaNumerica){
	for (var i=0; i<cadenaNumerica.length; i++){
		repeticions = 0;
		for (var j=0; j<=9; j++){										// amb j (que va de 0 a 9) comparem cada caracter de la cadena per cada valor de j
			if (cadenaNumerica[i] == j){								//sumar +1 la variable "repeticions" per saber la quantitat de j que estàn a la cadema.
				repeticions++;
				actualitzarValor = llistaNumerica[j];					//agafem el valor que té la llistaNumerica a la posj 
				actualitzarValor = actualitzarValor + repeticions;		//el valor agafat li sumem 1
				llistaNumerica[j] = actualitzarValor;					//actualitzem el valor de la posj de la llistaNumerica
			}else{
				llistaNumerica[j];
			
			}
			
		}
		
	}
	
	return llistaNumerica;
}