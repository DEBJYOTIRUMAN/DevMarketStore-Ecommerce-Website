import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }

  const lastSpace = text.lastIndexOf(' ', maxLength);
  return text.substring(0, lastSpace) + ' ...More';
};

export const showProductContainer = (products, targetContainerId) => {
  const productContainer = document.querySelector(`#${targetContainerId}`);

  if (!products || !productContainer) {
    return false;
  }

  products.forEach((product) => {
    const { _id, productType, name, image, description, price } = product;

    const capitalizedProductType = productType.charAt(0).toUpperCase() + productType.slice(1);
    const truncatedDescription = truncateText(description, 100);
    const shortName = name.split(" ").slice(0, 4).join(" ");

    const productTemplate = document.querySelector("#productTemplate");
    const productClone = document.importNode(productTemplate.content, true);

    productClone.querySelector("#cardValue").setAttribute("id", `card${_id}`);

    productClone.querySelector(".category").textContent = capitalizedProductType;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productDescription").textContent = truncatedDescription;
    productClone.querySelector(".productPrice").textContent = `₹${price}`;

    productClone.querySelector(".stockElement").addEventListener("click", (event) => {
      homeQuantityToggle(event, _id);
    });

    productClone.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
      addToCart(event, _id, shortName);
    });

    productContainer.appendChild(productClone);
  });
};
