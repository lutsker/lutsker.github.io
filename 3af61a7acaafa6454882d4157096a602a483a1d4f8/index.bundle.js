/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data-service.js":
/*!*****************************!*\
  !*** ./src/data-service.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"disable_elment\": () => (/* binding */ disable_elment),\n/* harmony export */   \"get_data\": () => (/* binding */ get_data),\n/* harmony export */   \"get_data_by_name\": () => (/* binding */ get_data_by_name),\n/* harmony export */   \"set_data\": () => (/* binding */ set_data)\n/* harmony export */ });\n\r\nconst data = {\r\n    elements: [{ name: 'Tomaten', details: \"Rispentomaten 500g Schale\", category: \"Gemüse\", enabled: true },\r\n    { name: 'Kartoffeln Vorwiegend Festkochend', details: \"Eine Packung\", category: \"Gemüse\", enabled: false },\r\n    { name: 'Gurke', details: \"Ein Stück\", category: \"Gemüse\", enabled: false },\r\n    { name: 'Fisch', details: 'Lachsfilet oder Rotbarsch', category: \"Meer\", enabled: true },\r\n    { name: \"Griechischer Joghurt\", details: \"250g\", category: \"Milchprodukte\", enabled: false },\r\n    { name: \"Parmesan\", details: \"250g\", category: \"Milchprodukte\", enabled: false },\r\n    { name: \"Ementaller\", details: \"250g\", category: \"Milchprodukte\", enabled: false },\r\n    { name: \"Zahnpasta\", details: \"Colgate Total\", category: \"Hygiene\", enabled: true },\r\n    { name: \"Brot\", details: \"Urkorn\", category: \"Bäckerei\", enabled: true },\r\n    { name: \"Duschgel\", details: \"Erfrischend\", category: \"Hygiene\", enabled: true },\r\n    { name: \"Semmeln\", details: \"Weiß\", category: \"Bäckerei\", enabled: true },\r\n    { name: \"Weizenmehl 405\", details: \"Weiß\", category: \"Getreide\", enabled: true },\r\n    { name: \"Spaghetti\", details: \"Weiß\", category: \"Getreide\", enabled: true },\r\n    { name: \"Pasta Pene\", details: \"Weiß\", category: \"Getreide\", enabled: true },\r\n    { name: \"Cornflakes\", details: \"Weiß\", category: \"Getreide\", enabled: true },\r\n    { name: \"Toast\", details: \"Weiß\", category: \"Getreide\", enabled: true },\r\n    { name: \"Haferflocken\", details: \"Weiß\", category: \"Getreide\", enabled: true },\r\n    { name: \"Schwarzer Tee\", details: \"Weiß\", category: \"Tee\", enabled: true },\r\n    { name: \"Ketchup\", details: \"Weiß\", category: \"Saucen\", enabled: true },\r\n    { name: \"Zitrone\", details: \"Weiß\", category: \"Obst\", enabled: true },\r\n    { name: \"Banane\", details: \"Weiß\", category: \"Obst\", enabled: true },\r\n    { name: \"Orangen\", details: \"Weiß\", category: \"Obst\", enabled: true },\r\n    { name: \"Birne\", details: \"Weiß\", category: \"Obst\", enabled: true },\r\n    { name: \"Trauben\", details: \"Weiß\", category: \"Obst\", enabled: true },\r\n    { name: \"Heidelbeeren\", details: \"Weiß\", category: \"Obst\", enabled: true },\r\n    { name: \"Hotdog buns\", details: \"Weiß\", category: \"Bäckerei\", enabled: true },\r\n    { name: \"Kiwi\", details: \"Weiß\", category: \"Obst\", enabled: true },\r\n    { name: \"Pelmeni\", details: \"Weiß\", category: \"Fertiggerichte\", enabled: true },\r\n    { name: \"Chicken Nuggets\", details: \"Weiß\", category: \"Fleisch\", enabled: true },\r\n    { name: \"H-Milch\", details: \"250g\", category: \"Milchprodukte\", enabled: false },\r\n    { name: \"Mozarella gerieben\", details: \"250g\", category: \"Milchprodukte\", enabled: false },\r\n    { name: \"Mascarpone\", details: \"250g\", category: \"Milchprodukte\", enabled: false },\r\n    { name: \"Butter\", details: \"250g\", category: \"Milchprodukte\", enabled: false },\r\n    { name: \"Philadelphia\", details: \"250g\", category: \"Milchprodukte\", enabled: false },\r\n    { name: \"Mozarella frisch\", details: \"250g\", category: \"Milchprodukte\", enabled: false },\r\n    { name: \"Burger Käse\", details: \"250g\", category: \"Milchprodukte\", enabled: false },\r\n    { name: \"Schlagsahne\", details: \"250g\", category: \"Milchprodukte\", enabled: true },\r\n    { name: \"Fruchtjoghurt\", details: \"250g\", category: \"Milchprodukte\", enabled: false },\r\n    { name: \"Sauere Sahne\", details: \"250g\", category: \"Milchprodukte\", enabled: true },\r\n    { name: \"Feta Käse\", details: \"250g\", category: \"Milchprodukte\", enabled: false },\r\n    { name: \"Salami\", details: \"250g\", category: \"Fleisch\", enabled: false },\r\n    { name: \"Hackfleisch Rind\", details: \"250g\", category: \"Fleisch\", enabled: false },\r\n    { name: \"Hänchenbrust\", details: \"250g\", category: \"Fleisch\", enabled: false },\r\n    { name: \"Schinken\", details: \"250g\", category: \"Fleisch\", enabled: false },\r\n    { name: \"Gulasch Rind\", details: \"250g\", category: \"Fleisch\", enabled: false },\r\n    { name: \"Pute\", details: \"250g\", category: \"Fleisch\", enabled: false },\r\n    { name: \"Wiener Würste\", details: \"250g\", category: \"Fleisch\", enabled: false },\r\n    { name: \"Kirschen\", details: \"Weiß\", category: \"Obst\", enabled: true },\r\n    { name: \"Apfel\", details: \"Weiß\", category: \"Obst\", enabled: true },\r\n    { name: \"Grapefruit\", details: \"Weiß\", category: \"Obst\", enabled: true },\r\n    { name: \"Paprika\", details: \"Weiß\", category: \"Gemüse\", enabled: true },\r\n    { name: \"Zwiebeln\", details: \"Weiß\", category: \"Gemüse\", enabled: true },\r\n    { name: \"Suppengemüse\", details: \"Weiß\", category: \"Gemüse\", enabled: true },\r\n    { name: \"Knoblauch\", details: \"Weiß\", category: \"Gemüse\", enabled: true },\r\n    { name: \"Spinat\", details: \"Weiß\", category: \"Gemüse\", enabled: true },\r\n    { name: \"Passierte Tomaten\", details: \"Weiß\", category: \"Gemüse\", enabled: true },\r\n    { name: \"Champignons\", details: \"Weiß\", category: \"Gemüse\", enabled: true },\r\n    { name: \"Jalapeno\", details: \"Weiß\", category: \"Gemüse\", enabled: true },\r\n    { name: \"Eisbergsalat\", details: \"Weiß\", category: \"Gemüse\", enabled: true },\r\n    { name: \"Eingelegte Gurken\", details: \"Weiß\", category: \"Gemüse\", enabled: true },\r\n    { name: \"Brokkoli\", details: \"Weiß\", category: \"Gemüse\", enabled: true },\r\n    { name: \"Aubergine\", details: \"Weiß\", category: \"Gemüse\", enabled: true }\r\n    ]\r\n}\r\n\r\nconst get_data = () => { return data }\r\n\r\nconst get_data_by_name = (name) => {\r\n    let filtered = data.elements.filter(el => el.name === name).pop()\r\n    if (!filtered) {\r\n        return { name: name, details: \"\" }\r\n    }\r\n    return filtered\r\n}\r\n\r\nconst set_data = (name) => {\r\n    data.elements.push({ name: name, details: \"none\", category: \"none\", enabled: true })\r\n}\r\n\r\nconst disable_elment = (name) => {\r\n    data.elements = data.elements.map((val, indx, arr) => {\r\n        if (val.name === name) {\r\n            return { name: val.name, details: val.details, category: val.category, enabled: !val.enabled }\r\n        }\r\n        else {\r\n            return val\r\n        }\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://shop-app/./src/data-service.js?");

