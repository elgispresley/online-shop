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

// const BASE_URL = "http://vblogg.herokuapp.com/";
// async function getProducts() {
//   try {
//     const response = await fetch(BASE_URL + "products");
//     const data = await response.json();

//     return(data);
//   } catch (e) {
//     alert(e.message);
//   }
// }

// function toCard(product) {
//   return `
//   <div>
//     Название: ${product.name}
//     Категория: ${product.category}
//     Цена: ${product.price}
//     Рейтинг: ${product.rate}
//     </div>
//   `;
// }

// async function loadProductPage() {
//   const $products = document.getElementById('products');
//   try {
//     const products = await getProducts()
//     const cardsTemplate = products.map(toCard)

//     $products.innerHTML = cardsTemplate
//   } catch (e){
//     alert('Ошибка, бро', + e.message)
//   }
// }

// document.addEventListener('DOMContentLoaded', loadProductPage)
