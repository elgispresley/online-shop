const fetchUrl = 'https://online-shoppp.herokuapp.com/api/category';

async function getDataFromBac() {
  try {
    
   const responce = await fetch(fetchUrl)
   const data = await responce.json()
   console.log(data)
   return data
  } catch (e) {
   alert ('Произошла ошибка' + e.message)
  }
}




function createCard(product) {
  return `
  <div class="box">
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
  </div>
          `;
}

function createCategorySectionWithProducts(section) {
  return `
  <div class="wrapper-main">  
    <div class="main-pg">
      <div class="main-txt">
        <h1>${section.category}</h1>
      </div>
      <div class="main-sections">
        ${section.products.map(createCard).join('')}
      </div>
    </div>
  </div>
  `;
}

const $products = document.getElementById('products');



async function loadMainPage () {
  const data = await getDataFromBac ()
  $products.innerHTML = data.data.map(createCategorySectionWithProducts).join('');

}
loadMainPage();

// const SECTIONS_FROM_BACKEND = [
//   {
//     category: "Aксесуары",
//     products: [
//       {
//         id: "xjh1jhc2hj31",
//         image: "url",
//         name: "Наушники",
//         price: "1000 сом",
//         rating: 5,
//       },
//]

