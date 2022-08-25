# Целиус

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/flathead/Celius-Static)

## 🗃️ Структура

- [Главная страница](https://flathead.github.io/Celius-Static/)
  - [Заглушка (на обслуживании)](https://flathead.github.io/Celius-Static/maintenance)
  - [Личный кабинет](https://flathead.github.io/Celius-Static/account)
  - [Услуги центра](https://flathead.github.io/Celius-Static/services)
  - [Наши специалисты](https://flathead.github.io/Celius-Static/employee)
    - [Консультация специалиста (пример услуги)](https://flathead.github.io/Celius-Static/services/konsultacia-specialista)
  - [Сведения об образовательной организации](https://flathead.github.io/Celius-Static/information)
  - [Оплата и доставка](https://flathead.github.io/Celius-Static/delivery)
  - [Контакты](https://flathead.github.io/Celius-Static/contact)
  - [Семинары](https://flathead.github.io/Celius-Static/seminars)
  - [Учебный центр](https://flathead.github.io/Celius-Static/training)

## 📲 Версии

### — 0.3.2

- **Добавлено и адаптировано 2 страницы:**
  - [Семинары](https://flathead.github.io/Celius-Static/seminars) - в том числе работает фильтрация семинаров
  - [Учебный центр](https://flathead.github.io/Celius-Static/training)

### — 0.3.1

- Добавлена фавиконка
- Исправлены незначительные баги
- Исправлены пути

### — 0.3

- Объединены и минифицированы все CSS - SASS и библиотеки, а так же JS и библиотеки
- Добавлены hover-transition для ссылок, кнопок, элементов меню и управления
- **Добавлены 4 модальных окна:**
  - МО для вывода списка телефонов
  - МО для авторизации
  - МО для регистрации
  - МО для восстановления пароля
- **Добавлены и адаптированы 6 страниц:**
  - [Услуги центра](https://flathead.github.io/Celius-Static/services)
  - [Наши специалисты](https://flathead.github.io/Celius-Static/employee)
  - [Консультация специалиста (пример услуги)](https://flathead.github.io/Celius-Static/services/konsultacia-specialista)
  - [Сведения об образовательной организации](https://flathead.github.io/Celius-Static/information)
  - [Оплата и доставка](https://flathead.github.io/Celius-Static/delivery)
  - [Контакты](https://flathead.github.io/Celius-Static/contact)

### — 0.2

- Добавлена анимация при раскрытии и закрытии меню
- Добавлена и адаптирована страница [обслуживания](https://flathead.github.io/Celius-Static/maintenance)
- Добавлена и адаптирована страница [личного кабинета](https://flathead.github.io/Celius-Static/account)
- Добавлены плавные анимации при наведении на ссылки меню, а так же анимации открытия подменю (sub-menu)

### — 0.1

- Добавлена и адаптирована главная страница
- Добавлено бургерное меню

## ⚙️ Установка

Для развёртывания модулей статичного сайта необходимо открыть Терминал в папке с проектом выполнить в терминале команды ниже:

```sh
npm install
- или -
npm i
```

Для отслеживания изменений / автообновление browser-sync:

```sh
npm run dev
```

После запуска команды, задачи по автоматизации, прописанные в gulpfile будут выполняться в автоматическом режиме. Среди них:

- Объединение и минификация всех .scss + .css (библиотек)
- Объединение и минификация всех JS-библиотек и главного JS-файла (app.js) при обновлении / сохранении `assets/js/app.js`
- Обновление страницы сайта после любых изменений в JS/SASS/HTML
