<template>
  <header>
    <div class="header-wrapper">
      <div class="header-img">
        <figure>
          <img src="/images/author.jpg" alt="Author" />
          <figcaption>
            <em>Солонников Андрей. Автор сайта. JavaScript-разработчик</em>
          </figcaption>
        </figure>
      </div>
      <div class="header-text">
        <p>
          Меня зовут Андрей, мне 22 года. Я разработчик на языках
          JavaScript/TypeScript. Разрабатывл CRM/ERP системы, e-commerce и
          личные кабинеты. Работал с такими технологиями, как Node.js, React.js,
          Vue.js, MySQL, MongoDB, Express, Nest.js.
        </p>
        <div class="header-footer">
          <ButtonUI>
            <RouterLink to="/about" class="button-link">
              Узнать больше
            </RouterLink>
          </ButtonUI>
        </div>
      </div>
    </div>
  </header>
</template>
