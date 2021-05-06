const $root = document.getElementById("root");
// получили с бекенда данные
const data = [
  {
    category: "Aксесуары",
    products: [
      {
        id: "xjh1jhc2hj31",
        image: "url",
        name: "Наушники",
        price: "1000 сом",
        rating: 5,
      },
    ],
  },
];

$root.innerHTML = `
      ${data
        .map((section) => createSection(section.category, section.products))
        .join("")}
    `;

function createSection(category, products) {
  return `
      <div class="container">
      <div class="wrapper">
          <main>
              <div class="main-txt">
                  <h1>${category}</h1>
              </div>
              <div class="main-sections">
                  <div class="box">
                  ${products.map(createCard).join("")}
                  </div>
              </div>
          </main>
      </div>
  </div>
      `;
}

function createCard(product) {
  return `
      <div class="item-box">
      <img src="${product.image}" alt="">
  </div>
  <div class="txt-box">
      <p class="name-product">${product.name}</p>
      <p class="price-product">${product.price}</p>
  </div>
  <div class="review-box">
      <img src="./images/Vector.png" alt="">
      <img src="./images/Vector.png" alt="">
      <img src="./images/Vector.png" alt="">
      <img src="./images/Vector.png" alt="">
  </div>
        `;
}
