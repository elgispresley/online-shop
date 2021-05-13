function createCard(product) {
  return `
    <div class="item-box">
    <img src="${product.image}" alt="" />
  </div>
  <div class="txt-box">
    <p class="name-product">${product.name}</p>
    <p class="price-product">${product.price}</p>
  </div>
  <div class="review-box">
    <img src="../images/Vector.png" alt="" />
    <img src="../images/Vector.png" alt="" />
    <img src="../images/Vector.png" alt="" />
    <img src="../images/Vector.png" alt="" />
  </div>
  <div class="buttons-box">
    <button class="buy-btn" id="buy-button">Купить</button>
  </div>
          `;
}
