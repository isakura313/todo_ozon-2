/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/ItemDeal.ts":
/*!************************!*\
  !*** ./js/ItemDeal.ts ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar ItemDeal = /** @class */ (function () {\n    /*\n        priority - важность дела\n        text - контент, содержимое\n        dt - дата создания дела date time\n        dl - дедлайн dealine\n     */\n    function ItemDeal(priority, text, dl) {\n        this.priority = priority;\n        this.text = text;\n        this.dt = Date.now();\n        this.dl = dl;\n    }\n    return ItemDeal;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemDeal);\n\n\n//# sourceURL=webpack://todo_ozon/./js/ItemDeal.ts?");

/***/ }),

/***/ "./js/code.ts":
/*!********************!*\
  !*** ./js/code.ts ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ItemDeal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemDeal */ \"./js/ItemDeal.ts\");\n\nvar field = (document.querySelector(\".input\"));\nvar select = (document.querySelector(\"select\"));\nvar date_picker = (document.getElementById(\"date_picker\"));\nvar button_plus = (document.querySelector(\".button_plus\"));\nvar deals = (document.querySelector(\"#deals\"));\nvar important_color = [\n    \"has-background-danger has-text-white is-size-3\",\n    \"has-background-warning has-text-black is-size-3\",\n    \"has-background-link has-text-white is-size-3\"\n]; // массив prioritet - насколько важными, неважными могу быть дела\n/*\n Функция добавления дела, которая вызывает функцию отрисовки\n и добавляет дело в localStorage\n и не забывает обнулять значения в field\n */\nfunction addTask() {\n    var content = field.value;\n    if (content === \"\" && date_picker.value === \"\") {\n        alert(\"Вы что-то забыли заполнить\");\n        return;\n    }\n    var todo = new _ItemDeal__WEBPACK_IMPORTED_MODULE_0__.default(Number(select.value), content, date_picker.value);\n    var todo_to_JSON = JSON.stringify(todo);\n    localStorage.setItem(String(+todo.dt), todo_to_JSON);\n    GenerateDom(todo);\n    field.value = \"\";\n}\n// назначение листенеров на нашу кнопку button_plus\nbutton_plus.onclick = addTask;\ndocument.addEventListener(\"keypress\", function (e) {\n    if (e.code === \"Enter\") {\n        addTask();\n    }\n});\nfunction drawOnLoad() {\n    for (var i = 0; i < localStorage.length; i++) {\n        var lk_key = localStorage.key(i);\n        var content = localStorage.getItem(lk_key);\n        var todo = JSON.parse(content);\n        GenerateDom(todo);\n    }\n}\ndrawOnLoad();\n//самовызывающаяся функция, приложения, которая\n// пишет дела, когда оно включается\nfunction GenerateDom(obj) {\n    var priority = obj.priority, text = obj.text, dt = obj.dt, dl = obj.dl; // здесь у нас происходит деструктурализация\n    deals.insertAdjacentHTML(\"afterbegin\", \"\\n            <div class=\\\"wrap_task \" + important_color[priority - 1] + \"\\\" id=\\\"\" + dt + \"\\\">\\n                <p class=\\\"todo_text\\\"> \" + text + \" </p>\\n                    <p>\" + new Date(dt).getDate() + \"/\" + new Date(dt).getMonth() + \" / \" + dl + \" </p>\\n                  <i class=\\\"material-icons pen\\\"> edit</i>\\n                <i class=\\\"material-icons del\\\"> delete_outline </i>\\n            </div>\\n    \");\n    deleteItem();\n}\n//обработчики удаления дела\n// при клике на значок thrash, у нас удаляется родитель этого значка\n// операции в DOM именно удаление это дорого по ресурсам\n//поэтому делаем его невидимым и удаляем из localStorage\ndeleteItem();\nfunction deleteItem() {\n    var delete_icons = (document.getElementsByClassName(\"del\"));\n    // @ts-ignore\n    var delete_arr = Array.from(delete_icons);\n    delete_arr.map(function (el) {\n        el.onclick = function () {\n            var wrap_task = (el.parentNode);\n            wrap_task.style.display = \"none\";\n            localStorage.removeItem(wrap_task.id);\n        };\n    });\n}\ndeals.addEventListener(\"click\", function (e) {\n    console.log(e.target);\n    var pen = (e.target);\n    var wrap_task = (pen.parentNode);\n    var todo_text = (wrap_task.querySelector(\".todo_text\"));\n    todo_text.contentEditable = \"true\";\n});\n//обработчики редактирования дела\n\n\n//# sourceURL=webpack://todo_ozon/./js/code.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/code.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;