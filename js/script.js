/*

Il programma dovrà chiedere all'utente:
il numero di chilometri che vuole percorrere
e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
Queste sono le regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 (fortunelli).


tools:

- const , let
- prompt
- if, else 

5
*/

const priceKm = 0.21;
const DiscountUnder18 = 20;
const DiscountOver65 = 40;
let priceTicket;



const userKm = prompt('Quanti chilometri devi percorrere?');

    console.log(userKm);


const userAge = prompt('Quanti anni hai?');

    console.log(userAge);


        

        if (userAge < 18) {

            priceTicket = userKm * priceKm * ((100 - DiscountUnder18) / 100);

            document.getElementById('text').innerHTML = (`Il prezzo del biglietto è: ${priceTicket.toFixed(2)} €`) 

        } else if (userAge > 65) {

            priceTicket = userKm * priceKm * ((100 - DiscountOver65) / 100);
            
            document.getElementById('text').innerHTML = (`Il prezzo del biglietto è: ${priceTicket.toFixed(2)} €`)

        } else {

            priceTicket = userKm * priceKm;
            
            document.getElementById('text').innerHTML = (`Il prezzo del biglietto è: ${priceTicket.toFixed(2)} €`)

        }

        
    


