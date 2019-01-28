/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/poet_of_the_day.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data/poets-ru.json":
/*!********************************!*\
  !*** ./src/data/poets-ru.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

eval("module.exports = [{\"id\":\"0\",\"name\":\"Максим Богданович\",\"birthplace\":\"Минск\",\"photo\":\"./data/img/Bogdanovich1.jpg\",\"biography\":[{\"date\":\"9 декабря 1891\",\"description\":\"Максим Богданович родился в Минске. Прадед поэта по материнской линии был православным священником, дед — мелким чиновником. Отец Максима Адам Егорович служил учителем. Он пережил сына, впоследствии написав его биографию. У Максима было два брата — Вадим и Лев.\"},{\"date\":\"1892\",\"description\":\"Когда ребенку исполнилось всего несколько месяцев от роду, его отца перевели в Гродно. Здесь мальчик впервые приобщился к книгам. Адам Егорович был великим книголюбом, собирателем белорусского фольклора. В доме имелась богатая библиотека. Первыми книгами маленького Максима стали «Букварь», «Детский мир» К. Ушинского и написанное по-белорусски «Родное слово».\"},{\"date\":\"16 октября 1896\",\"description\":\"Через месяц после родов дочери у Марии Богданович была обнаружена чахотка (туберкулёз лёгких). Лечение («деревня, кефир, кваякол, кодеин») не помогло и мать будущего поэта умерла. Похоронена она была на Гродненском православном кладбище перед церковью, вправо от главных ворот и дороги в церковь.\"},{\"date\":\"ноябрь 1896\",\"description\":\"Адам Богданович с детьми переехал по службе в Нижний Новгород. Здесь у него завязались дружеские отношения с Максимом Горьким, с которым они вскоре породнились, женившись на сёстрах Е. П. и А. П. Волжиных. Горький часто бывал у них дома, он оказал влияние на любовь мальчика к литературе.\"},{\"date\":\"1902\",\"description\":\" Максим поступил в Нижегородскую мужскую гимназию.\"},{\"date\":\"1907\",\"description\":\"Этот год считается началом литературной деятельности Максима Богдановича. Его первым значительным художественным произведением был рассказ «Музы́ка» на белорусском языке, который сразу же напечатала «Наша нива».\"},{\"date\":\"июнь 1908\",\"description\":\"Богдановичи вновь переезжают по причине изменения места службы отца — на этот раз в Ярославль. Там Максим Богданович пишет первые лирические стихотворения: «Над могилой», «Придёт весна», «На чужбине», которые были опубликованы в «Нашей ниве».\"},{\"date\":\"1909\",\"description\":\"Максим Богданович заболел туберкулезом.\"},{\"date\":\"1911\",\"description\":\"Окончив гимназию он отправляется в Вильну, знакомится с Вацлавом Ластовским, Антоном и Иваном Луцкевичами и другими деятелями белорусского Возрождения. Будучи в Вильне, молодой поэт ознакомился в частном музее братьев Луцкевичей с коллекциями древних раритетов, и под их впечатлением написал стихотворение «Слуцкие ткачихи». Далее в этом же году он пытается поступить на филологический факультет Петербургского университета, но из-за недостатка средств и сырого климата столицы, возвращается в Ярославль, поступив в Демидовский юридический лицей.\"},{\"date\":\"1914\",\"description\":\"в типографии Мартина Кухты при денежной поддержке Марии Магдалены Радзивилл тиражом 2000 экземпляров[12] издан единственный прижизненный сборник произведений Максима Богдановича «Венок». Сборник содержал 92 стихотворения и 2 поэмки, расположенные на 120 страницах.\"},{\"date\":\"1914—1916\",\"description\":\"Поэт пишет цикл стихов «На тихом Дунае», поэму «Максим и Магдалена», другие произведения. Писал Максим Богданович стихи и на русском языке, например, «Зачем грустна она была», «Я вспоминаю Вас такой прекрасной, стройной», «Зелёная любовь», «Осенью». К этому времени относятся и переводы на белорусский произведений А. Пушкина и Э. Верхарна.\"},{\"date\":\"лето 1916\",\"description\":\"Максим Богданович окончив лицей возвращается в Минск. Хотя он был уже тяжело болен, но много работал в Минской губернском продовольственном комитете и в Белорусском комитете помощи жертвам войны, а свободное время отдавал литературному творчеству.\"},{\"date\":\"февраль 1917\",\"description\":\"Друзья поэта собрали деньги, чтобы он мог ехать в Крым лечиться от туберкулёза.\"},{\"date\":\"25 мая 1917\",\"description\":\"Умер Максим Богданович на рассвете в возрасте 25 лет.\"}],\"works\":[{\"date\":\"1907\",\"title\":\"Музы́ка\"},{\"date\":\"1910\",\"title\":\"Двинемся, братья, скорей!\"},{\"date\":\"1911\",\"title\":\"Слуцкие ткачихи\"},{\"date\":\"1912\",\"title\":\"Пан и мужик\"},{\"date\":\"1914\",\"title\":\"Санет\"}],\"gallery\":[\"../../data/img/Bogdanovich1.jpg\",\".../../data/img/Bogdanovich2.jpg\",\"../../data/img/Bogdanovich3.jpg\"],\"video\":\"https://www.youtube.com/watch?v=xIHoUa6VJI8\",\"maps\":\"<iframe src='https://yandex.ru/map-widget/v1/?um=constructor%3Aca0787145253f3a3b70dcdfab8a861be037dc6d387c377b30882bd86d3d807b5&amp;source=constructor' width='100%' height='400' frameborder='0'></iframe>\"},{\"id\":\"1\",\"name\":\"Янка Купала\",\"birthplace\":\"Вязынка\",\"photo\":\"./data/img/Kupala1.jpg\",\"biography\":[{\"date\":\"7 июля 1882\",\"description\":\"В деревне Вязынка (ныне Молодечненского района Минской области Белоруссии) в белорусской католической семье Доминика Онуфриевича Луцевича и Бенигны Ивановны Луцевич\"},{\"date\":\"1898\",\"description\":\"Закончил народное училище в местечке Беларуч.\"},{\"date\":\"1902\",\"description\":\"После смерти отца работал домашним учителем, писарем в помещичьем имении,приказчиком и на других работах.\"},{\"date\":\"1908-1909\",\"description\":\"жил в Вильне, где работал в редакции первой белорусской газеты «Наша Ніва». Там же познакомился с будущей женой — Владиславой Станкевич\"},{\"date\":\"1909—1913\",\"description\":\"Начинающий поэт учился в Санкт-Петербурге на подготовительных общеобразовательных курсах А.Черняева\"},{\"date\":\"7 апреля 1914\",\"description\":\"Купала стал редактором газеты\"},{\"date\":\"1915\",\"description\":\"Проучился в Московском городском народном университете Янка Купала поступил в народный университет в сентябре, однако его намерениям продолжить учёбу помешала всеобщая мобилизация, объявленная в связи с наступлением Первой мировой войны.\"},{\"date\":\"1916\",\"description\":\"Поэта-студента призвали в армию и тот поступил в дорожно-строительный отряд, в составе которого работал вплоть до наступления событий Октябрьской революции. После революции Янка Купала поселился в Минске.\"},{\"date\":\"1920-х до начала 1930-х\",\"description\":\"Янка Купала был вынужден, без всякого преувеличения, пройти через множество страданий. Сперва последовало несправедливое обвинение в неблагонадёжности, в СМИ началась методичная травля поэта.\"},{\"date\":\"28 июня 1942\",\"description\":\"Янка Купала, остановившийся в гостинице «Москва», неожиданно погиб.\"}],\"works\":[{\"date\":\"15 июля 1904\",\"title\":\"Мая доля\"},{\"date\":\"1905\",\"title\":\"Мужик\"},{\"date\":\"1906\",\"title\":\"Зімою\"},{\"date\":\"1907\",\"title\":\"Нікому\"},{\"date\":\"1912\",\"title\":\"Пау́линка\"}],\"gallery\":[\"../../data/img/Kupala1.jpg\",\"../../data/img/Kupala2.jpg\",\"../../data/img/Kupala2.jpg\"],\"video\":\"https://www.youtube.com/watch?v=9FZehV2qJTk\",\"maps\":\"<iframe src='https://yandex.ru/map-widget/v1/?um=constructor%3A5f4bae2c662db968ba6b673318a1eb9455e410ba5232771eb524c0880a7b17e3&amp' width='100%' height='400' frameborder='0'></iframe>\"},{\"id\":\"2\",\"name\":\"Якуб Колас\",\"birthplace\":\"Акинчицы\",\"photo\":\"./data/img/Kolas1.jpg\",\"biography\":[{\"date\":\"22 октября 1882\",\"description\":\"Родился в деревне Акинчицы (теперь территория города Столбцы Столбцовского района Минской области Белоруссии), в семье лесника Михаила (Михася) Мицкевича.\"},{\"date\":\"1902\",\"description\":\"Окончил Несвижскую учительскую семинарию.\"},{\"date\":\"1906\",\"description\":\"Первая публикация — стихотворение «Край родимый» в белорусской газете «Наша доля».\"},{\"date\":\"1908\",\"description\":\"За участие в организации нелегального учительского съезда был приговорён к заключению, которое отбывал в минской тюрьме  до 1911 года.\"},{\"date\":\"1912\",\"description\":\"Учительствовал в Пинске до 1914 года, здесь у него родился его старший сын Даниил.\"},{\"date\":\"1915\",\"description\":\"Эвакуировался вместе с семьёй в Подмосковье, работал учителем в Дмитровском уезде. В этом же году мобилизован в армию.\"},{\"date\":\"1918\",\"description\":\"После демобилизации работал учителем в городе Обоянь.\"},{\"date\":\"май 1921\",\"description\":\"Переехал в Минск. В дальнейшем занимался творческой и научной деятельностью.\"},{\"date\":\"1929\",\"description\":\"Назначен на должность вице-президент Академии наук БССР.\"},{\"date\":\"1938\",\"description\":\"Депутат ВС БССР (до 1956).\"},{\"date\":\"1944\",\"description\":\"Вернулся в Минск.\"},{\"date\":\"1946\",\"description\":\"Избран председателем Белорусского республиканского комитета защиты мира.\"},{\"date\":\"13 августа 1956\",\"description\":\"Якуб Колас скоропостижно скончался после продложительных болезней. Похоронен на Военном кладбище в Минске.\"}],\"works\":[{\"date\":\"1908\",\"title\":\"сборник стихов «Песни неволи»\"},{\"date\":\"1910\",\"title\":\"сборник стихов «Песни печали»\"},{\"date\":\"1912\",\"title\":\"сборник прозы «Рассказы»\"},{\"date\":\"1914\",\"title\":\"сборник прозы «Родные образы»\"},{\"date\":\"1923\",\"title\":\"поэма «Новая земля»\"},{\"date\":\"1923\",\"title\":\"повесть «В полесской глуши»\"},{\"date\":\"1925\",\"title\":\"поэма «Сымон-музыкант»\"},{\"date\":\"1926\",\"title\":\"повесть «На просторах жизни»\"},{\"date\":\"1928\",\"title\":\"повесть «В глубине Полесья»\"},{\"date\":\"1930\",\"title\":\"цикл стихов «Колхозное»\"},{\"date\":\"1931\",\"title\":\"повесть «Отщепенец»\"},{\"date\":\"1933\",\"title\":\"повесть «Трясина»\"},{\"date\":\"1935\",\"title\":\"цикл стихов «Осеннее»\"},{\"date\":\"1942\",\"title\":\"сборник стихов «Отомстим»\"},{\"date\":\"1943\",\"title\":\"сборник стихов «Голос земли»\"},{\"date\":\"1943\",\"title\":\"поэма «Суд в лесу»\"},{\"date\":\"1945\",\"title\":\"поэма «Возмездие»\"},{\"date\":\"1947\",\"title\":\"«поэма Рыбакова хата»\"},{\"date\":\"1954\",\"title\":\"поэма «На перепутье»\"}],\"gallery\":[\"../../data/img/Kolas1.jpg\",\"../../data/img/Kolas2.jpg\",\"../../data/img/Kolas3.jpg\"],\"video\":\"https://youtu.be/EPfYYg5QPMg\",\"maps\":\"<iframe src='https://yandex.ru/map-widget/v1/?um=constructor%3Aca4a8299bc13632d6d37f3f9949a46187e792a687810058d5ddd456f3ed8cb6c&amp;source=constructor' width='100%' height='400' frameborder='0'></iframe>\"},{\"id\":\"3\",\"name\":\"Змитро́к Бяду́ля (Самуил Ефимович Плавник)\",\"birthplace\":\"Посадец\",\"photo\":\"./data/img/Byadulya1.jpg\",\"biography\":[{\"date\":\"23 апреля 1886\",\"description\":\"Родился в деревне Посадец Виленской губернии Российской империи (сейчас Логойский район, Минская область).\"},{\"date\":\"1910\",\"description\":\"Самуил Плавник стал постоянным автором виленской газеты «Наша Ніва». Печатался под псевдонимами Саша Пл-ик, Ясакар.\"},{\"date\":\"1912\",\"description\":\"Жил в Вильно работал вместе с Янкой Купалой в редакции указанной газеты «Наша Ніва».\"},{\"date\":\"декабрь 1917\",\"description\":\"Участвовал в Первом Всебелорусском съезде.\"},{\"date\":\"1918\",\"description\":\"Сотрудничал с газетой «Беларускі шлях», выходившей под немецкой оккупацией.\"},{\"date\":\"1920\",\"description\":\"Несколько лет работал в газете «Савецкая Беларусь», редактировал детский журнал «Зоркі». Работал в Институте белорусской культуры, был первым редактором краеведческо-этнографического журнала «Наш край». Входил в литературное объединение «Маладняк», затем в «Узвышша».\"},{\"date\":\"1934\",\"description\":\"Стал членом Союза писателей СССР.\"},{\"date\":\"август 1936\",\"description\":\"Вместе с рядом других белорусских литераторов от имени Союза советских писателей БССР подписал письмо к Сталину с призывом уничтожить «мерзавцев из контрреволюционной троцкистско-зиновьевской банды».\"},{\"date\":\"1941\",\"description\":\"Писатель был вынужден покинуть Белоруссию. В эвакуации жил сначала в Пижме Горьковской области, затем, до конца октября 1941 года, в посёлке Новые Бурасы Саратовской области.\"},{\"date\":\"3 ноября 1941\",\"description\":\"Скончался около Уральска в Казахстане, где и был похоронен.\"}],\"works\":[{\"date\":\"1922\",\"title\":\"стихи «Полесские басни» и поэма «Ярило»\"},{\"date\":\"1927\",\"title\":\"повесть «Соловей»\"},{\"date\":\"1931\",\"title\":\"сборник рассказов «Необычайные истории»\"},{\"date\":\"1932\",\"title\":\"роман «Язеп Крушинский»\"},{\"date\":\"1939\",\"title\":\"автобиографическая повесть «В дремучих лесах»\"}],\"gallery\":[\"../../data/img/Byadulya1.jpg\",\"../../data/img/Byadulya2.jpg\",\"../../data/img/Byadulya3.jpg\"],\"video\":\"https://youtu.be/GB_rlueYscM\",\"maps\":\"<iframe src='https://yandex.ru/map-widget/v1/?um=constructor%3A839bacaaac1112d29473f3ce826b08fe23d0a257636be26a6c6dd82806bde98e&amp;source=constructor' width='100%' height='400' frameborder='0'></iframe>\"},{\"id\":\"4\",\"name\":\"Максим Танк(Евгений Иванович Скурко)\",\"birthplace\":\"Пильковщина\",\"photo\":\"./data/img/Tank1.jpg\",\"biography\":[{\"date\":\"4 сентября 1912\",\"description\":\"Родился в селе Пильковщина (ныне Мядельского района Минской области Беларуси) в крестьянской семье.\"},{\"date\":\"1932\",\"description\":\"Арестовывался польскими властями за активное участие в политической жизни Западной Беларуси.\"},{\"date\":\"1934\",\"description\":\"Арестовывался польскими властями за активное участие в политической жизни Западной Беларуси.\"},{\"date\":\"1940\",\"description\":\"принят в СП СССР.\"},{\"date\":\"1945\",\"description\":\"Максим Танк являлся редактором в юмористическом журнале «Вожык». \"},{\"date\":\"1948\",\"description\":\"главный редактор белорусского литературного журнала «Полымя».\"},{\"date\":\"1965\",\"description\":\"Председатель ВС БССР до 1971 года.\"},{\"date\":\"1969\",\"description\":\"Депутат Верховного Совета СССР.\"},{\"date\":\"1972\",\"description\":\"Академик АН Белорусской ССР.\"},{\"date\":\"7 августа 1995\",\"description\":\"Максим Танк умер в Минске. Похоронен в родном селе.\"}],\"works\":[{\"date\":\"1936\",\"title\":\"поэтический сборник «На этапах»\"},{\"date\":\"1937\",\"title\":\"поэтический сборник «Клюквенный цвет»\"},{\"date\":\"1937\",\"title\":\"поэма «Нарач»\"},{\"date\":\"1938\",\"title\":\"«Под мачтой»\"},{\"date\":\"1957\",\"title\":\"«След молнии»\"},{\"date\":\"1964\",\"title\":\"«Глоток воды»\"},{\"date\":\"1972\",\"title\":\"«Да будет свет»\"}],\"gallery\":[\"../../data/img/Tank1.jpg\",\"../../data/img/Tank2.jpg\",\"../../data/img/Tank3.jpg\"],\"video\":\"https://youtu.be/ZECpiojVfZs\",\"maps\":\"<iframe src='https://yandex.ru/map-widget/v1/?um=constructor%3A1b0fde151198d261e6a60ba762d46a7417343a098b9661a814068df248b81d8f&amp;source=constructor' width='100%' height='400' frameborder='0'></iframe>\"}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS9wb2V0cy1ydS5qc29uLmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/data/poets-ru.json\n");

/***/ }),

