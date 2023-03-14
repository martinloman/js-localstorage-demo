// Eventlyssnare på knappen som anropar funktionen
// addProductToLocalStorage() med en hårdkodad produkt.
document.getElementById("addToCart").addEventListener("click", () => {
  addProductToLocalStorage({ name: "Test", price: 20 })
})

/**
 * Lägger till objektet product i en array i localStorage som heter products.
 * @param {object product} product ett objekt som läggs in i en array i localStorage.
 */
function addProductToLocalStorage(product) {
  // Hämta ut alla produkter som finns i localStorage
  // JSON.parse(string) tar en sträng i JSON-format och gör ett javascript-objekt av det.
  let products = JSON.parse(localStorage.getItem("products"))

  // kontrollera om det fanns en array i localStorage
  if (products && Array.isArray(products)) {
    // OM det fanns en array i localStorage, lägg till product.
    products.push(product)
  } else {
    // om det INTE fanns en array i localStorage så skapa en med product i.
    products = [product]
  }

  // Spara arrayen med produkter i localStorage igen.
  // JSON.stringify(objekt) skapar en sträng på JSON-format av ett objekt.
  localStorage.setItem("products", JSON.stringify(products))
}
