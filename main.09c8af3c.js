parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=r(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,i=!0,l=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==a.return||a.return()}finally{if(l)throw o}}}}function t(e){return o(e)||a(e)||r(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return i(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=document.body,c=document.querySelector("thead"),u=c.querySelectorAll("th"),d=document.querySelector("tbody"),s=d.rows,f=document.createElement("form"),m="success",p="error",y=null,b="",v="",h=!1;function g(e){return+e.replace(/\D/g,"")}function C(t){var n,r="",a=e(t.split(" "));try{for(a.s();!(n=a.n()).done;){var o=n.value;""!==o&&(r+=o[0].toUpperCase()+o.slice(1).toLowerCase()+" ")}}catch(i){a.e(i)}finally{a.f()}return r.trim()}function x(e){return"$".concat(e.replace(/\B(?=(\d{3})+(?!\d))/g,","))}function S(e,t){var n=l.querySelector("#notification");n&&n.remove();var r=document.createElement("div"),a=document.createElement("h2"),o=document.createElement("p");r.id="notification",r.className="notification ".concat(e),r.setAttribute("data-qa","notification"),a.className="title",a.textContent=C(e),o.textContent=t,r.append(a,o),l.append(r),setTimeout(function(){return r.remove()},3e3)}function q(e){if(e.length<4)return S(p,v="Name must contain more than three letters!"),!0}function w(e){return+e<18?(S(p,v="The employee must be over than 18 years old!"),!1):!(+e>90)||(S(p,v="The employee must be under than 90 years of age!"),!1)}function A(e,n){return t(e).indexOf(n)}f.className="new-employee-form",c.addEventListener("click",function(e){var n=e.target.closest("th"),r=document.createElement("tbody"),a=A(u,n),o=t(s).sort(function(e,t){var r=e.children[a].textContent,o=t.children[a].textContent;return"Age"===n.textContent||"Salary"===n.textContent?y===n?g(o)-g(r):g(r)-g(o):y===n?o.localeCompare(r):r.localeCompare(o)});r.append.apply(r,t(o)),d.innerHTML=r.innerHTML,y=y===n?null:n}),d.addEventListener("click",function(t){var n,r=t.target.closest("tr"),a=e(s);try{for(a.s();!(n=a.n()).done;){var o=n.value;o.children[0].textContent===b&&o.classList.toggle("active")}}catch(i){a.e(i)}finally{a.f()}r.classList.toggle("active"),b=r.children[0].textContent}),f.insertAdjacentHTML("afterbegin",'\n  <label>\n    Name:\n    <input name="name" type="text" data-qa="name" required>\n  </label>\n\n  <label>\n    Position:\n    <input name="position" type="text" data-qa="name" required>\n  </label>\n\n  <label>\n    Office:\n    <select name="office" data-qa="office" required>\n      <option value="tokyo">\n        Tokyo\n      </option>\n      <option value="singapore">\n        Singapore\n      </option>\n      <option value="london">\n        London\n      </option>\n      <option value="new york">\n        New York\n      </option>\n      <option value="edinburgh">\n        Edinburgh\n      </option>\n      <option value="san francisco">\n        San Francisco \n      </option>\n    </select>\n  </label>\n\n  <label>\n    Age:\n    <input name="age" type="number" data-qa="age" required>\n  </label>\n\n  <label>\n    Salary:\n    <input name="salary" type="number" data-qa="salary" required>\n  </label>\n\n  <button>Save to table</button>\n'),l.append(f),f.addEventListener("submit",function(e){e.preventDefault();var t=new FormData(f),n=Object.fromEntries(t.entries()),r=C(n.name),a=C(n.position),o=C(n.office),i=n.age,l=x(n.salary);!q(r)&&w(i)&&(d.insertAdjacentHTML("beforeend","\n    <tr>\n      <td>".concat(r,"</td>\n      <td>").concat(a,"</td>\n      <td>").concat(o,"</td>\n      <td>").concat(i,"</td>\n      <td>").concat(l,"</td>\n    </tr>\n  ")),S(m,v="New employee added!"))}),d.addEventListener("dblclick",function(e){var t=e.target.closest("tr"),n=e.target.closest("td"),r=document.querySelectorAll("label")[A(t.children,n)].children[0].cloneNode(!0);r.className="cell-input";var a="salary"===r.name?n.textContent.replace(/\D/g,""):n.textContent;!1===h&&(h=!0,n.textContent="",r.value=a,n.append(r),r.focus(),r.onblur=function(){switch(!0){case""===r.value:n.textContent=a;break;case"name"===r.name:if(q(r.value)){n.textContent=a;break}n.textContent=C(r.value);break;case"position"===r.name:case"office"===r.name:n.textContent=C(r.value);break;case"age"===r.name:if(!w(r.value)){n.textContent=a;break}n.textContent=r.value;break;case"salary"===r.name:n.textContent=x(r.value)}h=!1,r.remove()}),r.addEventListener("keydown",function(e){"Enter"===e.key&&r.onblur()})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.09c8af3c.js.map