import { fetchUserCart } from "./fetchUserCart";
import { getCartProduct } from "./getCartProducts";
import { getToken } from "./getToken";

const token = getToken();

const sendData = (cart, products) =>
    products.map(pro => {
        pro.qty = cart.items[pro._id];
        pro.totalPrice = pro.price * cart.items[pro._id];
        delete pro.category;
        delete pro.productType;
        delete pro.description;
        delete pro.bestseller;
        delete pro.createdAt;
        return pro;
    });

export const orderSuccess = async () => {
    let cart = await getCartProduct();

    if (!token.access_token) {
        return;
    }

    if (!cart.items) {
        return;
    }

    const products = await fetchUserCart();
    const filterData = sendData(cart, products);

    try {
        const response = await fetch("https://devmarket-nknv.onrender.com/api/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token.access_token}`,
            },
            body: JSON.stringify(filterData),
        });

        if (response.ok) {
            const flag = await handleCartDelete();
            if (flag) {
                localStorage.setItem("cart", JSON.stringify({}));
                window.alert("Order Successful! Thank you for your purchase. You can view your order details in the Orders section.");
                window.location.href = 'home.html';
            } else {
                window.alert("Order Failed! There was an issue with your purchase. Please try again later or contact support.");
            }
        }
    } catch (error) {
        console.error("Error sending order:", error);
    }
}

export const handleCartDelete = async () => {
    let cart = await getCartProduct();

    if (!token.access_token) {
        return;
    }

    if (!cart.items) {
        return;
    }

    try {
        const response = await fetch("https://devmarket-nknv.onrender.com/api/user-cart/delete", {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token.access_token}`,
            },
        });

        if (response.ok) {
            return true;
        } else {
            return false;
        }

    } catch (error) {
        console.error("Error deleting user cart:", error);
        return false;
    }
};