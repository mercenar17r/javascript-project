let shop = document.getElementById("shop");
let basket = JSON.parse(localStorage.getItem("data")) || [];

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
  basket.push({ id: selectedItem.id, item: 1 });
  console.log(basket);
};
let decrement = (id) => {
  let selectedItem = id;
};
update(selectedItem.id);
basket = basket.filter((x) => x.item !== 0);
// console.log(basket);
localStorage.setItem("data", JSON.stringify(basket));
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
