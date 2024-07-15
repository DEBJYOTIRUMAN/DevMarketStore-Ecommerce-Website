import { getToken } from "./getToken";

export const updateCartServer = async (cart) => {
    const token = getToken();

    if (!cart || !cart.items || Object.keys(cart.items).length === 0 || !token || !token.access_token) {
        return;
    }

    try {
        const response = await fetch("https://devmarket-nknv.onrender.com/api/user-cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token.access_token}`,
            },
            body: JSON.stringify({
                productId: Object.keys(cart.items),
                quantity: Object.values(cart.items),
            }),
        });

        if (!response.ok) {
            console.error("Failed to update user cart:", response.statusText);
        }
    } catch (error) {
        console.error("Error updating user cart:", error);
    }
}