/* esercizio 1  if/else if/else
    let v =28
if (v < 18) {
console.log( "insufficente")

}else  if (v >= 18 && v <21) {
console.log( "sufficente");

}else if(v >= 21 && v <24 ) {
console.log( "buono");

}else if(v >= 24 && v <27 ) {
console.log( "distinto")

}else if(v >= 27 && v <=29 ) {
console.log( "ottimo")

}else if(v = 30) {
console.log( "eccellente")

}*/


// esercizio 1 switc
let v = 30
let risultato

switch(true){
    case (v < 18 && v >= 0):
    risultato =  "insufficente";
    console.log(risultato);
    break;

    case (v >= 18 && v < 21):
    risultato =  "sufficente";
    console.log(risultato);
    break;

    case (v >= 21 && v < 24):
    risultato =  "buono";
    console.log(risultato);
    break;

    case (v >= 24 && v < 27):
    risultato =  "distinto";
    console.log(risultato);
    break;

    case (v >= 27 && v <= 29):
    risultato =  "ottimo";
    console.log(risultato);
    break;
    
    case (v == 30):
    risultato =  "eccellente";
    console.log(risultato);
    break;
    
}