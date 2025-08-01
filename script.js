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
/*
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

}*/

//esercizio 2 if/else if/else
    

/* let temperatura = prompt("Quanti gradi ci sono oggi?")
if (temperatura < 20 && temperatura > 0) {
console.log("non ci sono piu’ le mezze stagioni");


}else if(temperatura >= 30 ){
console.log("lu mare, lu sole, lu ientu");


}else if(temperatura < 30 && temperatura >= 20 ){
console.log("mi dia una peroni sudata");


}else if(temperatura < 0 && temperatura > -10 ){
console.log("non e' tanto il freddo quanto l'umidità");


}else if(temperatura <= -10 ){
console.log("copriti…ancora ti raffreddi");


}*/
// esercizio 2 switch 
/*let temperatura = prompt("Quanti gradi ci sono oggi?")
let risp
switch (true) {
case ( temperatura < 20 && temperatura > 0):
risp = "non ci sono piu’ le mezze stagioni";
console.log(risp);

break;
case ( temperatura >= 30):
risp = "lu mare, lu sole, lu ientu";
console.log(risp);

break;
case ( temperatura < 30 && temperatura >= 20):
risp = "mi dia una peroni sudata";
console.log(risp);

break;
case ( temperatura < 0 && temperatura > -10):
risp = "non e' tanto il freddo quanto l'umidità";
console.log(risp);

break;
case ( temperatura <= -10):
risp = "copriti…ancora ti raffreddi";
console.log(risp);

break;

}*/
// esercizio 3 cicli
/*let num = 2
for (let i = 0; i <= 10; i++) {
let risultato = 2*i;
console.log( risultato ); 
}*/
// esercizio 4 cicli
/*let num = 2
let sommadisp = 0
let contdisp = 0
for (let i = 0; i <= 10; i++) {
let risultato = 2*i;
console.log( risultato );
}
for (let disp = 1; disp <= 20; disp++) {
if (disp % 2 !== 0) {

sommadisp += disp;
contdisp++;
}
}
let media = sommadisp/contdisp;
console.log( "la media dei numeri dispari e", media);*/

//esercizio 5
let bevanda
while (true) {
    bevanda= prompt( "inserici un nuumero per selezionare una bevanda:\n1 - Acqua \n2 - Fanta \n3 - Sprite");
    if (bevanda === "1" || bevanda === "Acqua") {
        console.log( "Hai selezionato Acqua");
        break;
        
    } else if (bevanda === "2" || bevanda === "Fanta") {
        console.log( "Hai selezionato Fanta");
        break;
        
        
    }else if (bevanda === "3") {
        console.log( "Hai selezionato Sprite" || bevanda === "Sprite");
        break;
        
    }else {
        console.log("Selezione errata,Inserisci :\n1 - Acqua \n2 - Fanta \n3 - Sprite ");
        
    }
}

