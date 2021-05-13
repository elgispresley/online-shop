const $root = document.getElementById('header')
$root.innerHTML = `
<header class="header">
        <div class="general">
      <div class="logo-box">
      <a href="./index.html" class="logo"><h1>optimus</h1> <br /><h3>market</h3></a>
      </div>
      <div class="tabs">
        <a class="link" href="./index.html">Главная</a>
        <a class="link" href="./categories.html">Категории</a>
        <a class="link" href="./aboutus.html">О нас</a>
        <a class="link" href="./sales.html">Скидки</a>
      </div>  
      <div class="login">
           <a class="login-link" href="#login">Войти</a>
      </div>
      <div id="login">
        <h3 class="entry-h3">Вход</h3>
        <a href="#" class="close">Закрыть</a>
        <input class="login-input" type="text" placeholder="Логин">
        <input class="password-input" type="text" placeholder="Пароль">
        <button class="entry-btn">Войти</button>
        <a class="forgot-pswrd" href="./pages/password.html">Забыли пароль?</a>
        <button class="regist-btn">Зарегистрироваться</button>
      </div>
    </div>
    </header>
  `