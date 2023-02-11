let shop = document.getElementById("shop");
let shopItemsData = [
  {
    id: "dfggdgdg",
    name: "Casual Shirt",
    price: 45,
    desc: "  Lorem ipsum dolor sit amet consectetur, adipisicing elit ",
    img: "images/img-1.jpg",
  },
  {
    id: "dfgdhfhds",
    name: "Office Shirt",
    price: 35,
    desc: "  Lorem ipsum dolor sit amet consectetur, adipisicing elit ",
    img: "images/img-2.jpg",
  },
  {
    id: "dgdgdhfjhse",
    name: "T Shirt",
    price: 33,
    desc: "  Lorem ipsum dolor sit amet consectetur, adipisicing elit ",
    img: "images/img-3.jpg",
  },
  {
    id: "yuifgfdf",
    name: "Mens Suit",
    price: 65,
    desc: "  Lorem ipsum dolor sit amet consectetur, adipisicing elit ",
    img: "images/img-4.jpg",
  },
];

let basket = [
  {
    id: "sdfdgd",
    item: 1,
  },
];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((item) => {
      let { id, name, price, desc, img } = item;
      return `
    <div id=product-id-${id} class="item">
    <img src=${img} width="220" alt="" />
    <div class="details">
      <h3>${name}</h3>
      <p>
       ${desc}
      </p>
      <div class="price-quantity">
        <h2>$${price}</h2>
        <div class="buttons">
          <i onClick='decrement(${id})' class="bi bi-dash-lg"></i>
          <div id=${id} class="quantity">0</div>
          <i onClick='increment(${id})' class="bi bi-plus-lg"></i>
        </div>
      </div>
    </div>
  </div>
      `;
    })
    .join(""));
};

generateShop();

let increment = (id) => {
  let selectedItem = id;
  console.log(selectedItem.id);
};
let decrement = (id) => {
  let selectedItem = id;
  console.log(selectedItem.id);
};
let update = () => {};
