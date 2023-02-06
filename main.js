let shop = document.getElementById("shop");

let generateShop = () => {
  return (shop.innerHTML = `
  <div class="item">
  <img src="images/img-1.jpg" width="220" alt="" />
  <div class="details">
    <h3>Casual Shirt</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Accusantium!
    </p>
    <div class="price-quantity">
      <h2>$ 35</h2>
      <div class="buttons">
        <i class="bi bi-dash-lg"></i>
        <div class="quantity">0</div>
        <i class="bi bi-plus-lg"></i>
      </div>
    </div>
  </div>
</div>
    `);
};

generateShop();
