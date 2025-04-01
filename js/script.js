// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del
// passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste
// regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare
//   centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// ----------------------------------------- INPUT

const kmPrice = 0.21;

const kmQuantity = parseInt(prompt("Quanti Km dovrai percorrere?"));
const userAge = parseInt(prompt("Quanti anni hai?"));
const discountPriceOver65 = 40;
const discountPriceUnder18 = 20;

let totalPrice = kmQuantity * kmPrice;

// ----------------------------------------- VALIDAZIONE
if (isNaN(kmQuantity) || kmQuantity <= 0 || isNaN(userAge) || userAge <= 0) {
  alert("!Inserisci valori validi: i chilometri e l'età devono essere numeri maggiori di 0!");
}
// BIGLIETTO PREZZO INTERO
else if (userAge > 18 && userAge < 65) {
  alert("Il costo del tuo biglietto è di € " + totalPrice);
}
// SCONTO SE MINORENNI
else if (userAge < 18) {
  let discountUnder18 = (totalPrice * discountPriceUnder18) / 100;
  totalPrice = totalPrice - discountUnder18;
  alert("Il costo del tuo biglietto è di € " + totalPrice.toFixed(2) + " Con uno sconto di € " + discountUnder18.toFixed(2));
}
// SCONTO SE ANZIANI
else if (userAge > 65) {
  let discountOver65 = (totalPrice * discountPriceOver65) / 100;
  totalPrice = totalPrice - discountOver65;
  alert("Il costo del tuo biglietto è di € " + totalPrice.toFixed(2) + " Con uno sconto di € " + discountOver65.toFixed(2));
}
// GESTIONE ERRORI
else {
  alert("Errore generico, ricarica la pagina");
}
