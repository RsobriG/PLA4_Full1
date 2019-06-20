/**
Fent servir l'exercici 6 com a referencia, si el programa detecta algún caràcter numèric enlloc de caracter alfanumèric,
en la cadena donarà un missatge d'error indicant quin és el caràcter que s'ha trobat i en quina posició.
 */

var cadenaUsuari = prompt("Introduir cadena que contengui lletres i algun numero: ", "");
var llistaNum = [];


function trobarNumCadena(cadenaUsuari){
	for (var i=0; i<cadenaUsuari.length; i++){
		llistaNum[i] = "<BR>" + cadenaUsuari[i]+"<BR>";
		for (var j=0; j<=9; j++){
			if (cadenaUsuari[i] == j){
				llistaNum[i] = "<BR>"+"pos" + i + ":" + " s'ha trobat el num " + j+"<BR>";
			}
		}
	}
	return llistaNum;
}