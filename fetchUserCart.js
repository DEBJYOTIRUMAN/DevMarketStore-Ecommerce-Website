import { getCartProduct } from "./getCartProducts";
import { getToken } from "./getToken";

const token = getToken();

export const fetchUserCart = async () => {
    let cart = await getCartProduct();

    if (!cart || !cart.items) {
        return;
    }

    if (!token || !token.access_token) {
        return;
    }

    try {
        const response = await fetch("https://devmarket-nknv.onrender.com/api/products/cart-items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ids: Object.keys(cart.items) }),
        });
        if (response.ok) {
            const products = await response.json();
            return products;
        }

    } catch (error) {
        console.error("Error fetching user cart:", error);
    }
}