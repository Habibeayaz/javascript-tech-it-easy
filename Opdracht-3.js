// Opdracht 3a //
const tvList = document.getElementById("tv-list");

const listItem = inventory.map((tvItem) => {
    return <li>${tvItem.brand}</li>
});
tvList.innerHTML = ${listItem.join)(" ")};