/***/ "./src/poet_of_the_day.js":
/*!********************************!*\
  !*** ./src/poet_of_the_day.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_poets_ru_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/poets-ru.json */ \"./src/data/poets-ru.json\");\nvar _data_poets_ru_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/poets-ru.json */ \"./src/data/poets-ru.json\", 1);\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var rand = Math.floor(Math.random() * 5);\n  var photo = document.querySelector('aside > figure > img');\n  var name = document.querySelector('aside > figure > figcaption');\n  photo.setAttribute('src', \"\".concat(_data_poets_ru_json__WEBPACK_IMPORTED_MODULE_0__[rand].photo));\n  name.innerHTML = \"\".concat(_data_poets_ru_json__WEBPACK_IMPORTED_MODULE_0__[rand].name.split('(')[0]);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcG9ldF9vZl90aGVfZGF5LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BvZXRfb2ZfdGhlX2RheS5qcz9mMmIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXRhIGZyb20gJy4vZGF0YS9wb2V0cy1ydS5qc29uJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpO1xuXG4gIGNvbnN0IHBob3RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGUgPiBmaWd1cmUgPiBpbWcnKTtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlID4gZmlndXJlID4gZmlnY2FwdGlvbicpO1xuXG4gIHBob3RvLnNldEF0dHJpYnV0ZSgnc3JjJywgYCR7ZGF0YVtyYW5kXS5waG90b31gKTtcbiAgbmFtZS5pbm5lckhUTUwgPSAoYCR7ZGF0YVtyYW5kXS5uYW1lLnNwbGl0KCcoJylbMF19YCk7XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/poet_of_the_day.js\n");

/***/ })

/******/ });