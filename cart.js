let cartDiv = document.getElementById("cart")

//localStorage.getItem("nyckel") hämtar värdet på det som sparats i LocalStorage med nyckeln "nyckel".
// JSON.parse(string) tar en sträng i JSON-format och gör ett javascript-objekt av det.
let products = JSON.parse(localStorage.getItem("products"))

//Variabeln products innehåller nu en array med alla produkter som sparats i LocalStorage.
console.log(products)

if (Array.isArray(products)) {
  products.forEach((product) => {
    cartDiv.insertAdjacentHTML(
      "beforeend",
      `<div>Namn: ${product.name} Pris: ${product.price}</div>`
    )
  })
} else {
  cartDiv.insertAdjacentHTML("beforeend", `<div>Varukorgen är tom.</div>`)
}
