const cartValue = document.querySelector("#cartValue");

export const updateCartValue = (cart) => {
  return (cartValue.innerHTML = ` <i class="fa-solid fa-cart-shopping"> ${cart.totalItems ? cart.totalItems : 0} </i>`);
};
