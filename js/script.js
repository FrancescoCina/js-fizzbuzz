/* 

Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

*/

// Passaggi
/* 
1- creo un for (ciclo) che stampi i numeri fino a 100. 
2- per i multipli sia di 3 che di 5 sostituisco con FizzBuzz;
3- per i multipli di 3 sostituisco con Fizz; 
4- per i multipli di 5 sostituisco con Buzz;
5- pusho in un array;
6- stampo l'array sia in console con table che in html;

*/


// Primo passaggio

var displayNumber = document.getElementById("numbers");

var number = 0;

var listNumbers = [];

for (var i = 1; i <= 100; i++){
    number = i;

    if ((number % 5 === 0) && (number % 3 === 0)) {
        number = "FizzBuzz";
        console.log(number);
        listNumbers.push(number);
        
    }   else if (number % 3 === 0) {
        number = "Fizz";
        console.log(number);
        listNumbers.push(number);

    }   else if (number % 5 === 0) {
        number = "Buzz";
        console.log(number);
        listNumbers.push(number);

    } else {
        console.log(number);
        listNumbers.push(number);
    }
}

console.table(listNumbers);

displayNumber.innerHTML = listNumbers;



