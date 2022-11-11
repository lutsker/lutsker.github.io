(()=>{var e={774:()=>{const e={Gemüse:"red",Hygiene:"green",Meer:"blue",Bäckerei:"yellow",Milchprodukte:"cyan",Obst:"brown",Getreide:"pink",Fertiggerichte:"violet",Saucen:"magenta",Fleisch:"orange",Tee:"black"};class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const t=this.getAttribute("category"),n=t in e?e[t]:"#ddd";this.shadowRoot.innerHTML=`<li class="${"true"===this.getAttribute("enabled")?"item-list-enabled":"item-list-disabled"}">\n        <button class="${"true"===this.getAttribute("enabled")?"done-btn-enabled":"done-btn-disabled"}">${"true"===this.getAttribute("enabled")?"+":"-"}</button>\n        <a>${this.getAttribute("name")}</a></li>\n        <style>\n        li {\n            cursor: pointer;\n            border: 1px solid #ddd;\n            border-right: 10px solid ${n};\n            display: block;\n        }\n        li.item-list-disabled a {\n            color: #bbbbbb;\n            text-decoration: none;\n        }\n        li a {\n            padding: 10px;\n        }\n        li:hover {\n            background: #eee;\n        }\n        .done-btn-enabled {\n            margin-left: 0%;\n            width: 15%;\n            padding: 3% 0% 3% 0%;\n            outline: none;\n            border: 1px solid #5f9ea0;\n            border-radius: 0px;\n            background: #5f9ea0;\n            color: white;\n        }\n        .done-btn-enabled:hover {\n            background: #008b8b;\n            color: white;\n        }\n        .done-btn-disabled {\n            margin-left: 0%;\n            width: 15%;\n            padding: 3% 0% 3% 0%;\n            outline: none;\n            border: 1px solid #daa520;\n            border-radius: 0px;\n            background: #daa520;\n            color: white;\n        }\n        .done-btn-disabled:hover {\n            background: #ffd700;\n            color: white;\n        }\n\n        </style>`,this.shadowRoot.querySelector("li").addEventListener("click",(e=>this.onClick(e))),this.shadowRoot.querySelector("button").addEventListener("click",(e=>this.onDoneClick(e)))}disconnectedCallback(){this.shadowRoot.querySelector("li").removeEventListener("click",this.onClick),this.shadowRoot.querySelector("button").removeEventListener("click",this.onDoneClick)}onClick(e){e.preventDefault();const t=new CustomEvent("elclicked",{bubbles:!0,detail:{name:this.getAttribute("name")}});this.dispatchEvent(t)}onDoneClick(e){e.preventDefault();const t=new CustomEvent("done-elclicked",{bubbles:!0,detail:{name:this.getAttribute("name")}});this.dispatchEvent(t)}}window.customElements.define("item-list-element",t)}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,n),s.exports}(()=>{"use strict";const e=e=>({inputElement:e.querySelector("input#input"),inputSection:e.querySelector(".input-section"),button:e.querySelector("button#btn"),itemList:e.querySelector("item-list#s")}),t=e=>'<div><p>shopping app: version 0.1</p></div><div class="input-section"><input type="text" autocomplete="off" class="search" id="input"></input>\n        </div>\n        <div class="main">\n        <display-details></display-details>\n        <item-list id="s" showdisabled="true"></item-list>\n        </div>\n        <style>\n        :host input#input:hover {\n            border: 1px solid #5f9ea0;\n            border-radius: 5px;\n        }\n        :host input#input:focus {\n            border: 1px solid #5f9ea0;\n        }\n        :host input#input {\n            width: 100%;\n            padding: 10px 10px 10px 10px;\n            padding-right: 22%;\n            border: 1px solid #ddd;\n            border-radius: 5px;\n            outline: none;\n        }\n        :host .main {\n            display: flex;\n            flex-direction: column;\n        }\n        :host .input-section {\n            display: flex;\n            flex-direction: row;\n        }\n        :host button#btn {\n            margin-left: -20%;\n            width: 30%;\n            outline: none;\n            border: 1px solid #5f9ea0;\n            border-radius: 5px;\n            background: #5f9ea0;\n            color: white;\n        }\n        :host button#btn:hover {\n            background: #008b8b;\n            color: white;\n        }\n\n        </style>\n        ';n(774);class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.data=null,this.el=null}static get observedAttributes(){return["data"]}set data(e){this.el=e?e.elements:null,this.setAttribute("data","obj")}onElClicked(e){const t=new CustomEvent("elclicked",{bubbles:!0,detail:e.detail});this.dispatchEvent(t)}onDoneElClicked(e){const t=new CustomEvent("done-elclicked",{bubbles:!0,detail:e.detail});this.dispatchEvent(t)}connectedCallback(){this.render(),this.shadowRoot.addEventListener("elclicked",(e=>this.onElClicked(e))),this.shadowRoot.addEventListener("done-elclicked",(e=>this.onDoneElClicked(e)))}disconnectedCallback(){this.shadowRoot.removeEventListener("elclicked",this.onElClicked),this.shadowRoot.removeEventListener("done-elclicked",this.onDoneElClicked)}render(){if(this.el){const e="false"===this.getAttribute("showdisabled")?this.el.filter((e=>!0===e.enabled)):this.el.sort(((e,t)=>t.enabled-e.enabled));let t="<ul>";for(let n of e)t+=`<item-list-element name="${n.name}" category="${n.category}" enabled="${n.enabled}"></item-list-element>`;t+="</ul>\n            <style>\n            :host ul {\n                list-style-type: none;\n                padding: 0;\n                margin: 0;\n            }\n            </style>",this.shadowRoot.innerHTML=t}}attributeChangedCallback(e,t,n){"data"===e&&this.render()}}window.customElements.define("item-list",a);const i={elements:[{name:"Tomaten",details:"Rispentomaten 500g Schale",category:"Gemüse",enabled:!0},{name:"Kartoffeln Vorwiegend Festkochend",details:"Eine Packung",category:"Gemüse",enabled:!1},{name:"Gurke",details:"Ein Stück",category:"Gemüse",enabled:!1},{name:"Fisch",details:"Lachsfilet oder Rotbarsch",category:"Meer",enabled:!0},{name:"Griechischer Joghurt",details:"250g",category:"Milchprodukte",enabled:!1},{name:"Parmesan",details:"250g",category:"Milchprodukte",enabled:!1},{name:"Ementaller",details:"250g",category:"Milchprodukte",enabled:!1},{name:"Zahnpasta",details:"Colgate Total",category:"Hygiene",enabled:!0},{name:"Brot",details:"Urkorn",category:"Bäckerei",enabled:!0},{name:"Duschgel",details:"Erfrischend",category:"Hygiene",enabled:!0},{name:"Semmeln",details:"Weiß",category:"Bäckerei",enabled:!0},{name:"Weizenmehl 405",details:"Weiß",category:"Getreide",enabled:!0},{name:"Spaghetti",details:"Weiß",category:"Getreide",enabled:!0},{name:"Pasta Pene",details:"Weiß",category:"Getreide",enabled:!0},{name:"Cornflakes",details:"Weiß",category:"Getreide",enabled:!0},{name:"Toast",details:"Weiß",category:"Getreide",enabled:!0},{name:"Haferflocken",details:"Weiß",category:"Getreide",enabled:!0},{name:"Schwarzer Tee",details:"Weiß",category:"Tee",enabled:!0},{name:"Ketchup",details:"Weiß",category:"Saucen",enabled:!0},{name:"Zitrone",details:"Weiß",category:"Obst",enabled:!0},{name:"Banane",details:"Weiß",category:"Obst",enabled:!0},{name:"Orangen",details:"Weiß",category:"Obst",enabled:!0},{name:"Birne",details:"Weiß",category:"Obst",enabled:!0},{name:"Trauben",details:"Weiß",category:"Obst",enabled:!0},{name:"Heidelbeeren",details:"Weiß",category:"Obst",enabled:!0},{name:"Hotdog buns",details:"Weiß",category:"Bäckerei",enabled:!0},{name:"Kiwi",details:"Weiß",category:"Obst",enabled:!0},{name:"Pelmeni",details:"Weiß",category:"Fertiggerichte",enabled:!0},{name:"Chicken Nuggets",details:"Weiß",category:"Fleisch",enabled:!0},{name:"H-Milch",details:"250g",category:"Milchprodukte",enabled:!1},{name:"Mozarella gerieben",details:"250g",category:"Milchprodukte",enabled:!1},{name:"Mascarpone",details:"250g",category:"Milchprodukte",enabled:!1},{name:"Butter",details:"250g",category:"Milchprodukte",enabled:!1},{name:"Philadelphia",details:"250g",category:"Milchprodukte",enabled:!1},{name:"Mozarella frisch",details:"250g",category:"Milchprodukte",enabled:!1},{name:"Burger Käse",details:"250g",category:"Milchprodukte",enabled:!1},{name:"Schlagsahne",details:"250g",category:"Milchprodukte",enabled:!0},{name:"Fruchtjoghurt",details:"250g",category:"Milchprodukte",enabled:!1},{name:"Sauere Sahne",details:"250g",category:"Milchprodukte",enabled:!0},{name:"Feta Käse",details:"250g",category:"Milchprodukte",enabled:!1},{name:"Salami",details:"250g",category:"Fleisch",enabled:!1},{name:"Hackfleisch Rind",details:"250g",category:"Fleisch",enabled:!1},{name:"Hänchenbrust",details:"250g",category:"Fleisch",enabled:!1},{name:"Schinken",details:"250g",category:"Fleisch",enabled:!1},{name:"Gulasch Rind",details:"250g",category:"Fleisch",enabled:!1},{name:"Pute",details:"250g",category:"Fleisch",enabled:!1},{name:"Wiener Würste",details:"250g",category:"Fleisch",enabled:!1},{name:"Kirschen",details:"Weiß",category:"Obst",enabled:!0},{name:"Apfel",details:"Weiß",category:"Obst",enabled:!0},{name:"Grapefruit",details:"Weiß",category:"Obst",enabled:!0},{name:"Paprika",details:"Weiß",category:"Gemüse",enabled:!0},{name:"Zwiebeln",details:"Weiß",category:"Gemüse",enabled:!0},{name:"Suppengemüse",details:"Weiß",category:"Gemüse",enabled:!0},{name:"Knoblauch",details:"Weiß",category:"Gemüse",enabled:!0},{name:"Spinat",details:"Weiß",category:"Gemüse",enabled:!0},{name:"Passierte Tomaten",details:"Weiß",category:"Gemüse",enabled:!0},{name:"Champignons",details:"Weiß",category:"Gemüse",enabled:!0},{name:"Jalapeno",details:"Weiß",category:"Gemüse",enabled:!0},{name:"Eisbergsalat",details:"Weiß",category:"Gemüse",enabled:!0},{name:"Eingelegte Gurken",details:"Weiß",category:"Gemüse",enabled:!0},{name:"Brokkoli",details:"Weiß",category:"Gemüse",enabled:!0},{name:"Aubergine",details:"Weiß",category:"Gemüse",enabled:!0}]},s=()=>i;class l extends HTMLElement{static get observedAttributes(){return["name"]}connectedCallback(){this.render()}render(){const e=this.getAttribute("name")||"",t=(e=>i.elements.filter((t=>t.name===e)).pop()||{name:e,details:""})(e);this.innerHTML=`<div class="details"><p>${e}</p><p>${t.details||""}</p></div>\n        <style>\n        .details {\n            margin: 20px;\n        }\n        </style>`}attributeChangedCallback(e,t,n){"name"===e&&this.render()}}window.customElements.define("display-details",l),"serviceWorker"in navigator&&navigator.serviceWorker.register("/serviceworker.js").then((function(e){console.log("Service worker registered with scope:",e.scope)})).catch((function(e){console.log("Service worker registration failed",e)}));class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.addbtn=!1,this.search_term=""}removeAddBtn(){!0===this.addbtn&&(this.shadowRoot.querySelector("button#btn").removeEventListener("click",this.onAddClick),this.dom.inputSection.removeChild(this.shadowRoot.querySelector("button#btn")),this.addbtn=!1)}onAddClick(e){var t;t=this.search_term,i.elements.push({name:t,details:"none",category:"none",enabled:!0}),this.removeAddBtn(),this.render(),this.search_term=""}onInputChange(e){this.search_term=e.target.value;const t={elements:s().elements.filter((e=>e.name.toLowerCase().includes(this.search_term.toLowerCase())||e.category.toLocaleLowerCase().includes(this.search_term.toLowerCase())))};if(this.dom.itemList.data=t,0==t.elements.length&&(this.dom.inputElement.setAttribute("noresult",!0),!1===this.addbtn)){this.button=document.createDocumentFragment();const e=document.createElement("button");e.innerText="Add Item",e.id="btn",this.button.appendChild(e),this.dom.inputSection.appendChild(this.button),this.shadowRoot.querySelector("button#btn").addEventListener("click",(e=>this.onAddClick(e))),this.addbtn=!0}t.elements.length>0&&(this.dom.inputElement.setAttribute("noresult",!1),this.removeAddBtn())}onElClicked(e){this.shadowRoot.querySelector("display-details").setAttribute("name",e.detail.name)}onDoneElClicked(e){var t;t=e.detail.name,i.elements=i.elements.map(((e,n,a)=>e.name===t?(console.log(e.enabled?"disable":"enable",e.name),{name:e.name,details:e.details,category:e.category,enabled:!e.enabled}):e));const n={elements:s().elements.filter((e=>e.name.toLowerCase().includes(this.search_term.toLowerCase())||e.category.toLocaleLowerCase().includes(this.search_term.toLowerCase())))};this.dom.itemList.data=n}render(){this.shadowRoot.innerHTML=t({noresult:this.noresult}),this.dom=e(this.shadowRoot),this.dom.inputElement.addEventListener("input",(e=>this.onInputChange(e))),this.dom.itemList.data=s()}disconnetedCallback(){this.dom.inputElement.removeEventListener("input",this.onInputChange),this.shadowRoot.removeEventListener("elclicked",this.onElClicked),this.shadowRoot.removeEventListener("done-elclicked",this.onDoneElClicked)}connectedCallback(){this.render(),this.shadowRoot.addEventListener("elclicked",(e=>this.onElClicked(e))),this.shadowRoot.addEventListener("done-elclicked",(e=>this.onDoneElClicked(e)))}}window.customElements.define("fe-search",o)})()})();