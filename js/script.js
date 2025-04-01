// -------- CONFIGURAZIONE
const kmPrice = 0.21;
const discountPriceOver65 = 40;
const discountPriceUnder18 = 20;

// -------- INPUT
const userKm = parseInt(prompt("Quanti Km dovrai percorrere?"));
const userAge = parseInt(prompt("Quanti anni hai?"));

// -------- VALIDAZIONE INPUT
const isUserKmValid = !isNaN(userKm) && userKm > 0;
const isUserAgeValid = !isNaN(userAge) && userAge > 0;

let totalPrice = userKm * kmPrice;

// ----------------------------------------- ALGORITMO

if (isUserKmValid && isUserAgeValid) {
  if (userAge > 18 && userAge < 65) {
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
} else {
  alert("!Inserisci valori validi: i chilometri e l'età devono essere numeri maggiori di 0!");
}