/***/ }),

/***/ "./src/fe-display-details.js":
/*!***********************************!*\
  !*** ./src/fe-display-details.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-service.js */ \"./src/data-service.js\");\n\r\n\r\nclass DisplayDetails extends HTMLElement {\r\n\r\n    static get observedAttributes() {\r\n        return ['name']\r\n    }\r\n\r\n    connectedCallback() {\r\n        this.render()\r\n    }\r\n\r\n    render() {\r\n        const name = this.getAttribute('name') || \"\"\r\n        const details = _data_service_js__WEBPACK_IMPORTED_MODULE_0__.get_data_by_name(name)\r\n        this.innerHTML = `<div class=\"details\"><p>${name}</p><p>${details.details || \"\"}</p></div>\r\n        <style>\r\n        .details {\r\n            margin: 20px;\r\n        }\r\n        </style>`\r\n    }\r\n\r\n    attributeChangedCallback(name, oldVal, newVal) {\r\n        if (name === 'name') {\r\n            this.render()\r\n        }\r\n    }\r\n\r\n}\r\n\r\nwindow.customElements.define('display-details', DisplayDetails)\r\n\n\n//# sourceURL=webpack://shop-app/./src/fe-display-details.js?");

/***/ }),

/***/ "./src/fe-item-list-element.js":
/*!*************************************!*\
  !*** ./src/fe-item-list-element.js ***!
  \*************************************/
