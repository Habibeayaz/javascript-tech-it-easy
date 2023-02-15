
// Opdracht 2a //
/*
Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.*/
const tvSold = inventory.map ((inventorySold) => {
    return inventorySold.sold;
});
console.log(tvSold);

let counterTvSold = 0;
for (let i = 0; i < tvSold.length; i++) {
    counterTvSold += tvSold[i];
}
console.log(counterTvSold);

// Opdracht 2b //
/*Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.*/

const totalTvSold = document.getElementById("total-tv-sold");

console.log(totalTvSold);

totalTvSold.textContent = counterTvSold;

// Opdracht 2c //
/*
Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
*/

// const purchase = inventory.map ((inventory) => {
//   return inventory.originalStock;
// });
// console.log(purchase);

/*
let countTvPurchased = 0;
for (let i = 0; i < countPurchased.length; i++) {
  countTvPurchased += originalStock[i];
}
console.log(countTvPurchased);
*/

// Opdracht 2d //
/*Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.*/
const purchase = document.getElementById("container-one");
purchase.textContent = "Er zijn " + purchase + " tv's ingekocht";

const totalTvPurchased = document.getElementById("total-tv-purchased");
console.log(totalTvPurchased);

totalTvPurchased.textContent = counterTvPurchased;

//Opdracht 2e //
/*Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.*/

/*function stockleft (originalStock, sold) {
  let result = [];
  for (let i = 0; i < originalStock.length; i++) {
    let stock = originalStock[i] - sold[i];
    if (stock > 0) {
      result.push(stock)
    }
  }
  console.log(result);
}*/

/*const tvLeft = document.getElementById( "total-tv-left");
console.log(tvLeft);

const tvLeft.textContent = tvLeft;*/
