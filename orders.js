import { getCartProduct } from './getCartProducts';
import { getToken } from './getToken';
import './style.css';

const token = getToken();

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const fetchOrders = async () => {
    if (!token.access_token) {
        return;
    }

    try {
        const response = await fetch("https://devmarket-nknv.onrender.com/api/order", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token.access_token}`,
            },
        });

        if (response.ok) {
            const orders = await response.json();
            showOrders(orders);
        }
    } catch (error) {
        console.error("Error fetching orders:", error);
    }
};

const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

const showOrders = (orders) => {
    orders.forEach((order) => {
        const { productId, brand, name, image, totalPrice, qty, createdAt } = order;
        const capitalizedBrand = brand.charAt(0).toUpperCase() + brand.slice(1);

        let productClone = document.importNode(templateContainer.content, true);

        productClone.querySelector("#cardValue").setAttribute("id", `card${productId}`);

        productClone.querySelector(".category").textContent = capitalizedBrand;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productPrice").textContent = `₹${totalPrice}`;
        productClone.querySelector(".productTotalQuantity").textContent = `Quantity: ${qty}`;
        productClone.querySelector(".productOrderDate").textContent = `Date: ${formatDate(createdAt)}`;

        cartElement.appendChild(productClone);
    });
}

fetchOrders();
getCartProduct();