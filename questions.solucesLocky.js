/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimale.
 * Il peut y avoir plusieurs façons de faire.
 */
var tailleString = function (texte) {
    let a = texte.length;
    return a;
}
var remplaceECar = function (texte) {
    let a =  'Ce texte à une certaine taille';
    let rempl = a.replace(/Ce/g, "C ");/*Remplace "Ce" par "C " (avec espace) le "g" c'est pour global*/
    return rempl;
}
var concatString = function (texte1, texte2) {
    let a = texte1.concat(texte2);
    return a;
}
var afficherCar5 = function (texte) {
    let x = texte.charAt(4);/*va chercher le 5eme caractere*/
    return x;
}
var afficher9Car = function (texte) {
    let a = texte.slice(0,9); /*va prendre du 0 au 9eme caractere*/
    return a;
}
var majusculeString = function (texte) {
    let a = texte.toUpperCase();/*Transforme toutes les chaines en majuscules*/
    return a;
}
var minusculeString = function (texte) {
    let a = texte.toLowerCase();/*Transforme toutes les chaines en minuscules*/
    return a;
}
var SupprEspaceString = function (texte) {
    let a = texte.trim();
    
    return a;
}
var IsString = function (texte) {
    if (typeof texte==='string'){
        return true;
    }
}

var AfficherExtensionString = function (texte) {
    let a = texte.substring(texte.indexOf(".")+1); /*Va donner la partie après le "." */
    return a;
}
var NombreEspaceString = function (texte) {
    let a = texte.split(" ").length - 1;
    return a;
}
var InverseString = function (texte) {
    let a = texte;
    let b = "";
    for (i=texte.length -1; i>=0; i--){
        b = b + texte[i]; /*On increment les caracteres un par un à partir de la fin de a vers b*/
    }
    return b;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    let a = x ** y;
    return a;
}
var valeurAbsolue = function (nombre) { /*Math.abs(elem) pour retourner valeur absolue */
    let a = Math.abs(nombre);
    return a;
}
var valeurAbsolueArray = function (array) {/*ex : valeur absolue de -4 et +4 est 4 */
   return array.map(elem => { return  elem > 0 ? elem : (elem *= -1)});
   /*Verifie si chaque element du tableau est sup à 0, sinon faire (element * -1) pour trouver valeur absolue */
}
var sufaceCercle = function (rayon) { /* Rappel : 3,14 x rayon² */
    let a = Math.round(3.14 * (rayon ** 2));
    return a;
}
var hypothenuse = function (ab, ac) { /* Rappel : BC²=AB²+AC² => faire racine carré pour trouver BC */
    let a = (((ab ** 2) + (ac ** 2))**(1/2));
    return a;

}
var calculIMC = function (poids, taille) {
    let a = (poids/(taille * taille));
    a = a.toFixed(2); /* pour s'arreter juste 2 chiffres après la virgule */
    a = parseFloat(a); /*Convertit en decimal car sinon il est retourné en string*/
    return a;
}