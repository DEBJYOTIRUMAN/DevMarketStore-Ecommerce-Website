import './style.css';
import { showProductContainer } from "./homeProductCards";
import { getCartProduct } from './getCartProducts';

async function fetchProducts() {
    try {
        const response = await fetch(`https://devmarket-nknv.onrender.com/api/products`);
        const products = await response.json();
        showProductContainer(products, 'browseAllProductsContainer');
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

fetchProducts();
getCartProduct();