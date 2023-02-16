// Opdracht 3a //
const tvList = document.getElementById("opdracht-3_a");

const listItem = inventory.map((tvItem) => {
    return `<li>${tvItem.brand}</li>`
});
tvList.innerHTML = `${listItem.join(" ")}`;