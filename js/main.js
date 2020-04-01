// verifica corretto import script
console.log('me js is here');

/*
* Scrivi un programma che stampi i numeri da 1 a 100, ma:
  per i multipli di 3 stampi “Fizz” al posto del numero
  per i multipli di 5 stampi Buzz.
  per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/


for (var n = 1; n <= 100; n++) {

  // Prima condizione da verificare è SE numero MODULO 3 e 5 (AND) da RESTO 0
  if ((n % 3 == 0) && (n % 5 == 0)) {
    console.log('FizzBuzz')

  } else if (n % 5 == 0) {
    console.log('Buzz')

  } else if (n % 3 == 0) {
    console.log('Fizz')
    
  } else {
    console.log(n)
  }
}
