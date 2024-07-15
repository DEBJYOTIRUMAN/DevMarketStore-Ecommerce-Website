const footerHTML = `<div class="footer-container container">
      <div class="content_1">
        <a href="home.html">
        <img src="./images/logo2.png" alt="Brand Logo" />
        </a>
        <p>
          Welcome to Dev Market Store, your one-stop shop for all your tech needs!
        </p>
        <img src="./images/cards.png" alt="Cards Logo" />
      </div>
      <div class="content_2">
        <h4>Electronics</h4>
        <a href="samsungmobiles.html">Samsung Mobiles</a>
        <a href="applemobiles.html">Apple Mobiles</a>
        <a href="mimobiles.html">Xiaomi Mobiles</a>
        <a href="oneplusmobiles.html">OnePlus Mobiles</a>
        <a href="oppomobiles.html">Oppo Mobiles</a>
        <a href="vivomobiles.html">Vivo Mobiles</a>
        <a href="tablets.html">Tablets</a>
        <a href="desktops.html">Desktops</a>
        <a href="components.html">Desktop Components</a>
        <a href="headphones.html">Headphones</a>
        <a href="monitors.html">Monitors</a>
        <a href="budgetlaptop.html">Budget Laptops</a>
        <a href="gaminglaptop.html">Gaming Laptops</a>
        <a href="studentlaptop.html">Students Laptops</a>
        <a href="professionalslaptop.html">Professionals Laptops</a>
      </div>
      <div class="content_3">
        <h4>Others</h4>
        <a href="haircare.html">Hair Care</a>
        <a href="skincare.html">Skin Care</a>
        <a href="makeup.html">Makeup & Nails</a>
        <a href="antivirus.html">Antivirus</a>
        <a href="games.html">Games</a>
        <a href="premiumapps.html">Professional Software</a>
        <a href="mobiles.html">Browse Smartphones</a>
        <a href="electronics.html">Browse Electronics</a>
        <a href="laptops.html">Browse Laptops</a>
        <a href="beauty.html">Browse Beauty</a>
        <a href="softwares.html">Browse Softwares</a>
        <a href="products.html">Explore Products</a>
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact Us</a>
        <a href="https://devmarket.vercel.app" target="_blank">Official Dev Market</a>
      </div>
      <div class="content_4">
        <h4>Newsletter</h4>
        <p>Be the first to know about new<br />arrivals, sales & promos!</p>
        <div class="f-mail">
          <input type="email" placeholder="Your Email" />
          <i class="bx bx-envelope"></i>
        </div>
        <hr />
      </div>
    </div>
    <div class="f-design">
      <div class="f-design-txt">
        <p>Design and Code by Dev Market Team</p>
      </div>
    </div>`;

const footerElement = document.querySelector(".section-footer");
footerElement.insertAdjacentHTML("afterbegin", footerHTML);