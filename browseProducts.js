import './style.css';
import { showProductContainer } from "./homeProductCards";
import { getCartProduct } from './getCartProducts';

const pageName = window.location.href.split('/').pop().split('.')[0];

async function fetchProducts() {
    try {
        const response = await fetch(`https://devmarket-nknv.onrender.com/api/products/specific/${pageName}`);
        const products = await response.json();
        showProductContainer(products, 'browseProductsContainer');
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

fetchProducts();
getCartProduct();