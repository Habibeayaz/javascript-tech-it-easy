
/// Opdracht 1a ///
const tvSort = inventory.filter ((tvType) => {
    return tvType.brand;
});
console.log(tvSort);

/// Opdracht 1b ///
const soldOut = inventory.filter ((tvSoldout) => {
    return tvSoldout.originalStock === tvSoldout.sold;
});
console.log(soldOut);

/// Opdracht 1c ///
const tvAmbilight = inventory.filter ((tvAmbilight) => {
    return tvAmbilight.options.ambiLight;
});
console.log(tvAmbilight);

// Opdracht 1d ///
/*function sortPrice(Array) {
  inventory.sort((a, b) =>
  {
    if (a.price > b.price)
  return 1
    else if (a.price < b.price) {
  return -1
} else {
  return 0
});
  }
console.log(inventory);*/

inventory.sort((a, b) => (a.price > b.price ? 1 : -1));
console.log(inventory);