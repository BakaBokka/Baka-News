# Baka-News


***It's my YaP diploma project***  
*Написан как дипломный проект для курсе по фронтенд разработе на Яндекс Практикум.*
  
Сервис для анализа событий происходящих в мире. По запросу выводятся новости за
определённый период времени. На отдельной странице считается аналитика по запросу,
общее количество упоминаний и упоминания в заголовках новостных статей.
В диаграмме показывается статистика по датам в цифрах и в процентах.

### Основной функционал:
* Поиск новостей по запросу при помощи NewsApi
* Статистика по запросу собрана на странице Аналитика
* Проект собран при помощи Webpack
* Свёрстаны три страницы
* Подключён слайдер Swiper

## Планы по доработке:  
* Дооформить в своём стиле. Логотип, аватар, тексты
* Анимация текста в блоке Search
* Поправить адаптив карточек на маленьких разрешениях. Сейчас заменящая картинка слишком сильно прижимается к верхнему краю
* Разработать возможность для пользователя менять переменные: период поиска, общее количество новостей, источник



### Стэк технологий:
ES6, Babel, OOP, CSS3, HTML5, Webpack, OOP, BEM

### Пакеты которые используются в сборках:
* [Babel CLI](https://babeljs.io/docs/en/babel-cli#docsNav)
* [Babel Core](https://babeljs.io/docs/en/babel-core)
* [Babel Preset Evnvironment](https://babeljs.io/docs/en/babel-preset-env#docsNav)
* [Сore JS](https://github.com/zloirock/core-js#readme)
* [PostCSS](https://postcss.org/)
* [Define plugin](https://webpack.js.org/plugins/define-plugin/)
* [Style loader](https://github.com/webpack-contrib/style-loader)
* [Optimize CSS assets](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin)
* [File loader](https://github.com/webpack-contrib/file-loader)
* [Image Webpack loader](https://www.npmjs.com/package/image-webpack-loader)
* [Cross-Env](https://www.npmjs.com/package/cross-env)
* [Слайдер — Swiper](http://idangero.us/swiper/)

### Инструкции по запуску:
* Скачать или склонировать репозиторий
* Установить зависимости при помощи npm — `<npm i>`
* Запустить в development режиме — `<npm run dev>`
* Запустить сборку production-билда — `<npm run build>`
* Разместить production-билд на github pages — `<npm run deploy>`

## Ссылка на github pages:
https://bakabokka.github.io/Baka-News/
