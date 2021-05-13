function createSection(category, products) {
  return `
    <div class="main-pg">
    <div class="main-txt">
      <h1>${category}</h1>
    </div>
    <div class="main-sections">
      <div class="box">
      ${products.map(createCard).join("")}
      </div>
      <div class="box">
      ${products.map(createCard).join("")}
      </div>
      <div class="box">
      ${products.map(createCard).join("")}
      </div>
      <div class="box">
      ${products.map(createCard).join("")}
      </div>
    </div>
  </div>
        `;
}
