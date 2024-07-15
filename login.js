import { getToken } from './getToken';
import './login-style.css';

const token = getToken();

if (token && token.access_token) {
  window.location.href = 'home.html';
}

document.getElementById('login-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^[a-zA-Z0-9]{3,30}$/;

  if (!emailPattern.test(email)) {
    errorMessage.textContent = 'Invalid email address.';
    return;
  }

  if (!passwordPattern.test(password)) {
    errorMessage.textContent = 'Password must be 3-30 characters and contain only letters and numbers.';
    return;
  }

  errorMessage.textContent = '';

  const payload = {
    email: email,
    password: password
  };

  try {
    const response = await fetch('https://devmarket-nknv.onrender.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      const token = await response.json();

      if (!token.access_token) {
        window.alert("Login failed! Please try again later.");
        return;
      }

      try {
        const response = await fetch('https://devmarket-nknv.onrender.com/api/me', {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token.access_token}`,
          },
        });

        if (response.ok) {
          const user = await response.json();
          if (user.role !== "admin") {
            window.alert("You are not an admin user!");
            return;
          }
          localStorage.setItem("token", JSON.stringify(token));
          window.location.href = 'home.html';
        } else {
          window.alert("User not found! Please try again later.");
        }

      } catch (error) {
        window.alert("An unexpected error occurred. Please try again later.");
      }

    } else {
      window.alert("Login failed! Username or password is wrong!");
    }
  } catch (error) {
    window.alert("An unexpected error occurred. Please try again later.");
  }
});