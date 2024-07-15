const policyHTML = `<div class="container grid grid-four--cols">
          <div class="div-policy">
            <div class="icons">
              <i class="fa-solid fa-truck-fast"></i>
            </div>
            <div class="div-policy-text">
              <p>Worldwide Shipping</p>
              <p>Order Above ₹499</p>
            </div>
          </div>
    
          <div class="div-policy">
            <div class="icons">
              <i class="fa-solid fa-rotate"></i>
            </div>
            <div class="div-policy-text">
              <p>Easy 30 Day Returns</p>
              <p>Back Returns in 7 Days</p>
            </div>
          </div>
    
          <div class="div-policy">
            <div class="icons">
              <i class="fa-solid fa-hand-holding-dollar"></i>
            </div>
            <div class="div-policy-text">
              <p>Money Back Guarantee</p>
              <p>Guarantee With in 30 Days</p>
            </div>
          </div>
    
          <div class="div-policy">
            <div class="icons">
              <i class="fa-solid fa-headset"></i>
            </div>
            <div class="div-policy-text">
              <p>Easy Online Support</p>
              <p>24/7 Any Time Support</p>
            </div>
          </div>
        </div>`

const policyElement = document.querySelector(".section-policy");
policyElement.insertAdjacentHTML("afterbegin", policyHTML);