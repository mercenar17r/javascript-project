let shop = document.getElementById("shop");
let shopItemsData = [
  {
    id: "1",
    name: "Casual Shirt",
    price: 45,
    desc: "  Lorem ipsum dolor sit amet consectetur, adipisicing elit ",
    img: "images/img-1.jpg",
  },
  {
    id: "2",
    name: "Office Shirt",
    price: 35,
    desc: "  Lorem ipsum dolor sit amet consectetur, adipisicing elit ",
    img: "images/img-2.jpg",
  },
  {
    id: "3",
    name: "T Shirt",
    price: 33,
    desc: "  Lorem ipsum dolor sit amet consectetur, adipisicing elit ",
    img: "images/img-3.jpg",
  },
  {
    id: "4",
    name: "Mens Suit",
    price: 65,
    desc: "  Lorem ipsum dolor sit amet consectetur, adipisicing elit ",
    img: "images/img-4.jpg",
  },
];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData.map((item) => {
    return `
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
      `;
  })).join();
};

generateShop();