/***/ (() => {

eval("const cat_colors = { 'Gemüse': 'red', 'Hygiene': 'green', 'Meer': 'blue', 'Bäckerei': 'yellow', 'Milchprodukte': 'cyan',\r\n'Obst': 'brown', 'Getreide': 'pink', 'Fertiggerichte': 'violet', 'Saucen': 'magenta', 'Fleisch': 'orange', 'Tee': 'black' }\r\n\r\n\r\nclass ItemListElement extends HTMLElement {\r\n\r\n    constructor() {\r\n        super()\r\n        this.attachShadow({ mode: 'open' })\r\n    }\r\n\r\n\r\n    connectedCallback() {\r\n        const cat = this.getAttribute('category')\r\n        const category_color = cat in cat_colors ? cat_colors[cat] : '#ddd'\r\n        this.shadowRoot.innerHTML = `<li class=\"${this.getAttribute('enabled') === 'true' ? \"item-list-enabled\" : \"item-list-disabled\"}\">\r\n        <button class=\"${this.getAttribute('enabled') === 'true' ? \"done-btn-enabled\" : \"done-btn-disabled\"}\">${this.getAttribute('enabled') === 'true' ? \"+\" : \"-\"}</button>\r\n        <a>${this.getAttribute('name')}</a></li>\r\n        <style>\r\n        li {\r\n            cursor: pointer;\r\n            border: 1px solid #ddd;\r\n            border-right: 10px solid ${category_color};\r\n            display: block;\r\n        }\r\n        li.item-list-disabled a {\r\n            color: #bbbbbb;\r\n            text-decoration: none;\r\n        }\r\n        li a {\r\n            padding: 10px;\r\n        }\r\n        li:hover {\r\n            background: #eee;\r\n        }\r\n        .done-btn-enabled {\r\n            margin-left: 0%;\r\n            width: 15%;\r\n            padding: 3% 0% 3% 0%;\r\n            outline: none;\r\n            border: 1px solid #5f9ea0;\r\n            border-radius: 0px;\r\n            background: #5f9ea0;\r\n            color: white;\r\n        }\r\n        .done-btn-enabled:hover {\r\n            background: #008b8b;\r\n            color: white;\r\n        }\r\n        .done-btn-disabled {\r\n            margin-left: 0%;\r\n            width: 15%;\r\n            padding: 3% 0% 3% 0%;\r\n            outline: none;\r\n            border: 1px solid #daa520;\r\n            border-radius: 0px;\r\n            background: #daa520;\r\n            color: white;\r\n        }\r\n        .done-btn-disabled:hover {\r\n            background: #ffd700;\r\n            color: white;\r\n        }\r\n\r\n        </style>`\r\n        this.shadowRoot.querySelector('li').addEventListener('click', event => this.onClick(event))\r\n        this.shadowRoot.querySelector('button').addEventListener('click', event => this.onDoneClick(event))\r\n    }\r\n\r\n    disconnectedCallback() {\r\n        this.shadowRoot.querySelector('li').removeEventListener('click', this.onClick)\r\n        this.shadowRoot.querySelector('button').removeEventListener('click', this.onDoneClick)\r\n    }\r\n\r\n    onClick(e) {\r\n        e.preventDefault()\r\n        const cevent = new CustomEvent('elclicked', { bubbles: true, detail: { name: this.getAttribute('name') } })\r\n        this.dispatchEvent(cevent)\r\n    }\r\n\r\n    onDoneClick(e) {\r\n        e.preventDefault()\r\n        const cevent = new CustomEvent('done-elclicked', { bubbles: true, detail: { name: this.getAttribute('name') } })\r\n        this.dispatchEvent(cevent)\r\n    }\r\n}\r\n\r\nwindow.customElements.define('item-list-element', ItemListElement)\n\n//# sourceURL=webpack://shop-app/./src/fe-item-list-element.js?");

/***/ }),

