import { getCartProduct } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartServer } from "./updateCartServer";
import { updateCartValue } from "./updateCartValue";

export const addToCart = (event, _id, shortName) => {
  event.preventDefault();
  let cart = getCartProduct();
  const currentProduct = document.querySelector(`#card${_id}`);
  let quantity = currentProduct.querySelector(".productQuantity").innerText;
  quantity = Number(quantity);
  let _cart = { ...cart };

  if (!_cart.items) {
    _cart.items = {}
  }

  if (_cart.items[_id]) {
    _cart.items[_id] += quantity;
  } else {
    _cart.items[_id] = quantity;
  }

  if (!_cart.totalItems) {
    _cart.totalItems = 0;
  }
  _cart.totalItems += quantity;
  localStorage.setItem("cart", JSON.stringify(_cart));
  updateCartServer(_cart);
  updateCartValue(_cart);
  showToast("add", shortName);
};
