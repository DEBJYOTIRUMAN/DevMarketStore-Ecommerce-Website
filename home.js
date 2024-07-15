import './style.css';
import { showProductContainer } from "./homeProductCards";
import { getCartProduct } from './getCartProducts';
import { getToken } from './getToken';
import { updateCartValue } from './updateCartValue';

const token = getToken();
let cart = getCartProduct();

async function fetchMobilesBestseller() {
  try {
    const response = await fetch('https://devmarket-nknv.onrender.com/api/products/bestseller/mobiles');
    const products = await response.json();
    showProductContainer(products, 'mobilesContainer');
  } catch (error) {
    console.error('Error fetching mobiles bestsellers:', error);
  }
}

async function fetchElectronicsBestseller() {
  try {
    const response = await fetch('https://devmarket-nknv.onrender.com/api/products/bestseller/electronics');
    const products = await response.json();
    showProductContainer(products, 'electronicsContainer');
  } catch (error) {
    console.error('Error fetching electronics bestsellers:', error);
  }
}

async function fetchLaptopsBestseller() {
  try {
    const response = await fetch('https://devmarket-nknv.onrender.com/api/products/bestseller/laptops');
    const products = await response.json();
    showProductContainer(products, 'laptopsContainer');
  } catch (error) {
    console.error('Error fetching laptops bestsellers:', error);
  }
}

async function fetchBeautyBestseller() {
  try {
    const response = await fetch('https://devmarket-nknv.onrender.com/api/products/bestseller/beauty');
    const products = await response.json();
    showProductContainer(products, 'beautyContainer');
  } catch (error) {
    console.error('Error fetching beauty bestsellers:', error);
  }
}

async function fetchSoftwareBestseller() {
  try {
    const response = await fetch('https://devmarket-nknv.onrender.com/api/products/bestseller/softwares');
    const products = await response.json();
    showProductContainer(products, 'softwaresContainer');
  } catch (error) {
    console.error('Error fetching softwares bestsellers:', error);
  }
}

async function fetchUserCart() {
  if (cart && cart.items) {
    updateCartValue(cart);
    return;
  }

  if (!token || !token.access_token) {
    return;
  }

  try {
    const response = await fetch("https://devmarket-nknv.onrender.com/api/user-cart", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    });

    const { productId, quantity } = await response.json();

    if (!cart) {
      cart = {};
    }

    if (!cart.items) {
      const data = {};
      const obj = {};
      let total = 0;

      if (!productId) {
        return;
      }

      for (let i = 0; i < productId.length; i++) {
        total += quantity[i];
        Object.defineProperty(obj, productId[i], {
          value: quantity[i],
          enumerable: true,
          writable: true,
          configurable: true,
        });
      }

      data.items = obj;
      data.totalItems = total;
      localStorage.setItem("cart", JSON.stringify(data));
      updateCartValue(data);
    } else {
      let _cart = { ...cart };

      if (!productId) {
        return;
      }

      for (let i = 0; i < productId.length; i++) {
        if (_cart.items[productId[i]]) {
          _cart.items[productId[i]] += quantity[i];
          _cart.totalItems += quantity[i];
        } else {
          _cart.items[productId[i]] = quantity[i];
          _cart.totalItems += quantity[i];
        }
      }

      localStorage.setItem("cart", JSON.stringify(_cart));
      updateCartValue(_cart);
    }
  } catch (error) {
    console.error("Error fetching user cart:", error);
  }
}

async function fetchAllBestsellers() {
  await fetchUserCart();
  fetchMobilesBestseller();
  fetchElectronicsBestseller();
  fetchLaptopsBestseller();
  fetchBeautyBestseller();
  fetchSoftwareBestseller();
}

document.addEventListener("DOMContentLoaded", () => {
  fetchAllBestsellers();
});