/***/ "./src/fe-item-list.js":
/*!*****************************!*\
  !*** ./src/fe-item-list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fe_item_list_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fe-item-list-element.js */ \"./src/fe-item-list-element.js\");\n/* harmony import */ var _fe_item_list_element_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fe_item_list_element_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nclass ItemList extends HTMLElement {\r\n\r\n    constructor() {\r\n        super()\r\n        this.attachShadow({ mode: 'open' })\r\n        this.data = null\r\n        this.el = null\r\n    }\r\n\r\n    static get observedAttributes() {\r\n        return ['data'];\r\n    }\r\n\r\n    set data(val) {\r\n        this.el = val ? val.elements : null\r\n        this.setAttribute('data', 'obj')\r\n    }\r\n\r\n\r\n    onElClicked(e) {\r\n        const cevent = new CustomEvent('elclicked', { bubbles: true, detail: e.detail })\r\n        this.dispatchEvent(cevent)\r\n    }\r\n\r\n    onDoneElClicked(e) {\r\n        const cevent = new CustomEvent('done-elclicked', { bubbles: true, detail: e.detail })\r\n        this.dispatchEvent(cevent)\r\n    }\r\n\r\n    connectedCallback() {\r\n        this.render()\r\n        this.shadowRoot.addEventListener('elclicked', event => this.onElClicked(event))\r\n        this.shadowRoot.addEventListener('done-elclicked', event => this.onDoneElClicked(event))\r\n    }\r\n    disconnectedCallback() {\r\n        this.shadowRoot.removeEventListener('elclicked', this.onElClicked)\r\n        this.shadowRoot.removeEventListener('done-elclicked', this.onDoneElClicked)\r\n    }\r\n\r\n    render() {\r\n        if (this.el) {\r\n            const elements = this.getAttribute('showdisabled') === \"false\" ? this.el.filter(x => x.enabled === true) : this.el.sort((a, b) => b.enabled - a.enabled)\r\n            let markup = `<ul>`\r\n            for (let element of elements) {\r\n                markup += `<item-list-element name=\"${element.name}\" category=\"${element.category}\" enabled=\"${element.enabled}\"></item-list-element>`\r\n            }\r\n            markup += `</ul>\r\n            <style>\r\n            :host ul {\r\n                list-style-type: none;\r\n                padding: 0;\r\n                margin: 0;\r\n            }\r\n            </style>`\r\n            this.shadowRoot.innerHTML = markup\r\n\r\n        }\r\n    }\r\n\r\n    attributeChangedCallback(name, oldVal, newVal) {\r\n        if (name === 'data') {\r\n            this.render()\r\n        }\r\n    }\r\n}\r\n\r\nwindow.customElements.define('item-list', ItemList)\r\n\n\n//# sourceURL=webpack://shop-app/./src/fe-item-list.js?");

