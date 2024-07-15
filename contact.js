import './style.css';
import { getCartProduct } from './getCartProducts';

getCartProduct();

document.getElementById('contact-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const payload = {
    name: name,
    email: email,
    message: message
  };

  try {
    const response = await fetch("https://devmarket-nknv.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      window.alert("Submit Successfully");
      window.location.href = 'home.html';
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
});