import { updateCartValue } from "./updateCartValue";

export const getCartProduct = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    return {};
  }
  
  updateCartValue(cart);

  return cart;
};