/***/ }),

/***/ "./src/fe-search-template.js":
/*!***********************************!*\
  !*** ./src/fe-search-template.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    mapDOM(scope) {\r\n        return {\r\n            'inputElement': scope.querySelector('input#input'),\r\n            'inputSection': scope.querySelector('.input-section'),\r\n            'button': scope.querySelector('button#btn'),\r\n            'itemList': scope.querySelector('item-list#s')\r\n        }\r\n    },\r\n\r\n    render(p) {\r\n        // console.log(p.noresult)\r\n        return `<div class=\"input-section\"><input type=\"text\" autocomplete=\"off\" class=\"search\" id=\"input\"></input>\r\n        </div>\r\n        <div class=\"main\">\r\n        <display-details></display-details>\r\n        <item-list id=\"s\" showdisabled=\"true\"></item-list>\r\n        </div>\r\n        <style>\r\n        :host input#input:hover {\r\n            border: 1px solid #5f9ea0;\r\n            border-radius: 5px;\r\n        }\r\n        :host input#input:focus {\r\n            border: 1px solid #5f9ea0;\r\n        }\r\n        :host input#input {\r\n            width: 100%;\r\n            padding: 10px 10px 10px 10px;\r\n            padding-right: 22%;\r\n            border: 1px solid #ddd;\r\n            border-radius: 5px;\r\n            outline: none;\r\n        }\r\n        :host .main {\r\n            display: flex;\r\n            flex-direction: column;\r\n        }\r\n        :host .input-section {\r\n            display: flex;\r\n            flex-direction: row;\r\n        }\r\n        :host button#btn {\r\n            margin-left: -20%;\r\n            width: 30%;\r\n            outline: none;\r\n            border: 1px solid #5f9ea0;\r\n            border-radius: 5px;\r\n            background: #5f9ea0;\r\n            color: white;\r\n        }\r\n        :host button#btn:hover {\r\n            background: #008b8b;\r\n            color: white;\r\n        }\r\n\r\n        </style>\r\n        `\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://shop-app/./src/fe-search-template.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fe_search_template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fe-search-template.js */ \"./src/fe-search-template.js\");\n/* harmony import */ var _fe_item_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fe-item-list.js */ \"./src/fe-item-list.js\");\n/* harmony import */ var _fe_display_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fe-display-details.js */ \"./src/fe-display-details.js\");\n/* harmony import */ var _data_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-service.js */ \"./src/data-service.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass SearchComponent extends HTMLElement {\r\n    constructor() {\r\n        super()\r\n        this.attachShadow({ mode: 'open' })\r\n        this.addbtn = false\r\n        this.search_term = \"\"\r\n    }\r\n\r\n    removeAddBtn() {\r\n        if (this.addbtn === true) {\r\n            this.shadowRoot.querySelector('button#btn').removeEventListener('click', this.onAddClick)\r\n            this.dom.inputSection.removeChild(this.shadowRoot.querySelector('button#btn'))\r\n            this.addbtn = false\r\n        }\r\n\r\n    }\r\n\r\n    onAddClick(e) {\r\n        _data_service_js__WEBPACK_IMPORTED_MODULE_3__.set_data(this.search_term)\r\n        this.removeAddBtn()\r\n        this.render()\r\n        this.search_term = \"\"\r\n    }\r\n\r\n    onInputChange(e) {\r\n        this.search_term = e.target.value\r\n        const data_mod = {\r\n            elements: _data_service_js__WEBPACK_IMPORTED_MODULE_3__.get_data().elements.filter(el =>\r\n                el.name.toLowerCase().includes(this.search_term.toLowerCase()) || el.category.toLocaleLowerCase().includes(this.search_term.toLowerCase()))\r\n        }\r\n        this.dom.itemList.data = data_mod\r\n\r\n        if (data_mod.elements.length == 0) {\r\n            this.dom.inputElement.setAttribute('noresult', true)\r\n            if (this.addbtn === false) {\r\n                this.button = document.createDocumentFragment()\r\n                const el = document.createElement('button')\r\n                el.innerText = 'Add Item'\r\n                el.id = 'btn'\r\n                this.button.appendChild(el)\r\n                this.dom.inputSection.appendChild(this.button)\r\n                this.shadowRoot.querySelector('button#btn').addEventListener('click', e => this.onAddClick(e))\r\n                this.addbtn = true\r\n            }\r\n        }\r\n\r\n        if (data_mod.elements.length > 0) {\r\n            this.dom.inputElement.setAttribute('noresult', false)\r\n            this.removeAddBtn()\r\n        }\r\n\r\n\r\n    }\r\n\r\n    onElClicked(e) {\r\n        this.shadowRoot.querySelector('display-details').setAttribute('name', e.detail.name)\r\n    }\r\n\r\n    onDoneElClicked(e) {\r\n        _data_service_js__WEBPACK_IMPORTED_MODULE_3__.disable_elment(e.detail.name)\r\n        const data_mod = {\r\n            elements: _data_service_js__WEBPACK_IMPORTED_MODULE_3__.get_data().elements.filter(el =>\r\n                el.name.toLowerCase().includes(this.search_term.toLowerCase()) || el.category.toLocaleLowerCase().includes(this.search_term.toLowerCase()))\r\n        }\r\n        this.dom.itemList.data = data_mod\r\n    }\r\n\r\n    render() {\r\n        this.shadowRoot.innerHTML = _fe_search_template_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render({ noresult: this.noresult })\r\n        this.dom = _fe_search_template_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mapDOM(this.shadowRoot)\r\n        this.dom.inputElement.addEventListener('input', event => this.onInputChange(event))\r\n        this.dom.itemList.data = _data_service_js__WEBPACK_IMPORTED_MODULE_3__.get_data()\r\n\r\n    }\r\n\r\n    disconnetedCallback() {\r\n        this.dom.inputElement.removeEventListener('input', this.onInputChange)\r\n        this.shadowRoot.removeEventListener('elclicked', this.onElClicked)\r\n        this.shadowRoot.removeEventListener('done-elclicked', this.onDoneElClicked)\r\n    }\r\n\r\n\r\n    connectedCallback() {\r\n        this.render()\r\n\r\n\r\n        this.shadowRoot.addEventListener('elclicked', e => this.onElClicked(e))\r\n        this.shadowRoot.addEventListener('done-elclicked', e => this.onDoneElClicked(e))\r\n\r\n\r\n        // let undefinedChild = this.shadowRoot.querySelectorAll(':not(:defined)')\r\n        // let promises = [...undefinedChild].map(child => {\r\n        //     return customElements.whenDefined(child.name)\r\n        // })\r\n\r\n        // Promise.all(promises).then(() => {\r\n        //     this.shadowRoot.querySelector('item-list#s').data = data\r\n        //     this.shadowRoot.querySelector('item-list#f').data = data\r\n        // })\r\n    }\r\n}\r\n\r\nwindow.customElements.define('fe-search', SearchComponent)\r\n\n\n//# sourceURL=webpack://shop-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;