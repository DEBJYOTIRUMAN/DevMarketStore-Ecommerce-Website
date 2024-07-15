export const homeQuantityToggle = (event, _id) => {
  const currentCardElement = document.querySelector(`#card${_id}`);

  const productQuantity = currentCardElement.querySelector(".productQuantity");

  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

  if (event.target.className === "cartIncrement") {
    quantity += 1;
  }

  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  productQuantity.innerText = quantity;
  productQuantity.setAttribute("data-quantity", quantity.toString());
  return quantity;
};
