import './style.css';
import { getCartProduct } from './getCartProducts';
import { showToast } from './showToast';
import { updateCartValue } from './updateCartValue';
import { updateCartServer } from './updateCartServer';
import { handleCartDelete, orderSuccess } from './orderSuccess';
import { fetchUserCart } from './fetchUserCart';

let cart = getCartProduct();
const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");
let productSubTotal = document.querySelector(".productSubTotal");
let productFinalTotal = document.querySelector(".productFinalTotal");
const orderButton = document.querySelector(".order-button");

let total = 0;

async function renderCart() {
    if (!cart || !cart.items) {
        return;
    }

    const products = await fetchUserCart();
    showCartProduct(products);
    updateTotals();
}

const getQty = (productId) => {
    return cart.items[productId];
};

const getSum = (productId, price) => {
    return price * getQty(productId);
};

const incrementDecrement = (event, _id, price) => {
    const currentCardElement = document.querySelector(`#card${_id}`);
    const productQuantity = currentCardElement.querySelector(".productQuantity");
    const productPrice = currentCardElement.querySelector(".productPrice");

    let quantity = 1;

    let cart = getCartProduct();

    if (event.target.className === "cartIncrement") {
        const existingQty = cart.items[_id];
        const _cart = { ...cart };
        _cart.items[_id] = existingQty + 1;
        quantity = existingQty + 1;
        _cart.totalItems += 1;
        localStorage.setItem("cart", JSON.stringify(_cart));
        updateCartServer(_cart);
        updateCartValue(_cart);
    }

    if (event.target.className === "cartDecrement") {
        const existingQty = cart.items[_id];
        if (existingQty === 1) {
            return;
        }
        const _cart = { ...cart };
        _cart.items[_id] = existingQty - 1;
        quantity = existingQty - 1;
        _cart.totalItems -= 1;
        localStorage.setItem("cart", JSON.stringify(_cart));
        updateCartServer(_cart);
        updateCartValue(_cart);
    }
    productQuantity.innerText = quantity;
    productPrice.innerText = `₹${price * quantity}`;
    updateTotals();
};

const handleDelete = (productId, shortName) => {
    let cart = getCartProduct();

    if (!cart || !cart.items || !cart.items[productId]) {
        console.error("Cart or product not found.");
        return;
    }

    const qty = cart.items[productId];

    delete cart.items[productId];

    cart.totalItems -= qty;
    localStorage.setItem("cart", JSON.stringify(cart));

    if (Object.keys(cart.items).length === 0) {
        handleCartDelete();
    } else {
        updateCartServer(cart);
    }

    let removeDiv = document.getElementById(`card${productId}`);
    if (removeDiv) {
        removeDiv.remove();
    }

    showToast("delete", shortName);
    updateTotals();
    updateCartValue(cart);
};

const updateTotals = () => {
    const updatedCart = getCartProduct();
    total = 0;
    if (updatedCart && updatedCart.items) {
        for (let productId in updatedCart.items) {
            const productElement = document.getElementById(`card${productId}`);
            if (productElement) {
                const productPriceElement = productElement.querySelector(".productPrice");
                total += parseInt(productPriceElement.textContent.substring(1));
            }
        }
    }

    productSubTotal.textContent = `₹${total}`;
    productFinalTotal.textContent = `₹${total + 0}`;
};

const showCartProduct = (products) => {
    products.forEach((product) => {
        const { _id, productType, name, image, price } = product;
        const capitalizedProductType = productType.charAt(0).toUpperCase() + productType.slice(1);
        const shortName = name.split(" ").slice(0, 4).join(" ");

        let productClone = document.importNode(templateContainer.content, true);

        productClone.querySelector("#cardValue").setAttribute("id", `card${_id}`);

        productClone.querySelector(".category").textContent = capitalizedProductType;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productPrice").textContent = `₹${getSum(_id, price)}`;
        productClone.querySelector(".productQuantity").textContent = getQty(_id);

        productClone
            .querySelector(".stockElement")
            .addEventListener("click", (event) => {
                incrementDecrement(event, _id, price);
            });

        productClone
            .querySelector(".remove-to-cart-button")
            .addEventListener("click", () => handleDelete(_id, shortName));

        cartElement.appendChild(productClone);
    });
};

orderButton.addEventListener("click", () => orderSuccess());

renderCart();
