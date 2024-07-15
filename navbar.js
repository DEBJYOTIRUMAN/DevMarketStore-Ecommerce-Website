const navbarHTML = `<section class="top_txt">
      <div class="head container">
        <div class="head_txt">
          <p>Welcome to Dev Market Store.</p>
        </div>
        <div class="head_link">
          <a href="orders.html">Orders</a>
          <a href="about.html">About</a>
          <a href="contact.html">Contact</a>
          <a id="logoutLink" href="">Logout</a>
        </div>
      </div>
    </section>
    
    <div class="container">
      <div class="navbar-brand">
        <a href="home.html">
          <img src="/images/logo.png" alt="Brand Logo" class="logo" />
        </a>
      </div>

      <nav class="navbar">
        <ul>
          <li class="nav-item">
            <a href="home.html" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="products.html" class="nav-link">Products</a>
          </li>
          <li class="nav-item">
            <a href="cart.html" class="nav-link add-to-cart-button" id="cartValue">
              <i class="fa-solid fa-cart-shopping"> 0 </i>
            </a>
          </li>
        </ul>
      </nav>
    </div>`

const navbarElement = document.querySelector(".section-navbar");
navbarElement.insertAdjacentHTML("afterbegin", navbarHTML);


document.getElementById('logoutLink').addEventListener('click', function (event) {
  event.preventDefault();
  localStorage.setItem("token", JSON.stringify({}));
  localStorage.setItem("cart", JSON.stringify({}));
  window.location.href = 'index.html';
});