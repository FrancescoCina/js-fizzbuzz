/* 

Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

*/

// Passaggi
/* 
1- creo un for (ciclo) che stampi i numeri fino a 100. 
2- per i multipli di 3 sostituisco con Fizz; 
2- per i multipli di 5 sostituisco con Buzz;
3- per i multipli sia di 3 che di 5 sostituisco con FizzBuzz;


*/


// Primo passaggio


var number = 0;



for (var i = 1; i <= 100; i++){
    number = i;
    console.log(number);
    
    if (number % 3 === 0) {
        number = "Fizz";
        console.log(number);
    } 
}


