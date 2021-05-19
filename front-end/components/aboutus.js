function createAboutus(dataAboutus) {
  return `
    <div class="main-aboutus">
    <div class="container">
    <h1 class="title"> О нас </h1>
    <p class="paragraph">${dataAboutus.text}
    </p>
    <img src="${dataAboutus.image-aboutus}" alt="">
    <div class="contact">
      <h3>Контакты</h3> 
      <br><a class="contact-link" href="">${dataAboutus.number}</a> | <a class="contact-link" href="">${dataAboutus.email}</a>
    </div>
    <img class="telegram" src="../images/telegram.v.png" alt="">
    <img class="instagram" src="../images/instagram.v.png" alt="">
    <h3 class="address">${dataAboutus.address}</h3>
    <img class="location" src="${dataAboutus.image-address}" alt="">
    </div>
    </div>
    `;
}
