const aboutHTML = `<div class="container">
      <h2 class="section-common--heading">Why Choose Dev Market</h2>
      <p class="section-common--subheading mt-1">
        Explore Dev Market Store for premier gadgets and effortless shopping, ensuring tech excellence and customer satisfaction.
      </p>
    </div>

    <div class="container grid grid-three--cols">
      <div class="choose-left-div text-align--right">
        <div class="why-choose--div" data-aos="zoom-in-up" data-aos-delay="0">
          <p class="common-text--highlight">1</p>
          <h3 class="section-common--title">Wide Selection</h3>
          <p>
            Dev Market boasts an extensive collection of electronics, from cutting-edge laptops to advanced wearable tech, guaranteeing you discover everything necessary to enhance your digital experience and fulfill your technology desires.
          </p>
        </div>

        <div class="why-choose--div" data-aos="zoom-in-up" data-aos-delay="300">
          <p class="common-text--highlight">2</p>
          <h3 class="section-common--title">Quality Assurance</h3>
          <p>
            At Dev Market, each product is subjected to stringent quality inspections, ensuring dependability and excellence, allowing you to purchase with peace of mind, knowing you're receiving top-tier items.
          </p>
        </div>

        <div class="why-choose--div" data-aos="zoom-in-up" data-aos-delay="600">
          <p class="common-text--highlight">3</p>
          <h3 class="section-common--title">Competitive Prices</h3>
          <p>
            Benefit from Dev Market's affordable pricing on premium electronics, making cutting-edge technology available to everyone without sacrificing quality or efficiency, ensuring you get the best value.
          </p>
        </div>
      </div>
      <div class="choose-center-div" data-aos="zoom-in" data-aos-delay="300">
        <figure>
          <img src="./images/about.png" alt="Image not found!" />
        </figure>
      </div>
      <div class="choose-right-div">
        <div class="why-choose--div text-align--left" data-aos="zoom-in-up" data-aos-delay="0">
          <p class="common-text--highlight">4</p>
          <h3 class="section-common--title">Expert Guidance</h3>
          <p>
            Our experienced team offers professional advice, assisting you in selecting the perfect device to suit your requirements and tastes, ensuring you make well-informed choices throughout your shopping experience.
          </p>
        </div>

        <div class="why-choose--div text-align--left" data-aos="zoom-in-up" data-aos-delay="300">
          <p class="common-text--highlight">5</p>
          <h3 class="section-common--title">Convenient Shopping</h3>
          <p>
            Shopping at Dev Market is simple and hassle-free. Our intuitive website and safe payment methods provide a smooth journey from browsing to purchase, all while you enjoy the comfort of home.
          </p>
        </div>

        <div class="why-choose--div text-align--left" data-aos="zoom-in-up" data-aos-delay="600">
          <p class="common-text--highlight">6</p>
          <h3 class="section-common--title">Excellent Service</h3>
          <p>
            Dev Market is dedicated to offering outstanding service to our customers. From quick responses to questions to timely processing of orders and shipments, we focus on your satisfaction at every stage.
          </p>
        </div>
      </div>
    </div>`;

const aboutElement = document.querySelector(".section-why--choose");
aboutElement.insertAdjacentHTML("afterbegin", aboutHTML);