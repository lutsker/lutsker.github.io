/* Copyright 2023, Vitalij Lutsker, shop-app version: 0.8.3 (Sun, 26 Feb 2023 20:48:03 GMT) */
(()=>{var e={122:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}render(){this.shadowRoot.innerHTML='<input type="text"></input>'}connectedCallback(){this.render()}}window.customElements.define("category-selector",e)},774:()=>{const e={Gemüse:"red",Hygiene:"green",Meer:"blue",Bäckerei:"yellow",Milchprodukte:"cyan",Obst:"brown",Getreide:"pink",Fertiggerichte:"violet",Saucen:"magenta",Fleisch:"orange",Tee:"black"};class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.showDetails=!1}render(){const t=this.getAttribute("category"),n=t in e?e[t]:"#ddd";this.shadowRoot.innerHTML=`<li class="${"true"===this.getAttribute("enabled")?"item-list-enabled":"item-list-disabled"}">\n        <button class="${"true"===this.getAttribute("enabled")?"done-btn-enabled":"done-btn-disabled"}">${"true"===this.getAttribute("enabled")?"+":"-"}</button>\n        <a>${this.getAttribute("name")}</a>\n        </li>\n        <style>\n        li {\n            cursor: pointer;\n            border: 1px solid #ddd;\n            border-right: 10px solid ${n};\n            display: block;\n        }\n        li.item-list-disabled a {\n            color: #bbbbbb;\n            text-decoration: none;\n        }\n        li a {\n            padding: 10px;\n        }\n        li:hover {\n            background: #eee;\n        }\n        .done-btn-enabled {\n            margin-left: 0%;\n            width: 15%;\n            padding: 3% 0% 3% 0%;\n            outline: none;\n            border: 1px solid #5f9ea0;\n            border-radius: 0px;\n            background: #5f9ea0;\n            color: white;\n        }\n        .done-btn-enabled:hover {\n            background: #008b8b;\n            color: white;\n        }\n        .done-btn-disabled {\n            margin-left: 0%;\n            width: 15%;\n            padding: 3% 0% 3% 0%;\n            outline: none;\n            border: 1px solid #daa520;\n            border-radius: 0px;\n            background: #daa520;\n            color: white;\n        }\n        .done-btn-disabled:hover {\n            background: #ffd700;\n            color: white;\n        }\n\n        </style>`}toggleDetails(){if(!1===this.showDetails){this.details=document.createDocumentFragment();const e=document.createElement("display-details");e.setAttribute("name",this.getAttribute("name")),this.details.appendChild(e),this.shadowRoot.querySelector("li").appendChild(this.details),this.showDetails=!0}else!0===this.showDetails&&(this.shadowRoot.querySelector("li").removeChild(this.shadowRoot.querySelector("display-details")),this.showDetails=!1)}connectedCallback(){this.render(),this.shadowRoot.querySelector("li").addEventListener("click",(e=>this.onClick(e))),this.shadowRoot.querySelector("button").addEventListener("click",(e=>this.onDoneClick(e)))}disconnectedCallback(){this.shadowRoot.querySelector("li").removeEventListener("click",this.onClick),this.shadowRoot.querySelector("button").removeEventListener("click",this.onDoneClick)}onClick(e){e.target.innerHTML.length>1&&(this.toggleDetails(),console.log(this.getAttribute("name"),this.showDetails))}onDoneClick(e){const t=new CustomEvent("done-elclicked",{bubbles:!0,detail:{name:this.getAttribute("name")}});this.dispatchEvent(t)}}window.customElements.define("item-list-element",t)}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}(()=>{"use strict";const e={mapDOM:e=>({inputElement:e.querySelector("input#input"),inputSection:e.querySelector(".input-section"),button:e.querySelector("button#btn"),itemList:e.querySelector("item-list#s"),details:e.querySelector("display-details")}),render:e=>'<div class=header>\n                <div>\n                    <p>shopping app: version 0.8.3</p>\n                </div>\n                <div class="input-section">\n                    <input type="text" autocomplete="off" class="search" id="input"></input>\n                </div>\n                </div>\n                <div class="main">\n                    <item-list id="s" showdisabled="true"></item-list>\n                </div>\n        <style>\n        :host .header {\n            background: aquamarine;\n            position: fixed;\n            top: 0;\n            width: 100%;\n        }\n        :host input#input:hover {\n            border: 1px solid #5f9ea0;\n            border-radius: 5px;\n        }\n        :host input#input:focus {\n            border: 1px solid #5f9ea0;\n        }\n        :host input#input {\n            display: flex;\n            width: 100%;\n            padding: 10px 10px 10px 10px;\n            padding-right: 22%;\n            border: 1px solid #ddd;\n            border-radius: 5px;\n            outline: none;\n        }\n        :host .main {\n            display: flex;\n            flex-direction: column;\n            margin-top: 100px;\n        }\n        :host .input-section {\n            display: flex;\n            flex-direction: row;\n        }\n        :host button#btn {\n            margin-left: -20%;\n            width: 30%;\n            outline: none;\n            border: 1px solid #5f9ea0;\n            border-radius: 5px;\n            background: #5f9ea0;\n            color: white;\n        }\n        :host button#btn:hover {\n            background: #008b8b;\n            color: white;\n        }\n\n        </style>\n        '};n(774);class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.data=null,this.el=null}static get observedAttributes(){return["data"]}set data(e){this.el=e?e.elements:null,this.setAttribute("data","obj")}onElClicked(e){const t=new CustomEvent("elclicked",{bubbles:!0,detail:e.detail});this.dispatchEvent(t)}onDoneElClicked(e){const t=new CustomEvent("done-elclicked",{bubbles:!0,detail:e.detail});this.dispatchEvent(t)}connectedCallback(){this.render(),console.log("item-list connected"),this.shadowRoot.addEventListener("elclicked",(e=>this.onElClicked(e))),this.shadowRoot.addEventListener("done-elclicked",(e=>this.onDoneElClicked(e)))}disconnectedCallback(){this.shadowRoot.removeEventListener("elclicked",this.onElClicked),this.shadowRoot.removeEventListener("done-elclicked",this.onDoneElClicked)}render(){if(this.el){const e="false"===this.getAttribute("showdisabled")?this.el.filter((e=>!0===e.enabled)):this.el.sort(((e,t)=>t.enabled-e.enabled));let t="<ul>";for(let n of e)t+=`<item-list-element name="${n.name}" category="${n.category}" enabled="${n.enabled}"></item-list-element>`;t+="</ul>\n            <style>\n            :host ul {\n                list-style-type: none;\n                padding: 0;\n                margin: 0;\n            }\n            </style>",this.shadowRoot.innerHTML=t}else console.log("No data"),this.shadowRoot.innerHTML="<p>Loading...</p>"}attributeChangedCallback(e,t,n){"data"===e&&this.render()}}window.customElements.define("item-list",t);const o={elements:[{name:"Tomaten",details:"Rispentomaten 500g Schale",category:"Gemüse",enabled:!0},{name:"Kartoffeln Vorwiegend Festkochend",details:"Eine Packung",category:"Gemüse",enabled:!1},{name:"Gurke",details:"Ein Stück",category:"Gemüse",enabled:!1},{name:"Fisch",details:"Lachsfilet oder Rotbarsch",category:"Meer",enabled:!0},{name:"Griechischer Joghurt",details:"250g",category:"Milchprodukte",enabled:!1},{name:"Parmesan",details:"250g",category:"Milchprodukte",enabled:!1},{name:"Ementaller",details:"250g",category:"Milchprodukte",enabled:!1},{name:"Zahnpasta",details:"Colgate Total",category:"Hygiene",enabled:!0},{name:"Brot",details:"Urkorn",category:"Bäckerei",enabled:!0},{name:"Duschgel",details:"Erfrischend",category:"Hygiene",enabled:!0},{name:"Semmeln",details:"Weiß",category:"Bäckerei",enabled:!0},{name:"Weizenmehl 405",details:"Weiß",category:"Getreide",enabled:!0},{name:"Spaghetti",details:"Weiß",category:"Getreide",enabled:!0},{name:"Pasta Pene",details:"Weiß",category:"Getreide",enabled:!0},{name:"Cornflakes",details:"Weiß",category:"Getreide",enabled:!0},{name:"Toast",details:"Weiß",category:"Getreide",enabled:!0},{name:"Haferflocken",details:"Weiß",category:"Getreide",enabled:!0},{name:"Schwarzer Tee",details:"Weiß",category:"Tee",enabled:!0},{name:"Ketchup",details:"Weiß",category:"Saucen",enabled:!0},{name:"Zitrone",details:"Weiß",category:"Obst",enabled:!0},{name:"Banane",details:"Weiß",category:"Obst",enabled:!0},{name:"Orangen",details:"Weiß",category:"Obst",enabled:!0},{name:"Birne",details:"Weiß",category:"Obst",enabled:!0},{name:"Trauben",details:"Weiß",category:"Obst",enabled:!0},{name:"Heidelbeeren",details:"Weiß",category:"Obst",enabled:!0},{name:"Hotdog buns",details:"Weiß",category:"Bäckerei",enabled:!0},{name:"Kiwi",details:"Weiß",category:"Obst",enabled:!0},{name:"Pelmeni",details:"Weiß",category:"Fertiggerichte",enabled:!0},{name:"Chicken Nuggets",details:"Weiß",category:"Fleisch",enabled:!0},{name:"H-Milch",details:"250g",category:"Milchprodukte",enabled:!1},{name:"Mozarella gerieben",details:"250g",category:"Milchprodukte",enabled:!1},{name:"Mascarpone",details:"250g",category:"Milchprodukte",enabled:!1},{name:"Butter",details:"250g",category:"Milchprodukte",enabled:!1},{name:"Philadelphia",details:"250g",category:"Milchprodukte",enabled:!1},{name:"Mozarella frisch",details:"250g",category:"Milchprodukte",enabled:!1},{name:"Burger Käse",details:"250g",category:"Milchprodukte",enabled:!1},{name:"Schlagsahne",details:"250g",category:"Milchprodukte",enabled:!0},{name:"Fruchtjoghurt",details:"250g",category:"Milchprodukte",enabled:!1},{name:"Sauere Sahne",details:"250g",category:"Milchprodukte",enabled:!0},{name:"Feta Käse",details:"250g",category:"Milchprodukte",enabled:!1},{name:"Salami",details:"250g",category:"Fleisch",enabled:!1},{name:"Hackfleisch Rind",details:"250g",category:"Fleisch",enabled:!1},{name:"Hänchenbrust",details:"250g",category:"Fleisch",enabled:!1},{name:"Schinken",details:"250g",category:"Fleisch",enabled:!1},{name:"Gulasch Rind",details:"250g",category:"Fleisch",enabled:!1},{name:"Pute",details:"250g",category:"Fleisch",enabled:!1},{name:"Wiener Würste",details:"250g",category:"Fleisch",enabled:!1},{name:"Kirschen",details:"Weiß",category:"Obst",enabled:!0},{name:"Apfel",details:"Weiß",category:"Obst",enabled:!0},{name:"Grapefruit",details:"Weiß",category:"Obst",enabled:!0},{name:"Paprika",details:"Weiß",category:"Gemüse",enabled:!0},{name:"Zwiebeln",details:"Weiß",category:"Gemüse",enabled:!0},{name:"Suppengemüse",details:"Weiß",category:"Gemüse",enabled:!0},{name:"Knoblauch",details:"Weiß",category:"Gemüse",enabled:!0},{name:"Spinat",details:"Weiß",category:"Gemüse",enabled:!0},{name:"Passierte Tomaten",details:"Weiß",category:"Gemüse",enabled:!0},{name:"Champignons",details:"Weiß",category:"Gemüse",enabled:!0},{name:"Jalapeno",details:"Weiß",category:"Gemüse",enabled:!0},{name:"Eisbergsalat",details:"Weiß",category:"Gemüse",enabled:!0},{name:"Eingelegte Gurken",details:"Weiß",category:"Gemüse",enabled:!0},{name:"Brokkoli",details:"Weiß",category:"Gemüse",enabled:!0},{name:"Aubergine",details:"Weiß",category:"Gemüse",enabled:!0}]},i="1",a="shoppingItemsDB",s=window.indexedDB;s?console.log("[IDB] found indexedDB"):console.log("[IDB] could not find indexedDB");const r=e=>{const t=s.open(a,i);return new Promise(((n,o)=>{t.onerror=e=>{console.error("[IDB] DB error",e.target.errorCode)},t.onsuccess=t=>{const i=t.target.result,a=i.transaction("shopping_items","readwrite"),s=a.objectStore("shopping_items").put(e);s.onerror=e=>{o(e.target.errorCode)},s.onsuccess=e=>{n(e.target.result)},a.oncomplete=()=>{i.close()}}}))};(()=>{const e=s.open(a,i);e.onerror=e=>{console.error("[IDB] DB error",e.target.errorCode)},e.onupgradeneeded=e=>{console.log("[IDB] upgrade");e.target.result.createObjectStore("shopping_items",{keyPath:"name"}).createIndex("shopping_item_category",["category"],{unique:!1})},e.onsuccess=e=>{console.log("[IDB] DB opened successfully");const t=e.target.result,n=t.transaction("shopping_items","readwrite").objectStore("shopping_items");o.elements.forEach((e=>{n.add(e)})),n.oncomplete=()=>{t.close()}}})();const l=()=>(()=>{const e=s.open(a,i);return new Promise(((t,n)=>{e.onerror=e=>{console.error("[IDB] DB error",e.target.errorCode),n(e.target.errorCode)},e.onsuccess=e=>{const n=e.target.result,o=n.transaction("shopping_items"),i=o.objectStore("shopping_items").getAll();i.onerror=e=>{console.log("[IDB] DB error",e.target.errorCode)},i.onsuccess=e=>{t(e.target.result)},o.oncomplete=()=>{n.close()}}}))})(),d=e=>(e=>{const t=s.open(a,i);return new Promise(((n,o)=>{t.onerror=e=>{o(e.target.errorCode)},t.onsuccess=t=>{const i=t.target.result,a=i.transaction("shopping_items","readwrite"),s=a.objectStore("shopping_items").get(e);s.onerror=e=>{o(e.target.errorCode)},s.onsuccess=e=>{e.target.result?n(e.target.result):o("not found")},a.oncomplete=()=>{i.close()}}}))})(e),c=e=>(e=>{const t=s.open(a,i);return new Promise(((n,o)=>{t.onerror=e=>{o(e.target.errorCode)},t.onsuccess=t=>{const i=t.target.result,a=i.transaction("shopping_items","readwrite"),s=a.objectStore("shopping_items"),r=s.get(e);r.onerror=e=>{o(e.target.errorCode)},r.onsuccess=e=>{let t=e.target.result;t.enabled=!t.enabled;const i=s.put(t);i.onerror=e=>{o(e.target.errorCode)},i.onsuccess=e=>{n()}},a.oncomplete=()=>{i.close()}}}))})(e);class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["name"]}onClick(e){console.log("ubtn clicked");const t=this.getAttribute("name")||"";d(t).then((e=>{(e=>r(e))({name:e.name,details:this.shadowRoot.querySelector("input#details").value,category:this.shadowRoot.querySelector("input#category").value,enabled:e.enabled}).then((e=>{this.render()}))})).catch((()=>this.shadowRoot.innerHTML=this.makeHTML({name:"",details:""})))}connectedCallback(){this.render()}makeHTML=e=>`<div class="details"><p>\n        <input id="details" type="text" value="${e.details||""}"></input></p>\n        <p>\n        <input id="category" type="text" value="${e.category}"></input>\n        <button id="ubtn">update</button>\n        </p>\n        </div>\n        <style>\n        .details {\n            margin: 0px;\n        }\n        </style>`;render(){const e=this.getAttribute("name")||"";d(e).then((e=>{this.shadowRoot.innerHTML=this.makeHTML(e),this.shadowRoot.querySelector("button#ubtn").addEventListener("click",(e=>this.onClick(e)))})).catch((()=>this.shadowRoot.innerHTML=this.makeHTML({name:"",details:""})))}attributeChangedCallback(e,t,n){"name"===e&&this.render()}}window.customElements.define("display-details",h);n(122);"serviceWorker"in navigator&&navigator.serviceWorker.register("/3af61a7acaafa6454882d4157096a602a483a1d4f8/serviceworker.bundle.js").then((function(e){console.log("Service worker registered with scope:",e.scope)})).catch((function(e){console.log("Service worker registration failed",e)}));class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.addbtn=!1,this.search_term=""}removeAddBtn(){!0===this.addbtn&&(this.shadowRoot.querySelector("button#btn").removeEventListener("click",this.onAddClick),this.dom.inputSection.removeChild(this.shadowRoot.querySelector("button#btn")),this.addbtn=!1)}onAddClick(e){var t;(t=this.search_term,r({name:t,details:"none",category:"none",enabled:!0})).then((()=>{this.removeAddBtn(),this.render(),this.search_term=""}))}onInputChange(e){this.search_term=e.target.value,l().then((e=>{const t={elements:e.filter((e=>e.name.toLowerCase().includes(this.search_term.toLowerCase())||e.category.toLocaleLowerCase().includes(this.search_term.toLowerCase())))};if(this.dom.itemList.data=t,0==t.elements.length&&(this.dom.inputElement.setAttribute("noresult",!0),!1===this.addbtn)){this.button=document.createDocumentFragment();const e=document.createElement("button");e.innerText="Add Item",e.id="btn",this.button.appendChild(e),this.dom.inputSection.appendChild(this.button),this.shadowRoot.querySelector("button#btn").addEventListener("click",(e=>this.onAddClick(e))),this.addbtn=!0}t.elements.length>0&&(this.dom.inputElement.setAttribute("noresult",!1),this.removeAddBtn())}))}onElClicked(e){this.shadowRoot.querySelector("display-details").setAttribute("name",e.detail.name)}onDoneElClicked(e){c(e.detail.name).then((()=>{l().then((e=>{const t={elements:e.filter((e=>e.name.toLowerCase().includes(this.search_term.toLowerCase())||e.category.toLocaleLowerCase().includes(this.search_term.toLowerCase())))};this.dom.itemList.data=t}))}))}render(){this.shadowRoot.innerHTML=e.render({noresult:this.noresult}),this.dom=e.mapDOM(this.shadowRoot),this.dom.inputElement.addEventListener("input",(e=>this.onInputChange(e))),l().then((e=>new Promise((e=>{setTimeout(e,200)})).then((()=>e)))).then((e=>{this.dom.itemList.data={elements:e}}))}disconnetedCallback(){this.dom.inputElement.removeEventListener("input",this.onInputChange),this.shadowRoot.removeEventListener("elclicked",this.onElClicked),this.shadowRoot.removeEventListener("done-elclicked",this.onDoneElClicked)}connectedCallback(){this.render(),this.shadowRoot.addEventListener("elclicked",(e=>this.onElClicked(e))),this.shadowRoot.addEventListener("done-elclicked",(e=>this.onDoneElClicked(e)))}}window.customElements.define("fe-search",u)})()})();